// ============================================
// AUTH.JS - Authentication System for NutriPlan
// Supports Firebase Auth with localStorage fallback
// ============================================

// Storage keys
const USERS_KEY = 'nutriplan_users';
const CURRENT_USER_KEY = 'nutriplan_current_user';

// ============================================
// USER MANAGEMENT
// ============================================

/**
 * Get all registered users (localStorage)
 */
function getUsers() {
    const users = localStorage.getItem(USERS_KEY);
    return users ? JSON.parse(users) : [];
}

/**
 * Save users to localStorage
 */
function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

/**
 * Get current logged in user
 */
function getCurrentUser() {
    // Check Firebase first
    if (typeof firebaseAuth !== 'undefined' && firebaseAuth && firebaseAuth.currentUser) {
        const fbUser = firebaseAuth.currentUser;
        // Get additional data from localStorage
        const localData = localStorage.getItem(CURRENT_USER_KEY);
        const parsed = localData ? JSON.parse(localData) : {};
        return {
            id: fbUser.uid,
            name: fbUser.displayName || parsed.name || 'User',
            email: fbUser.email,
            isPremium: parsed.isPremium || false,
            premiumSince: parsed.premiumSince || null
        };
    }

    // Fallback to localStorage
    const user = localStorage.getItem(CURRENT_USER_KEY);
    return user ? JSON.parse(user) : null;
}

/**
 * Save current user to localStorage
 */
function saveCurrentUser(user) {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
}

/**
 * Check if user is logged in
 */
function isLoggedIn() {
    return getCurrentUser() !== null;
}

/**
 * Check if user has premium
 */
function isPremium() {
    const user = getCurrentUser();
    return user && user.isPremium === true;
}

// ============================================
// AUTHENTICATION FUNCTIONS
// ============================================

/**
 * Register a new user
 */
async function registerUser(name, email, password) {
    // Try Firebase first
    if (typeof firebaseAuth !== 'undefined' && firebaseAuth) {
        try {
            const userCredential = await firebaseAuth.createUserWithEmailAndPassword(email, password);
            const user = userCredential.user;

            // Update profile with name
            await user.updateProfile({ displayName: name });

            // Save additional data locally
            const userData = {
                id: user.uid,
                name: name,
                email: email.toLowerCase(),
                isPremium: false,
                createdAt: new Date().toISOString()
            };
            saveCurrentUser(userData);

            return { success: true, user: userData };
        } catch (error) {
            let message = 'Registration failed';
            if (error.code === 'auth/email-already-in-use') {
                message = 'Email already registered';
            } else if (error.code === 'auth/weak-password') {
                message = 'Password is too weak';
            } else if (error.code === 'auth/invalid-email') {
                message = 'Invalid email address';
            }
            return { success: false, message: message };
        }
    }

    // Fallback to localStorage
    const users = getUsers();

    // Check if email already exists
    if (users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
        return { success: false, message: 'Email already registered' };
    }

    // Create new user
    const newUser = {
        id: Date.now(),
        name: name,
        email: email.toLowerCase(),
        password: password, // In production, this should be hashed!
        isPremium: false,
        createdAt: new Date().toISOString()
    };

    users.push(newUser);
    saveUsers(users);

    // Auto login after registration
    saveCurrentUser(newUser);

    return { success: true, user: newUser };
}

/**
 * Login user
 */
async function loginUser(email, password) {
    // Try Firebase first
    if (typeof firebaseAuth !== 'undefined' && firebaseAuth) {
        try {
            const userCredential = await firebaseAuth.signInWithEmailAndPassword(email, password);
            const user = userCredential.user;

            // Get premium status from localStorage
            const localData = localStorage.getItem(CURRENT_USER_KEY);
            const parsed = localData ? JSON.parse(localData) : {};

            const userData = {
                id: user.uid,
                name: user.displayName || 'User',
                email: user.email,
                isPremium: parsed.isPremium || false,
                premiumSince: parsed.premiumSince || null
            };
            saveCurrentUser(userData);

            return { success: true, user: userData };
        } catch (error) {
            let message = 'Invalid email or password';
            if (error.code === 'auth/user-not-found') {
                message = 'No account found with this email';
            } else if (error.code === 'auth/wrong-password') {
                message = 'Invalid password';
            }
            return { success: false, message: message };
        }
    }

    // Fallback to localStorage
    const users = getUsers();

    const user = users.find(u =>
        u.email.toLowerCase() === email.toLowerCase() &&
        u.password === password
    );

    if (!user) {
        return { success: false, message: 'Invalid email or password' };
    }

    saveCurrentUser(user);
    return { success: true, user: user };
}

/**
 * Logout user
 */
async function logoutUser() {
    // Sign out from Firebase if available
    if (typeof firebaseAuth !== 'undefined' && firebaseAuth) {
        try {
            await firebaseAuth.signOut();
        } catch (error) {
            console.warn('Firebase signOut error:', error);
        }
    }

    localStorage.removeItem(CURRENT_USER_KEY);
    updateNavAuth();
    updatePremiumUI();
}

/**
 * Upgrade user to premium via Stripe
 */
function upgradeToPremium() {
    const user = getCurrentUser();

    if (!user) {
        // Need to login first
        openModal('loginModal');
        return;
    }

    // Check if Stripe is configured
    if (typeof STRIPE_PAYMENT_LINK !== 'undefined' && STRIPE_PAYMENT_LINK) {
        // Redirect to Stripe Checkout
        window.location.href = STRIPE_PAYMENT_LINK;
        return;
    }

    // Demo mode - instantly upgrade (for testing only)
    user.isPremium = true;
    user.premiumSince = new Date().toISOString();

    // Update in users list (localStorage)
    const users = getUsers();
    const index = users.findIndex(u => u.id === user.id);
    if (index !== -1) {
        users[index] = user;
        saveUsers(users);
    }

    // Update current user
    saveCurrentUser(user);

    // Close premium modal
    closeModal('premiumModal');

    // Update UI
    updateNavAuth();
    updatePremiumUI();

    // Show success message
    alert('Welcome to NutriPlan Premium! You now have full access to all recipes and workout plans.');
}

/**
 * Handle Stripe payment success callback
 */
function handlePaymentSuccess() {
    const urlParams = new URLSearchParams(window.location.search);
    const success = urlParams.get('success');
    const sessionId = urlParams.get('session_id');

    if (success === 'true') {
        const user = getCurrentUser();
        if (user) {
            user.isPremium = true;
            user.premiumSince = new Date().toISOString();
            user.stripeSessionId = sessionId;

            // Update in users list
            const users = getUsers();
            const index = users.findIndex(u => u.id === user.id);
            if (index !== -1) {
                users[index] = user;
                saveUsers(users);
            }

            saveCurrentUser(user);
            updateNavAuth();
            updatePremiumUI();

            // Clean up URL
            window.history.replaceState({}, document.title, window.location.pathname);

            alert('Payment successful! Welcome to NutriPlan Premium!');
        }
    }
}

// ============================================
// UI FUNCTIONS
// ============================================

/**
 * Update navigation auth section
 */
function updateNavAuth() {
    const navAuth = document.getElementById('navAuth');
    const user = getCurrentUser();

    if (user) {
        navAuth.innerHTML = `
            <div class="user-info">
                <span class="user-name">Hi, ${user.name.split(' ')[0]}!</span>
                ${user.isPremium ? '<span class="premium-status">Premium</span>' : ''}
                <button class="btn-logout" onclick="logoutUser()">Logout</button>
            </div>
        `;
    } else {
        navAuth.innerHTML = `
            <button class="btn-login" onclick="openModal('loginModal')">Login</button>
            <button class="btn-register" onclick="openModal('loginModal'); switchAuthTab('register')">Sign Up</button>
        `;
    }
}

/**
 * Update premium UI elements
 */
function updatePremiumUI() {
    const premium = isPremium();

    // Update badges
    const mealBadge = document.getElementById('mealPlanBadge');
    const workoutBadge = document.getElementById('workoutPlanBadge');

    if (mealBadge) {
        mealBadge.textContent = premium ? '✓ Unlocked' : 'Premium';
        mealBadge.classList.toggle('unlocked', premium);
    }

    if (workoutBadge) {
        workoutBadge.textContent = premium ? '✓ Unlocked' : 'Premium';
        workoutBadge.classList.toggle('unlocked', premium);
    }
}

/**
 * Switch between login and register tabs
 */
function switchAuthTab(tab) {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const tabs = document.querySelectorAll('.auth-tab');

    tabs.forEach(t => t.classList.remove('active'));

    if (tab === 'login') {
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
        tabs[0].classList.add('active');
    } else {
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
        tabs[1].classList.add('active');
    }

    // Clear errors
    document.getElementById('loginError').classList.remove('show');
    document.getElementById('registerError').classList.remove('show');
}

/**
 * Check premium access before showing content
 */
function checkPremiumAccess(callback) {
    if (isPremium()) {
        callback();
    } else if (isLoggedIn()) {
        openModal('premiumModal');
    } else {
        openModal('loginModal');
    }
}

// ============================================
// FORM HANDLERS
// ============================================

// Login form handler
document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const errorDiv = document.getElementById('loginError');

    const result = await loginUser(email, password);

    if (result.success) {
        closeModal('loginModal');
        updateNavAuth();
        updatePremiumUI();
        this.reset();
    } else {
        errorDiv.textContent = result.message;
        errorDiv.classList.add('show');
    }
});

// Register form handler
document.getElementById('registerForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirm = document.getElementById('registerConfirm').value;
    const errorDiv = document.getElementById('registerError');

    // Validate passwords match
    if (password !== confirm) {
        errorDiv.textContent = 'Passwords do not match';
        errorDiv.classList.add('show');
        return;
    }

    const result = await registerUser(name, email, password);

    if (result.success) {
        closeModal('loginModal');
        updateNavAuth();
        updatePremiumUI();
        this.reset();
        alert('Account created successfully! Welcome to NutriPlan!');
    } else {
        errorDiv.textContent = result.message;
        errorDiv.classList.add('show');
    }
});

// ============================================
// INITIALIZATION
// ============================================

// Initialize auth UI on page load
document.addEventListener('DOMContentLoaded', function() {
    updateNavAuth();
    updatePremiumUI();

    // Handle payment success callback
    handlePaymentSuccess();

    // Listen for Firebase auth state changes
    if (typeof firebaseAuth !== 'undefined' && firebaseAuth) {
        firebaseAuth.onAuthStateChanged(function(user) {
            updateNavAuth();
            updatePremiumUI();
        });
    }
});
