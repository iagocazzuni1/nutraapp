// ============================================
// AUTH.JS - Authentication System for NutriPlan
// Supports Firebase Auth with localStorage fallback
// ============================================

// Storage keys
const USERS_KEY = 'nutriplan_users';
const CURRENT_USER_KEY = 'nutriplan_current_user';
const USER_PLAN_PREFIX = 'nutriplan_user_plan_';
const PENDING_FORM_KEY = 'nutriplan_pending_form';

// ============================================
// FIRESTORE SYNC HELPERS
// ============================================

/**
 * Check if Firestore is available
 */
function isFirestoreAvailable() {
    return typeof firebaseDb !== 'undefined' && firebaseDb !== null;
}

/**
 * Get Firestore document reference for user
 */
function getUserDocRef(userId) {
    if (!isFirestoreAvailable() || !userId) return null;
    return firebaseDb.collection('users').doc(userId);
}

/**
 * Get Firestore document reference for user's plan
 */
function getPlanDocRef(userId) {
    if (!isFirestoreAvailable() || !userId) return null;
    return firebaseDb.collection('users').doc(userId).collection('plans').doc('current');
}

/**
 * Create user document in Firestore
 */
async function createUserInFirestore(userData) {
    if (!isFirestoreAvailable() || !userData?.id) return false;
    try {
        await getUserDocRef(userData.id).set({
            name: userData.name,
            email: userData.email,
            isPremium: false,
            premiumSince: null,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        return true;
    } catch (error) {
        console.warn('Firestore create user failed:', error);
        return false;
    }
}

/**
 * Sync user data from Firestore to localStorage
 */
async function syncUserFromFirestore(userId) {
    if (!isFirestoreAvailable() || !userId) return null;
    try {
        const doc = await getUserDocRef(userId).get();
        if (doc.exists) {
            const data = doc.data();
            const localData = localStorage.getItem(CURRENT_USER_KEY);
            const parsed = localData ? JSON.parse(localData) : {};
            return {
                ...parsed,
                id: userId,
                name: data.name || parsed.name,
                email: data.email || parsed.email,
                isPremium: data.isPremium || false,
                premiumSince: data.premiumSince || null
            };
        }
        return null;
    } catch (error) {
        console.warn('Firestore sync user failed:', error);
        return null;
    }
}

/**
 * Update premium status in Firestore
 */
async function updatePremiumInFirestore(userId, isPremium, premiumSince) {
    if (!isFirestoreAvailable() || !userId) return false;
    try {
        await getUserDocRef(userId).set({
            isPremium: isPremium,
            premiumSince: premiumSince
        }, { merge: true });
        return true;
    } catch (error) {
        console.warn('Firestore update premium failed:', error);
        return false;
    }
}

/**
 * Sync plan to Firestore
 */
async function syncPlanToFirestore(userId, plan) {
    if (!isFirestoreAvailable() || !userId || !plan) return false;
    try {
        await getPlanDocRef(userId).set({
            ...plan,
            createdAt: firebase.firestore.Timestamp.fromDate(new Date(plan.createdAt)),
            expiresAt: firebase.firestore.Timestamp.fromDate(new Date(plan.expiresAt))
        });
        return true;
    } catch (error) {
        console.warn('Firestore sync plan failed:', error);
        return false;
    }
}

/**
 * Sync plan from Firestore to localStorage
 */
async function syncPlanFromFirestore(userId) {
    if (!isFirestoreAvailable() || !userId) return null;
    try {
        const doc = await getPlanDocRef(userId).get();
        if (doc.exists) {
            const plan = doc.data();
            // Convert Firestore timestamps to ISO strings
            if (plan.createdAt?.toDate) plan.createdAt = plan.createdAt.toDate().toISOString();
            if (plan.expiresAt?.toDate) plan.expiresAt = plan.expiresAt.toDate().toISOString();
            // Update localStorage cache
            localStorage.setItem(getUserPlanKey(userId), JSON.stringify(plan));
            return plan;
        }
        return null;
    } catch (error) {
        console.warn('Firestore sync plan failed:', error);
        return null;
    }
}

/**
 * Migrate existing localStorage plan to Firestore if not already there
 * Called on login to ensure old plans get synced
 */
async function migratePlanToFirestoreIfNeeded(userId) {
    if (!isFirestoreAvailable() || !userId) return;

    try {
        // Check if plan exists in Firestore
        const doc = await getPlanDocRef(userId).get();
        if (doc.exists) {
            // Plan already in Firestore, no migration needed
            return;
        }

        // Check if plan exists in localStorage
        const localPlan = localStorage.getItem(getUserPlanKey(userId));
        if (localPlan) {
            const plan = JSON.parse(localPlan);
            console.log('Migrating existing plan to Firestore...');
            await syncPlanToFirestore(userId, plan);
            console.log('Plan migrated successfully!');
        }
    } catch (error) {
        console.warn('Plan migration check failed:', error);
    }
}

// ============================================
// PENDING FORM DATA FUNCTIONS
// ============================================

/**
 * Save pending form data when user submits without being logged in
 */
function savePendingFormData(formData) {
    localStorage.setItem(PENDING_FORM_KEY, JSON.stringify(formData));
}

/**
 * Get pending form data
 */
function getPendingFormData() {
    const data = localStorage.getItem(PENDING_FORM_KEY);
    return data ? JSON.parse(data) : null;
}

/**
 * Clear pending form data
 */
function clearPendingFormData() {
    localStorage.removeItem(PENDING_FORM_KEY);
}

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
 * Sign in with Google using Firebase
 */
async function signInWithGoogle() {
    // Check if Firebase is available
    if (typeof firebaseAuth === 'undefined' || !firebaseAuth) {
        alert('Google Sign-In requires Firebase. Please configure Firebase first.');
        return { success: false, message: 'Firebase not configured' };
    }

    try {
        const provider = new firebase.auth.GoogleAuthProvider();
        const result = await firebaseAuth.signInWithPopup(provider);
        const user = result.user;

        // Create userData object
        const userData = {
            id: user.uid,
            name: user.displayName || 'User',
            email: user.email,
            isPremium: false,
            createdAt: new Date().toISOString(),
            authProvider: 'google'
        };

        // Check if user already exists (to preserve premium status)
        const existingData = localStorage.getItem(CURRENT_USER_KEY);
        if (existingData) {
            const parsed = JSON.parse(existingData);
            if (parsed.id === user.uid) {
                userData.isPremium = parsed.isPremium || false;
                userData.premiumSince = parsed.premiumSince || null;
            }
        }

        // Save user data
        saveCurrentUser(userData);

        // Sync with Firestore
        syncUserFromFirestore(user.uid).then(firestoreUser => {
            if (firestoreUser) {
                saveCurrentUser(firestoreUser);
                updatePremiumUI();
            } else {
                createUserInFirestore(userData);
            }
        });

        // Close modal and update UI
        closeModal('loginModal');
        updateNavAuth();
        updatePremiumUI();
        updatePlanStatusUI();

        // Check for pending form data
        const pendingData = getPendingFormData();
        const currentPage = (window.location.pathname.split('/').pop() || 'index').replace('.html', '');

        if (pendingData) {
            // Clear pending data
            clearPendingFormData();
            // Generate plan and redirect to my-plan
            if (typeof generateAndDisplayResults === 'function') {
                generateAndDisplayResults(pendingData);
            }
        } else if (currentPage === 'planner') {
            // No pending data on planner - check if user has existing plan
            const existingPlan = loadUserPlan();
            if (existingPlan && isPlanLocked()) {
                window.location.href = 'my-plan.html';
            }
        } else if (currentPage === 'my-plan') {
            // On my-plan page, load existing plan
            if (typeof loadExistingPlan === 'function') {
                loadExistingPlan();
            }
        }

        return { success: true, user: userData };
    } catch (error) {
        console.error('Google Sign-In Error:', error);
        let message = 'Google Sign-In failed. Please try again.';
        if (error.code === 'auth/popup-closed-by-user') {
            message = 'Sign-in popup was closed. Please try again.';
        } else if (error.code === 'auth/popup-blocked') {
            message = 'Popup was blocked. Please allow popups and try again.';
        }

        // Show error in the modal
        const loginError = document.getElementById('loginError');
        const registerError = document.getElementById('registerError');
        if (loginError && !loginError.closest('.hidden')) {
            loginError.textContent = message;
            loginError.classList.add('show');
        } else if (registerError) {
            registerError.textContent = message;
            registerError.classList.add('show');
        }

        return { success: false, message: message };
    }
}

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

            // Sync to Firestore
            createUserInFirestore(userData);

            // Also add to localStorage users array as backup for login fallback
            const users = getUsers();
            const backupUser = {
                id: user.uid,
                email: email.toLowerCase(),
                password: password, // For fallback login
                name: name,
                isPremium: false,
                createdAt: userData.createdAt
            };
            // Only add if not already exists
            if (!users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
                users.push(backupUser);
                saveUsers(users);
            }

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

            // Get premium status from localStorage (current user or users array)
            const localData = localStorage.getItem(CURRENT_USER_KEY);
            const parsed = localData ? JSON.parse(localData) : {};

            // Also check users array for premium status (persists across logout)
            const users = getUsers();
            const existingUser = users.find(u => u.email.toLowerCase() === user.email.toLowerCase());

            const userData = {
                id: user.uid,
                name: user.displayName || 'User',
                email: user.email,
                isPremium: parsed.isPremium || (existingUser && existingUser.isPremium) || false,
                premiumSince: parsed.premiumSince || (existingUser && existingUser.premiumSince) || null
            };
            saveCurrentUser(userData);

            // Sync from Firestore (background)
            syncUserFromFirestore(user.uid).then(firestoreUser => {
                if (firestoreUser) {
                    saveCurrentUser(firestoreUser);
                    updateNavAuth();
                    updatePremiumUI();
                }
            });

            // Migrate old plans first, then sync from Firestore
            migratePlanToFirestoreIfNeeded(user.uid).then(() => {
                syncPlanFromFirestore(user.uid);
            });

            return { success: true, user: userData };
        } catch (error) {
            // Log error but don't return - try localStorage fallback
            console.warn('Firebase login failed, trying localStorage:', error.code);
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
    updatePlanStatusUI();

    // Redirect to landing page after logout
    const currentPage = (window.location.pathname.split('/').pop() || 'index').replace('.html', '');
    if (currentPage === 'my-plan') {
        window.location.href = 'index.html';
    }
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

    // Sync premium to Firestore
    updatePremiumInFirestore(user.id, true, user.premiumSince);

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

            // Sync premium to Firestore
            updatePremiumInFirestore(user.id, true, user.premiumSince);

            updateNavAuth();
            updatePremiumUI();

            // Clean up URL
            window.history.replaceState({}, document.title, window.location.pathname);

            alert('Payment successful! Welcome to NutriPlan Premium!');
        }
    }
}

// ============================================
// PLAN PERSISTENCE FUNCTIONS
// ============================================

/**
 * Get storage key for user's plan
 * @param {string|number} userId - User ID
 * @returns {string} - Storage key
 */
function getUserPlanKey(userId) {
    return `${USER_PLAN_PREFIX}${userId}`;
}

/**
 * Save user's plan to localStorage
 * @param {Object} plan - Plan object containing userData, calculations, duration, etc.
 */
function saveUserPlan(plan) {
    const user = getCurrentUser();
    if (!user) return false;

    const planData = {
        ...plan,
        createdAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + (plan.planDuration || 30) * 24 * 60 * 60 * 1000).toISOString()
    };

    localStorage.setItem(getUserPlanKey(user.id), JSON.stringify(planData));

    // Sync to Firestore
    syncPlanToFirestore(user.id, planData);

    return true;
}

/**
 * Load user's plan from localStorage
 * @returns {Object|null} - Plan object or null if not found
 */
function loadUserPlan() {
    const user = getCurrentUser();
    if (!user) return null;

    const planData = localStorage.getItem(getUserPlanKey(user.id));
    return planData ? JSON.parse(planData) : null;
}

/**
 * Check if user's plan is still locked (not expired)
 * @returns {boolean} - True if plan is active and locked
 */
function isPlanLocked() {
    const plan = loadUserPlan();
    if (!plan || !plan.expiresAt) return false;

    return new Date() < new Date(plan.expiresAt);
}

/**
 * Get remaining days of the plan
 * @returns {number} - Days remaining, 0 if expired or no plan
 */
function getPlanDaysRemaining() {
    const plan = loadUserPlan();
    if (!plan || !plan.expiresAt) return 0;

    const remaining = new Date(plan.expiresAt) - new Date();
    const days = Math.ceil(remaining / (24 * 60 * 60 * 1000));
    return Math.max(0, days);
}

/**
 * Delete user's plan
 */
function deletePlan() {
    const user = getCurrentUser();
    if (!user) return;

    localStorage.removeItem(getUserPlanKey(user.id));
}

/**
 * Get plan status info for UI
 * @returns {Object} - Status info with isActive, daysRemaining, expiresAt
 */
function getPlanStatus() {
    const plan = loadUserPlan();
    if (!plan) {
        return { isActive: false, daysRemaining: 0, expiresAt: null, createdAt: null };
    }

    const daysRemaining = getPlanDaysRemaining();
    return {
        isActive: daysRemaining > 0,
        daysRemaining: daysRemaining,
        expiresAt: plan.expiresAt,
        createdAt: plan.createdAt,
        planDuration: plan.planDuration || 30
    };
}

// ============================================
// UI FUNCTIONS
// ============================================

/**
 * Update navigation auth section
 */
function updateNavAuth() {
    const navAuth = document.getElementById('navAuth');
    if (!navAuth) return;

    const user = getCurrentUser();
    const currentPage = (window.location.pathname.split('/').pop() || 'index').replace('.html', '');

    if (user) {
        navAuth.innerHTML = `
            <div class="user-info">
                <span class="user-name">Hi, ${user.name.split(' ')[0]}!</span>
                ${user.isPremium ? '<span class="premium-status">Premium</span>' : ''}
                <a href="my-plan.html" class="btn-my-plan">My Plan</a>
                <button class="btn-logout" onclick="logoutUser()">Logout</button>
            </div>
        `;
    } else {
        // Check if we have login modal on this page
        const hasLoginModal = document.getElementById('loginModal');
        if (hasLoginModal) {
            navAuth.innerHTML = `
                <button class="btn-login" onclick="openModal('loginModal')">Login</button>
                <button class="btn-register" onclick="openModal('loginModal'); switchAuthTab('register')">Sign Up</button>
            `;
        } else {
            // Landing page - link to planner with login prompt
            navAuth.innerHTML = `
                <a href="planner.html" class="btn-login">Login</a>
                <a href="planner.html" class="btn-register">Sign Up</a>
            `;
        }
    }
}

/**
 * Update premium UI elements
 */
function updatePremiumUI() {
    const premium = isPremium();

    // Update badges (if they exist on this page)
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
 * Update plan status UI (banner and button state)
 */
function updatePlanStatusUI() {
    const status = getPlanStatus();
    const banner = document.getElementById('planStatusBanner');
    const btnRefazer = document.getElementById('btnRefazer');
    const currentPage = (window.location.pathname.split('/').pop() || 'index').replace('.html', '');

    if (banner) {
        if (status.isActive) {
            banner.classList.remove('hidden');
            banner.innerHTML = `
                <span class="plan-status-icon">✓</span>
                <span class="plan-status-text">
                    <strong>Plan Active</strong> - ${status.daysRemaining} day${status.daysRemaining !== 1 ? 's' : ''} remaining
                </span>
            `;
        } else {
            banner.classList.add('hidden');
        }
    }

    if (btnRefazer) {
        if (status.isActive) {
            btnRefazer.classList.add('btn-locked');
            // Check if it's a link (on my-plan.html) or button
            if (btnRefazer.tagName === 'A') {
                btnRefazer.innerHTML = `
                    <span class="lock-icon">🔒</span>
                    Plan Locked (${status.daysRemaining} days)
                `;
            } else {
                btnRefazer.innerHTML = `
                    <span class="lock-icon">🔒</span>
                    Plan Locked (${status.daysRemaining} days)
                `;
            }
        } else {
            btnRefazer.classList.remove('btn-locked');
            btnRefazer.textContent = 'Start Over';
        }
    }
}

/**
 * Switch between login and register tabs
 */
function switchAuthTab(tab) {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const tabs = document.querySelectorAll('.auth-tab');

    if (!loginForm || !registerForm) {
        console.error('Auth forms not found');
        return;
    }

    tabs.forEach(t => t.classList.remove('active'));

    if (tab === 'login') {
        loginForm.classList.remove('hidden');
        loginForm.style.display = 'block';
        registerForm.classList.add('hidden');
        registerForm.style.display = 'none';
        if (tabs[0]) tabs[0].classList.add('active');
    } else {
        loginForm.classList.add('hidden');
        loginForm.style.display = 'none';
        registerForm.classList.remove('hidden');
        registerForm.style.display = 'block';
        if (tabs[1]) tabs[1].classList.add('active');
    }

    // Clear errors
    const loginError = document.getElementById('loginError');
    const registerError = document.getElementById('registerError');
    if (loginError) loginError.classList.remove('show');
    if (registerError) registerError.classList.remove('show');
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

// Login form handler (only if form exists)
const loginFormEl = document.getElementById('loginForm');
if (loginFormEl) {
    loginFormEl.addEventListener('submit', async function(e) {
        e.preventDefault();

        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        const errorDiv = document.getElementById('loginError');

        const result = await loginUser(email, password);

        if (result.success) {
            closeModal('loginModal');
            updateNavAuth();
            updatePremiumUI();
            updatePlanStatusUI();
            this.reset();

            // Check for pending form data
            const pendingData = getPendingFormData();
            const currentPage = (window.location.pathname.split('/').pop() || 'index').replace('.html', '');

            if (pendingData) {
                // Clear pending data
                clearPendingFormData();
                // Generate plan and redirect to my-plan
                if (typeof generateAndDisplayResults === 'function') {
                    generateAndDisplayResults(pendingData);
                }
            } else if (currentPage === 'planner') {
                // No pending data on planner - check if user has existing plan
                if (typeof loadUserPlan === 'function') {
                    const existingPlan = loadUserPlan();
                    if (existingPlan && typeof isPlanLocked === 'function' && isPlanLocked()) {
                        // User has active plan, redirect to my-plan
                        window.location.href = 'my-plan.html';
                    }
                }
            } else if (currentPage === 'my-plan') {
                // On my-plan page, load existing plan
                if (typeof loadExistingPlan === 'function') {
                    loadExistingPlan();
                }
            }
        } else {
            errorDiv.textContent = result.message;
            errorDiv.classList.add('show');
        }
    });
}

// Register form handler (only if form exists)
const registerFormEl = document.getElementById('registerForm');
if (registerFormEl) {
    registerFormEl.addEventListener('submit', async function(e) {
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
            updatePlanStatusUI();
            this.reset();

            // Check for pending form data
            const pendingData = getPendingFormData();
            console.log('Pending data after register:', pendingData);

            if (pendingData) {
                // Clear pending data
                clearPendingFormData();
                // Generate plan and redirect to my-plan (no welcome message needed)
                if (typeof generateAndDisplayResults === 'function') {
                    generateAndDisplayResults(pendingData);
                } else {
                    // Fallback: redirect anyway
                    console.warn('generateAndDisplayResults not available, redirecting directly');
                    window.location.href = 'my-plan.html';
                }
            } else {
                // No pending data - show welcome message
                alert('Account created successfully! Welcome to NutriPlan!');
            }
        } else {
            errorDiv.textContent = result.message;
            errorDiv.classList.add('show');
        }
    });
}

// ============================================
// INITIALIZATION
// ============================================

// Initialize auth UI on page load
document.addEventListener('DOMContentLoaded', function() {
    updateNavAuth();
    updatePremiumUI();
    updatePlanStatusUI();

    // Handle payment success callback
    handlePaymentSuccess();

    // Listen for Firebase auth state changes
    if (typeof firebaseAuth !== 'undefined' && firebaseAuth) {
        firebaseAuth.onAuthStateChanged(async function(user) {
            if (user) {
                // Sync from Firestore on login
                const firestoreUser = await syncUserFromFirestore(user.uid);
                if (firestoreUser) {
                    saveCurrentUser(firestoreUser);
                }

                // Migrate old plans if needed, then sync
                await migratePlanToFirestoreIfNeeded(user.uid);
                await syncPlanFromFirestore(user.uid);
            }

            updateNavAuth();
            updatePremiumUI();
            updatePlanStatusUI();

            // Handle page-specific auth state changes
            const currentPage = (window.location.pathname.split('/').pop() || 'index').replace('.html', '');

            if (currentPage === 'my-plan') {
                if (user) {
                    // User is logged in - initialize my-plan page
                    if (typeof initMyPlanPage === 'function') {
                        initMyPlanPage();
                    }
                } else {
                    // User logged out - show no plan message
                    const noPlanMessage = document.getElementById('noPlanMessage');
                    const planContent = document.getElementById('planContent');
                    if (noPlanMessage) noPlanMessage.classList.remove('hidden');
                    if (planContent) planContent.classList.add('hidden');
                }
            } else if (currentPage === 'planner') {
                // On planner page, only check if user has active plan
                // NOTE: Do NOT process pending data here - that's handled by the login/register form handlers
                // Processing here causes a race condition where both handlers try to generate the plan
                if (user) {
                    if (typeof isPlanLocked === 'function' && isPlanLocked()) {
                        // User has active plan, redirect to my-plan
                        window.location.href = 'my-plan.html';
                    }
                }
            }
        });
    }
});
