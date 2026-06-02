/**
 * AUTHENTICATION SYSTEM UI - CORE SCRIPT
 * Handles component injection, form validations, interactive checks, and AJAX simulations.
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. INJECT SHARED COMPONENTS
    injectNavbar();
    injectFooter();

    // 2. INITIALIZE SERVICES BASED ON THE ACTIVE PAGE
    initActivePageFeatures();
});

/* ==========================================================================
   COMPONENT INJECTION SYSTEM
   ========================================================================== */

/**
 * Dynamically injects the sticky responsive Navbar into '#navbar-placeholder'.
 */
function injectNavbar() {
    const navbarPlaceholder = document.getElementById("navbar-placeholder");
    if (!navbarPlaceholder) return;

    // Detect the current page filename to set the active state
    const path = window.location.pathname;
    const pageName = path.split("/").pop() || "index.html";

    navbarPlaceholder.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark custom-navbar sticky-top">
            <div class="container">
                <a class="navbar-brand" href="index.html">
                    <i class="bi bi-shield-lock-fill text-indigo-400"></i> SecureAuth
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto align-items-center">
                        <li class="nav-item">
                            <a class="nav-link ${pageName === "index.html" ? "active" : ""}" href="index.html">
                                <i class="bi bi-house-door me-1"></i>Home
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${pageName === "login.html" ? "active" : ""}" href="login.html">
                                <i class="bi bi-box-arrow-in-right me-1"></i>Login
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${pageName === "register.html" ? "active" : ""}" href="register.html">
                                <i class="bi bi-person-plus me-1"></i>Register
                            </a>
                        </li>
                        <li class="nav-item ms-lg-2">
                            <a class="nav-link" href="#contact-footer">
                                <i class="bi bi-envelope me-1"></i>Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;
}

/**
 * Dynamically injects the Footer into '#footer-placeholder'.
 */
function injectFooter() {
    const footerPlaceholder = document.getElementById("footer-placeholder");
    if (!footerPlaceholder) return;

    footerPlaceholder.innerHTML = `
        <footer class="custom-footer py-5" id="contact-footer">
            <div class="container">
                <div class="row g-4 justify-content-between">
                    <!-- About Section -->
                    <div class="col-lg-4 col-md-6">
                        <h5 class="text-white mb-3 fw-bold">
                            <i class="bi bi-shield-lock-fill text-primary"></i> SecureAuth
                        </h5>
                        <p class="text-secondary-50">
                            A state-of-the-art authentication system template showcasing clean code, modern glassmorphic aesthetics, and robust real-time client-side validation logic. Built for seamless web security assignments.
                        </p>
                    </div>
                    
                    <!-- Quick Links -->
                    <div class="col-lg-3 col-md-6">
                        <h5 class="text-white mb-3 fw-bold">Quick Links</h5>
                        <ul class="list-unstyled">
                            <li class="mb-2"><a href="index.html"><i class="bi bi-chevron-right me-1"></i> Home Overview</a></li>
                            <li class="mb-2"><a href="login.html"><i class="bi bi-chevron-right me-1"></i> User Login</a></li>
                            <li class="mb-2"><a href="register.html"><i class="bi bi-chevron-right me-1"></i> New Registration</a></li>
                            <li class="mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#termsModal"><i class="bi bi-chevron-right me-1"></i> Terms & Conditions</a></li>
                        </ul>
                    </div>

                    <!-- Contact & Socials -->
                    <div class="col-lg-4 col-md-12">
                        <h5 class="text-white mb-3 fw-bold">Connect With Us</h5>
                        <p class="mb-2"><i class="bi bi-geo-alt-fill text-primary me-2"></i> Bangalore, Karnataka, India</p>
                        <p class="mb-3"><i class="bi bi-envelope-fill text-primary me-2"></i> shashi@example.com</p>
                        <div class="social-icons d-flex gap-2">
                            <a href="https://github.com" target="_blank" aria-label="GitHub"><i class="bi bi-github"></i></a>
                            <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
                            <a href="https://twitter.com" target="_blank" aria-label="Twitter"><i class="bi bi-twitter-x"></i></a>
                            <a href="https://dribbble.com" target="_blank" aria-label="Dribbble"><i class="bi bi-dribbble"></i></a>
                        </div>
                    </div>
                </div>
                
                <hr class="border-secondary opacity-15 my-4">
                
                <div class="row align-items-center justify-content-between">
                    <div class="col-md-6 text-center text-md-start">
                        <p class="mb-0 text-muted">&copy; 2026 SecureAuth. All rights reserved. Created for Internship Assignment.</p>
                    </div>
                    <div class="col-md-6 text-center text-md-end mt-2 mt-md-0">
                        <a href="#" class="text-muted me-3">Privacy Policy</a>
                        <a href="#" class="text-muted">Security Guidelines</a>
                    </div>
                </div>
            </div>
        </footer>
    `;
}

/* ==========================================================================
   PAGE INITIALIZER & ROUTING CONTROL
   ========================================================================== */
function initActivePageFeatures() {
    // Detect active form types
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    // Initialize password show/hide functionality
    initPasswordToggle();

    if (loginForm) {
        initLoginPage(loginForm);
    }
    if (registerForm) {
        initRegisterPage(registerForm);
    }
}

/* ==========================================================================
   FEATURE: SHOW/HIDE PASSWORD TOGGLE
   ========================================================================== */
function initPasswordToggle() {
    const toggles = document.querySelectorAll(".password-toggle-btn");
    toggles.forEach(toggle => {
        toggle.addEventListener("click", function(e) {
            e.preventDefault();
            // Find the associated password input in the same group/container
            const targetId = this.getAttribute("data-target");
            const passwordInput = document.getElementById(targetId);
            const icon = this.querySelector("i");
            
            if (passwordInput && icon) {
                if (passwordInput.type === "password") {
                    passwordInput.type = "text";
                    icon.classList.remove("bi-eye-slash-fill");
                    icon.classList.add("bi-eye-fill");
                } else {
                    passwordInput.type = "password";
                    icon.classList.remove("bi-eye-fill");
                    icon.classList.add("bi-eye-slash-fill");
                }
            }
        });
    });
}

/* ==========================================================================
   LOGIN PAGE CONTROLLER & VALIDATIONS
   ========================================================================== */
function initLoginPage(form) {
    const identifierInput = document.getElementById("loginIdentifier");
    const passwordInput = document.getElementById("loginPassword");
    const alertContainer = document.getElementById("login-alert-container");

    // Clear feedback when fields are modified
    [identifierInput, passwordInput].forEach(input => {
        input.addEventListener("input", () => {
            input.classList.remove("is-invalid", "is-valid");
        });
    });

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        
        let isValid = true;
        
        // Validate Username or Email Field
        if (!identifierInput.value.trim()) {
            showInputError(identifierInput, "Please enter your Email or Username.");
            isValid = false;
        } else {
            showInputSuccess(identifierInput);
        }

        // Validate Password Field
        if (!passwordInput.value.trim()) {
            showInputError(passwordInput, "Please enter your password.");
            isValid = false;
        } else {
            showInputSuccess(passwordInput);
        }

        if (!isValid) {
            // Apply a card shake animation to show friction
            const card = form.closest(".glass-card");
            if (card) {
                card.classList.add("shake-animation");
                setTimeout(() => card.classList.remove("shake-animation"), 400);
            }
            displayAlert(alertContainer, "danger", "Please fill in all required fields properly.");
            return;
        }

        // Simulate AJAX request
        const submitBtn = form.querySelector('button[type="submit"]');
        const origText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Logging in...`;

        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = origText;
            
            // Simulation logic
            const value = identifierInput.value.trim().toLowerCase();
            if (value === "admin" || value === "test" || value === "shashi@example.com" || value === "user123") {
                displayAlert(alertContainer, "success", `Welcome back! Login Successful. Redirecting...`);
                setTimeout(() => {
                    window.location.href = "index.html";
                }, 1500);
            } else {
                displayAlert(alertContainer, "danger", "Invalid username/email or password credentials.");
                showInputError(identifierInput, "");
                showInputError(passwordInput, "");
            }
        }, 1200);
    });
}

/* ==========================================================================
   REGISTRATION PAGE CONTROLLER, VALIDATIONS & AJAX CHECKS
   ========================================================================== */
function initRegisterPage(form) {
    const fullNameInput = document.getElementById("regFullName");
    const usernameInput = document.getElementById("regUsername");
    const emailInput = document.getElementById("regEmail");
    const mobileInput = document.getElementById("regMobile");
    const passwordInput = document.getElementById("regPassword");
    const confirmInput = document.getElementById("regConfirmPassword");
    const termsCheckbox = document.getElementById("regTerms");
    const alertContainer = document.getElementById("register-alert-container");

    // Username checking state
    let isUsernameAvailable = false;
    let usernameChecking = false;

    // 1. REAL-TIME VALIDATION EVENT BINDINGS
    fullNameInput.addEventListener("input", () => validateFullName(fullNameInput));
    emailInput.addEventListener("input", () => validateEmail(emailInput));
    mobileInput.addEventListener("input", () => validateMobile(mobileInput));
    passwordInput.addEventListener("input", () => {
        validatePasswordStrength(passwordInput);
        if (confirmInput.value) {
            validatePasswordMatch(passwordInput, confirmInput);
        }
    });
    confirmInput.addEventListener("input", () => validatePasswordMatch(passwordInput, confirmInput));

    // 2. DEBOUNCED AJAX USERNAME AVAILABILITY CHECKER
    let usernameTimeout = null;
    usernameInput.addEventListener("input", () => {
        clearTimeout(usernameTimeout);
        
        const username = usernameInput.value.trim();
        const spinner = document.getElementById("username-spinner");
        const feedback = document.getElementById("username-ajax-feedback");
        
        // Reset classes/states initially
        usernameInput.classList.remove("is-valid", "is-invalid");
        feedback.innerHTML = "";
        isUsernameAvailable = false;

        if (username.length < 4) {
            if (username.length > 0) {
                feedback.className = "username-feedback-text text-danger";
                feedback.innerHTML = `<i class="bi bi-exclamation-triangle-fill"></i> Username must be at least 4 characters.`;
            }
            return;
        }

        // Standard alphanumeric validation check
        const usernameRegex = /^[a-zA-Z0-9_]+$/;
        if (!usernameRegex.test(username)) {
            feedback.className = "username-feedback-text text-danger";
            feedback.innerHTML = `<i class="bi bi-exclamation-triangle-fill"></i> Alphanumeric and underscores only.`;
            return;
        }

        // Show spinner loader
        spinner.style.display = "block";
        usernameChecking = true;

        usernameTimeout = setTimeout(() => {
            // Simulate Server database query latency
            spinner.style.display = "none";
            usernameChecking = false;
            
            const existingUsers = ["admin", "test", "user123", "shashi"];
            const isTaken = existingUsers.includes(username.toLowerCase());
            
            if (isTaken) {
                isUsernameAvailable = false;
                usernameInput.classList.add("is-invalid");
                feedback.className = "username-feedback-text text-danger animate__animated animate__fadeIn";
                feedback.innerHTML = `<i class="bi bi-x-circle-fill"></i> Username Already Taken`;
            } else {
                isUsernameAvailable = true;
                usernameInput.classList.add("is-valid");
                feedback.className = "username-feedback-text text-success animate__animated animate__fadeIn";
                feedback.innerHTML = `<i class="bi bi-check-circle-fill"></i> Username Available`;
            }
        }, 800);
    });

    // 3. SUBMIT EVENT HANDLER
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        // Perform final check of all standard validators
        const isNameOk = validateFullName(fullNameInput);
        const isEmailOk = validateEmail(emailInput);
        const isMobileOk = validateMobile(mobileInput);
        const isPassOk = validatePasswordStrength(passwordInput);
        const isMatchOk = validatePasswordMatch(passwordInput, confirmInput);

        let isTermsOk = true;
        if (!termsCheckbox.checked) {
            termsCheckbox.classList.add("is-invalid");
            isTermsOk = false;
        } else {
            termsCheckbox.classList.remove("is-invalid");
        }

        // Handle error checking
        if (usernameChecking) {
            displayAlert(alertContainer, "warning", "Please wait while username check completes.");
            return;
        }

        if (!usernameInput.value.trim()) {
            showInputError(usernameInput, "Username is required.");
        }

        const isFormValid = isNameOk && isUsernameAvailable && isEmailOk && isMobileOk && isPassOk && isMatchOk && isTermsOk;

        if (!isFormValid) {
            // Apply card shake animation to highlight error state
            const card = form.closest(".glass-card");
            if (card) {
                card.classList.add("shake-animation");
                setTimeout(() => card.classList.remove("shake-animation"), 400);
            }

            let errorMsg = "Please resolve form errors before registering.";
            if (!isTermsOk) {
                errorMsg = "You must agree to the Terms & Conditions to register.";
            } else if (!isUsernameAvailable && usernameInput.value.trim()) {
                errorMsg = "Selected username is taken or invalid.";
            }
            displayAlert(alertContainer, "danger", errorMsg);
            return;
        }

        // Simulate AJAX Form Submission
        const submitBtn = form.querySelector('button[type="submit"]');
        const origText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Creating Account...`;

        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = origText;
            
            // Show Success Notification
            displayAlert(alertContainer, "success", `Registration Successful! Account created for ${usernameInput.value}. Redirecting to login...`);
            form.reset();
            
            // Reset validation markings
            [fullNameInput, usernameInput, emailInput, mobileInput, passwordInput, confirmInput].forEach(el => {
                el.classList.remove("is-valid", "is-invalid");
            });
            document.getElementById("username-ajax-feedback").innerHTML = "";
            document.getElementById("pass-strength-text").innerHTML = "";
            document.getElementById("pass-strength-fill").style.width = "0%";
            document.getElementById("confirm-password-feedback").innerHTML = "";
            
            // Reset checklist checkmarks
            document.querySelectorAll("#password-checklist li").forEach(li => {
                li.className = "invalid";
                li.querySelector("i").className = "bi bi-x-circle-fill me-2";
            });

            setTimeout(() => {
                window.location.href = "login.html";
            }, 2000);
        }, 1500);
    });
}

/* ==========================================================================
   VALIDATOR LIBRARY UTILITIES
   ========================================================================== */

/**
 * Full Name Validation: Required, letters/spaces only, min length 3.
 */
function validateFullName(input) {
    const val = input.value.trim();
    const feedback = document.getElementById("fullname-feedback");
    
    if (!val) {
        showInputError(input, "Full Name is required.");
        feedback.textContent = "Please enter your full name.";
        return false;
    }
    
    const nameRegex = /^[a-zA-Z\s]{3,50}$/;
    if (!nameRegex.test(val)) {
        showInputError(input, "Full Name must contain letters and spaces only (min 3 characters).");
        feedback.textContent = "Valid names contain only alphabets and spaces (3-50 chars).";
        return false;
    }

    showInputSuccess(input);
    return true;
}

/**
 * Email Validation: Matches standard email format patterns.
 */
function validateEmail(input) {
    const val = input.value.trim();
    const feedback = document.getElementById("email-feedback");

    if (!val) {
        showInputError(input, "Email Address is required.");
        feedback.textContent = "Please enter a valid email address.";
        return false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,15}$/;
    if (!emailRegex.test(val)) {
        showInputError(input, "Invalid email address format (e.g. name@domain.com).");
        feedback.textContent = "Must match standard email formats like user@domain.com";
        return false;
    }

    showInputSuccess(input);
    return true;
}

/**
 * Mobile Validation: Checks for standard 10 digit telephone number string pattern.
 */
function validateMobile(input) {
    const val = input.value.trim();
    const feedback = document.getElementById("mobile-feedback");

    if (!val) {
        showInputError(input, "Mobile Number is required.");
        feedback.textContent = "Please enter your mobile number.";
        return false;
    }

    const mobileRegex = /^[6-9]\d{9}$/; // Validates typical Indian numbers (10 digits starting with 6-9)
    if (!mobileRegex.test(val)) {
        showInputError(input, "Mobile Number must be a valid 10-digit number starting with 6-9.");
        feedback.textContent = "Must be a 10-digit number starting with 6, 7, 8, or 9.";
        return false;
    }

    showInputSuccess(input);
    return true;
}

/**
 * Password Strength Checker & Real-time Visual Meter
 * Criteria: Min 8 chars, 1 uppercase, 1 lowercase, 1 digit, 1 special character.
 */
function validatePasswordStrength(input) {
    const val = input.value;
    const strengthText = document.getElementById("pass-strength-text");
    const strengthFill = document.getElementById("pass-strength-fill");

    // Checklist Elements
    const lengthItem = document.getElementById("rule-length");
    const upperItem = document.getElementById("rule-upper");
    const lowerItem = document.getElementById("rule-lower");
    const digitItem = document.getElementById("rule-digit");
    const specialItem = document.getElementById("rule-special");

    // Regular Expression Criteria
    const checks = {
        length: val.length >= 8,
        upper: /[A-Z]/.test(val),
        lower: /[a-z]/.test(val),
        digit: /[0-9]/.test(val),
        special: /[^A-Za-z0-9]/.test(val)
    };

    // Helper to toggle class state on lists
    const toggleRuleState = (item, isMatched) => {
        if (!item) return;
        const icon = item.querySelector("i");
        if (isMatched) {
            item.className = "valid";
            if (icon) icon.className = "bi bi-check-circle-fill me-2";
        } else {
            item.className = "invalid";
            if (icon) icon.className = "bi bi-x-circle-fill me-2";
        }
    };

    toggleRuleState(lengthItem, checks.length);
    toggleRuleState(upperItem, checks.upper);
    toggleRuleState(lowerItem, checks.lower);
    toggleRuleState(digitItem, checks.digit);
    toggleRuleState(specialItem, checks.special);

    // Calculate score (0 to 5)
    let score = 0;
    if (checks.length) score++;
    if (checks.upper) score++;
    if (checks.lower) score++;
    if (checks.digit) score++;
    if (checks.special) score++;

    // Adjust UI based on score
    let percentage = "0%";
    let colorClass = "";
    let statusLabel = "";

    switch(score) {
        case 0:
            percentage = "0%";
            colorClass = "bg-secondary";
            statusLabel = "";
            break;
        case 1:
            percentage = "20%";
            colorClass = "bg-danger";
            statusLabel = "Very Weak";
            break;
        case 2:
            percentage = "40%";
            colorClass = "bg-danger";
            statusLabel = "Weak";
            break;
        case 3:
            percentage = "60%";
            colorClass = "bg-warning";
            statusLabel = "Fair";
            break;
        case 4:
            percentage = "80%";
            colorClass = "bg-info";
            statusLabel = "Good";
            break;
        case 5:
            percentage = "100%";
            colorClass = "bg-success";
            statusLabel = "Strong";
            break;
    }

    strengthFill.style.width = percentage;
    strengthFill.className = `strength-meter-fill ${colorClass}`;
    
    if (statusLabel) {
        strengthText.textContent = `Strength: ${statusLabel}`;
        strengthText.className = `strength-text text-${colorClass.replace("bg-", "")}`;
    } else {
        strengthText.textContent = "";
    }

    // Return true if score matches strong criteria requirements
    if (score >= 4) {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        return true;
    } else {
        input.classList.remove("is-valid");
        if (val) {
            input.classList.add("is-invalid");
        }
        return false;
    }
}

/**
 * Confirm Password Matcher: Realtime comparison between password fields.
 */
function validatePasswordMatch(passInput, confirmInput) {
    const passVal = passInput.value;
    const confirmVal = confirmInput.value;
    const feedback = document.getElementById("confirm-password-feedback");

    if (!confirmVal) {
        confirmInput.classList.remove("is-valid", "is-invalid");
        feedback.innerHTML = "";
        return false;
    }

    if (passVal === confirmVal) {
        confirmInput.classList.remove("is-invalid");
        confirmInput.classList.add("is-valid");
        feedback.className = "text-success mt-1 fw-bold fs-7";
        feedback.innerHTML = `<i class="bi bi-check-circle-fill"></i> Passwords match`;
        return true;
    } else {
        confirmInput.classList.remove("is-valid");
        confirmInput.classList.add("is-invalid");
        feedback.className = "text-danger mt-1 fw-bold fs-7";
        feedback.innerHTML = `<i class="bi bi-x-circle-fill"></i> Passwords do not match`;
        return false;
    }
}

/* ==========================================================================
   ALERT HANDLING UTILITIES
   ========================================================================== */

function showInputError(input, message) {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
}

function showInputSuccess(input) {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
}

/**
 * Programmatically shows Bootstrap alerts inside placeholders with close buttons and auto-fade.
 */
function displayAlert(container, type, message) {
    if (!container) return;

    container.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show border-0 shadow" role="alert">
            <div class="d-flex align-items-center">
                <i class="bi ${type === "success" ? "bi-check-circle-fill" : type === "warning" ? "bi-exclamation-triangle-fill" : "bi-x-circle-fill"} me-2 fs-5"></i>
                <div>${message}</div>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;

    // Auto dismiss after 5 seconds
    setTimeout(() => {
        const activeAlert = container.querySelector(".alert");
        if (activeAlert) {
            const bsAlert = bootstrap.Alert.getInstance(activeAlert) || new bootstrap.Alert(activeAlert);
            bsAlert.close();
        }
    }, 5000);
}
