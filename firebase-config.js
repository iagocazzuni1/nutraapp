// ============================================
// FIREBASE CONFIGURATION
// Replace with your own Firebase config from console.firebase.google.com
// ============================================

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Check if Firebase should be used (config is set)
const USE_FIREBASE = firebaseConfig.apiKey !== "YOUR_API_KEY";

// Initialize Firebase if config is valid
let firebaseApp = null;
let firebaseAuth = null;
let firebaseDb = null;

if (USE_FIREBASE && typeof firebase !== 'undefined') {
    try {
        firebaseApp = firebase.initializeApp(firebaseConfig);
        firebaseAuth = firebase.auth();
        firebaseDb = firebase.firestore();
        console.log('Firebase initialized successfully!');
    } catch (error) {
        console.warn('Firebase initialization failed:', error.message);
    }
} else {
    console.log('Using localStorage fallback (Firebase not configured)');
}
