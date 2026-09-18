// ============================================================
// Olivos Staff Portal — shared config
// Admins are identified by Firebase UID (stable, can't be spoofed).
// The SAME two UIDs are enforced in the Firestore security rules.
// ============================================================
export const ADMINS = {
  "toCuF9ZjuNcn4ujM2ijl0NHK2kC3": { name: "Rody",  color: "#1f8a70" }, // teal
  "5cjAusU8YYORnXu2cxoxu5k6h9x2": { name: "Janet", color: "#8a4f9e" }  // plum
};

export const CATEGORIES = ["Reception", "Clinical", "Admin", "Management", "General"];

// "For / assigned to" targets — same simple set as the categories.
export const GROUPS = ["Reception", "Clinical", "Admin", "Management", "General"];

export function isAdmin(uid) { return !!ADMINS[uid]; }

// A stable color for any user (admins get their set color; others derive one)
const PALETTE = ["#4f6720", "#b8912f", "#2f7d8a", "#a2553f", "#6d5aa8", "#3f7a4f", "#9a6a2e"];
export function colorFor(uid) {
  if (ADMINS[uid]) return ADMINS[uid].color;
  let h = 0; for (const c of (uid || "")) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return PALETTE[h % PALETTE.length];
}
