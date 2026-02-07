// ============================================
// SECURITY-UTILS.JS - Security Functions for FluxFit
// Password hashing, HTML sanitization, and form validation
// ============================================

// ============================================
// PASSWORD HASHING (PBKDF2 via Web Crypto API)
// ============================================

/**
 * Generates a random salt for password hashing
 * @returns {string} - Base64 encoded salt
 */
function generateSalt() {
    const salt = new Uint8Array(16);
    crypto.getRandomValues(salt);
    return btoa(String.fromCharCode(...salt));
}

/**
 * Hashes a password using PBKDF2 with the given salt
 * @param {string} password - Plain text password
 * @param {string} salt - Base64 encoded salt
 * @returns {Promise<string>} - Base64 encoded hash
 */
async function hashPassword(password, salt) {
    const encoder = new TextEncoder();
    const passwordBuffer = encoder.encode(password);
    const saltBuffer = Uint8Array.from(atob(salt), c => c.charCodeAt(0));

    // Import password as key material
    const keyMaterial = await crypto.subtle.importKey(
        'raw',
        passwordBuffer,
        'PBKDF2',
        false,
        ['deriveBits']
    );

    // Derive bits using PBKDF2
    const derivedBits = await crypto.subtle.deriveBits(
        {
            name: 'PBKDF2',
            salt: saltBuffer,
            iterations: 100000,
            hash: 'SHA-256'
        },
        keyMaterial,
        256
    );

    // Convert to base64
    const hashArray = new Uint8Array(derivedBits);
    return btoa(String.fromCharCode(...hashArray));
}

/**
 * Verifies a password against a stored hash and salt
 * @param {string} password - Plain text password to verify
 * @param {string} storedHash - Base64 encoded stored hash
 * @param {string} salt - Base64 encoded salt
 * @returns {Promise<boolean>} - True if password matches
 */
async function verifyPassword(password, storedHash, salt) {
    try {
        const computedHash = await hashPassword(password, salt);
        return computedHash === storedHash;
    } catch (error) {
        console.error('Password verification error:', error);
        return false;
    }
}

// ============================================
// HTML SANITIZATION (XSS Prevention)
// ============================================

/**
 * Escapes HTML special characters to prevent XSS attacks
 * @param {string} str - String to escape
 * @returns {string} - Escaped string safe for HTML insertion
 */
function escapeHtml(str) {
    if (str === null || str === undefined) {
        return '';
    }

    // Convert to string if not already
    const string = String(str);

    const htmlEscapeMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '/': '&#x2F;',
        '`': '&#x60;',
        '=': '&#x3D;'
    };

    return string.replace(/[&<>"'`=/]/g, char => htmlEscapeMap[char]);
}

/**
 * Sanitizes a string for use in HTML attributes (onclick, href, etc.)
 * @param {string} str - String to sanitize
 * @returns {string} - Sanitized string safe for attribute insertion
 */
function sanitizeAttribute(str) {
    if (str === null || str === undefined) {
        return '';
    }

    const string = String(str);

    // Remove any javascript: or data: URLs
    if (/^(javascript|data|vbscript):/i.test(string.trim())) {
        return '';
    }

    return escapeHtml(string);
}

// ============================================
// FORM DATA VALIDATION
// ============================================

/**
 * Validates and sanitizes form data
 * @param {Object} data - Raw form data
 * @returns {Object} - Validated and sanitized data
 * @throws {Error} - If validation fails
 */
function validateFormData(data) {
    const errors = [];
    const validated = {};

    // Name: required, string, max 100 chars
    if (!data.name || typeof data.name !== 'string') {
        errors.push('Name is required');
    } else {
        const trimmedName = data.name.trim().substring(0, 100);
        if (trimmedName.length < 1) {
            errors.push('Name is required');
        } else {
            validated.name = trimmedName;
        }
    }

    // Age: required, number, 13-120
    const age = parseInt(data.age, 10);
    if (isNaN(age) || age < 13 || age > 120) {
        errors.push('Age must be between 13 and 120');
    } else {
        validated.age = age;
    }

    // Sex: required, must be one of valid options
    const validSex = ['masculino', 'feminino'];
    if (!data.sex || !validSex.includes(data.sex)) {
        errors.push('Invalid sex selection');
    } else {
        validated.sex = data.sex;
    }

    // Height: required, number, 36-96 inches (reasonable range)
    const height = parseInt(data.height, 10);
    if (isNaN(height) || height < 36 || height > 96) {
        errors.push('Height must be between 36 and 96 inches');
    } else {
        validated.height = height;
    }

    // Weight: required, number, 50-700 lbs
    const weight = parseFloat(data.weight);
    if (isNaN(weight) || weight < 50 || weight > 700) {
        errors.push('Weight must be between 50 and 700 lbs');
    } else {
        validated.weight = weight;
    }

    // Goal weight: optional, number, 50-700 lbs
    if (data.goalWeight !== undefined && data.goalWeight !== null && data.goalWeight !== '') {
        const goalWeight = parseFloat(data.goalWeight);
        if (isNaN(goalWeight) || goalWeight < 50 || goalWeight > 700) {
            errors.push('Goal weight must be between 50 and 700 lbs');
        } else {
            validated.goalWeight = goalWeight;
        }
    }

    // Activity level: required, must be valid option
    const validActivity = ['sedentario', 'leve', 'moderado', 'ativo'];
    if (!data.activityLevel || !validActivity.includes(data.activityLevel)) {
        errors.push('Invalid activity level');
    } else {
        validated.activityLevel = data.activityLevel;
    }

    // Gym frequency: required, must be valid option
    const validFrequency = ['0', '1-2', '3-4', '5-6', '7'];
    if (!data.gymFrequency || !validFrequency.includes(data.gymFrequency)) {
        errors.push('Invalid gym frequency');
    } else {
        validated.gymFrequency = data.gymFrequency;
    }

    // Meals per day: required, number, 1-8
    const mealsPerDay = parseInt(data.mealsPerDay, 10);
    if (isNaN(mealsPerDay) || mealsPerDay < 1 || mealsPerDay > 8) {
        errors.push('Meals per day must be between 1 and 8');
    } else {
        validated.mealsPerDay = mealsPerDay;
    }

    // Workout time: optional, string
    if (data.workoutTime) {
        validated.workoutTime = String(data.workoutTime).substring(0, 20);
    }

    // Goal: required, must be valid option
    const validGoals = ['emagrecer', 'manter', 'ganharMassa'];
    if (!data.goal || !validGoals.includes(data.goal)) {
        errors.push('Invalid goal selection');
    } else {
        validated.goal = data.goal;
    }

    // Experience: required, must be valid option
    const validExperience = ['iniciante', 'intermediario', 'avancado'];
    if (!data.experience || !validExperience.includes(data.experience)) {
        errors.push('Invalid experience level');
    } else {
        validated.experience = data.experience;
    }

    // Restrictions: optional, array of strings
    if (data.restrictions && Array.isArray(data.restrictions)) {
        validated.restrictions = data.restrictions
            .filter(r => typeof r === 'string')
            .map(r => r.substring(0, 50));
    } else {
        validated.restrictions = [];
    }

    // Plan duration: required, must be valid option
    const validDurations = [30, 60, 90];
    const planDuration = parseInt(data.planDuration, 10) || 30;
    if (!validDurations.includes(planDuration)) {
        validated.planDuration = 30; // Default to 30 days
    } else {
        validated.planDuration = planDuration;
    }

    // If there are errors, throw with all error messages
    if (errors.length > 0) {
        throw new Error('Validation failed: ' + errors.join(', '));
    }

    return validated;
}

/**
 * Validates email format
 * @param {string} email - Email to validate
 * @returns {boolean} - True if valid email format
 */
function isValidEmail(email) {
    if (!email || typeof email !== 'string') {
        return false;
    }
    // Basic email regex - allows most valid emails
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim()) && email.length <= 254;
}

/**
 * Validates password strength
 * @param {string} password - Password to validate
 * @returns {Object} - { valid: boolean, message: string }
 */
function validatePasswordStrength(password) {
    if (!password || typeof password !== 'string') {
        return { valid: false, message: 'Password is required' };
    }

    if (password.length < 8) {
        return { valid: false, message: 'Password must be at least 8 characters' };
    }

    if (password.length > 128) {
        return { valid: false, message: 'Password is too long' };
    }

    // Check for at least one letter and one number
    if (!/[a-zA-Z]/.test(password)) {
        return { valid: false, message: 'Password must contain at least one letter' };
    }

    if (!/[0-9]/.test(password)) {
        return { valid: false, message: 'Password must contain at least one number' };
    }

    return { valid: true, message: 'Password is strong enough' };
}

console.log('Security utilities loaded successfully!');
