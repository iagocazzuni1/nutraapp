// ============================================
// FIREBASE CONFIGURATION
// Replace with your own Firebase config from console.firebase.google.com
// ============================================

const firebaseConfig = {
    apiKey: "AIzaSyAuk8GrXwT9Z3kS-8Uv4yLqhZ06bPuAbMI",
    authDomain: "nutraapp-fad78.firebaseapp.com",
    projectId: "nutraapp-fad78",
    storageBucket: "nutraapp-fad78.firebasestorage.app",
    messagingSenderId: "204437346983",
    appId: "1:204437346983:web:e5742996223c292a01d982"
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
