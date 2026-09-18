// ============================================================
// Olivos Staff Portal — Firebase initialization
// The config below is a PUBLIC identifier (safe to be in client
// code). Real security comes from Firebase Authentication +
// Firestore security rules.
// ============================================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAuth, setPersistence, browserLocalPersistence } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBWexhzaRfQ__9JZT7gKeITaQnSPoPhOhg",
  authDomain: "olivos-med-staff-portal.firebaseapp.com",
  projectId: "olivos-med-staff-portal",
  storageBucket: "olivos-med-staff-portal.firebasestorage.app",
  messagingSenderId: "277157598755",
  appId: "1:277157598755:web:625320d3edc60174ac4396",
  measurementId: "G-EBG9B8JBFY"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Keep staff signed in across page loads / refreshes.
setPersistence(auth, browserLocalPersistence).catch(() => {});
