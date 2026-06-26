/* =========================================================
   Olivos Medical Center & Spa — Site JavaScript
   =========================================================

   >>> EDIT YOUR healow LINKS HERE <<<
   Replace the "#" placeholder values below with your real
   healow URLs (instructions are in README.md). After you
   paste them in, every "Book", "Portal", and "TeleVisit"
   button across the whole site updates automatically.
*/
const OLIVOS_LINKS = {
  // In-person booking now goes to our own request form page (works today, no healow URL needed).
  // If you'd rather send patients straight to healow Open Access self-scheduling,
  // replace "appointment.html" with your healow booking URL.
  booking:   "appointment.html",
  // Patient Portal → Olivos healow page provided by eCW (logo + welcome).
  portal:    "https://health.healow.com/Olivosmedicalcenter",
  // TeleVisit → Olivos portal page with the Join-a-Televisit option.
  televisit: "https://mycw224.ecwcloud.com/portal26894/jsp/100mp/login_otp.jsp",
  // Google reviews. These default to your Google Maps listing (works now).
  // For one-tap reviews, replace reviewWrite with your direct Google review link
  // (from Google Business Profile, looks like https://g.page/r/XXXX/review).
  reviewRead:  "https://www.google.com/maps/search/?api=1&query=Olivos%20Medical%20Center%20%26%20Spa%2025001%20SW%20127th%20Ave%20Suite%20202%20Homestead%20FL%2033032",
  reviewWrite: "https://www.google.com/maps/search/?api=1&query=Olivos%20Medical%20Center%20%26%20Spa%2025001%20SW%20127th%20Ave%20Suite%20202%20Homestead%20FL%2033032"
};

// Apply links to any element with data-link="booking|portal|televisit".
// External (http) links open in a new tab; internal pages open in the same tab.
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-link]").forEach((el) => {
    const url = OLIVOS_LINKS[el.getAttribute("data-link")];
    if (!url) return;
    el.setAttribute("href", url);
    if (/^https?:/i.test(url)) {
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    }
  });

  /* ---------- Language toggle (EN / ES) ---------- */
  const saved = localStorage.getItem("olivos-lang") || "en";
  setLang(saved);

  document.querySelectorAll(".lang-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const next = document.documentElement.getAttribute("lang") === "es" ? "en" : "es";
      setLang(next);
    });
  });

  /* ---------- Mobile nav ---------- */
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => links.classList.remove("open"))
    );
  }
});

function setLang(lang) {
  document.documentElement.setAttribute("lang", lang);
  localStorage.setItem("olivos-lang", lang);
  document.querySelectorAll(".lang-toggle .lang-current").forEach((el) => {
    el.textContent = lang === "es" ? "EN" : "ES";
  });
  // Update elements carrying both data-en / data-es attributes (e.g. button labels, alt text)
  document.querySelectorAll("[data-en][data-es]").forEach((el) => {
    el.textContent = lang === "es" ? el.getAttribute("data-es") : el.getAttribute("data-en");
  });
}
