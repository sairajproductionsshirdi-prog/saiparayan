/**********************************************************************
 *  Firebase configuration — श्री साईसच्चरित पारायण नोंदणी
 *  Loaded by BOTH index.html (to save registrations) and
 *  admin.html (to read them in the dashboard).
 *
 *  Safe to be public — your data is protected by the Firestore
 *  security rules, not by hiding this config.
 **********************************************************************/

var firebaseConfig = {
  apiKey: "AIzaSyCpENwTG4VjKzraAHFD4Wlmn_i_24CjCpM",
  authDomain: "shree-sai-parayan.firebaseapp.com",
  projectId: "shree-sai-parayan",
  storageBucket: "shree-sai-parayan.firebasestorage.app",
  messagingSenderId: "174123973810",
  appId: "1:174123973810:web:e43619f90bf53d33161dab",
  measurementId: "G-39EKMWT95L"
};

// Initialise (guarded so it only runs once)
try {
  if (window.firebase && !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
} catch (e) {
  console.warn("Firebase init skipped:", e);
}
