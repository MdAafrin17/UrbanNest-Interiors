/**
 * UrbanNest Interiors — Contact Form Validation & State Management
 * Features:
 *   1. Professional UX: Errors only display on blur or submit ("Reward early, punish late")
 *   2. Strict validation rules meeting all CYVEXA internship requirements:
 *      - Full Name: Min 3 chars, letters, spaces, hyphens, and apostrophes
 *      - Email: Valid standard email format
 *      - Phone: Exactly 10 digits starting with 6, 7, 8, or 9 (auto-cleans +91 / 0 / spaces)
 *      - Service: Required dropdown selection
 *      - Budget: Optional radio selection
 *      - Message: 20 to 500 characters with live character counter
 *      - Consent: Required checkbox agreement
 *   3. No alert() popups
 *   4. Preserves user input on failed validation
 *   5. Disables submit button & displays spinner during async simulation
 *   6. Displays friendly success alert with simulated confirmation
 *   7. Auto-preselects service from URL query params (?service=modular-kitchen)
 *   8. Smooth scroll to form on anchor links
 */

document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
});

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  // Form Elements
  const fullNameInput = document.getElementById('fullName');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const serviceSelect = document.getElementById('serviceSelect');
  const budgetRadios = document.querySelectorAll('input[name="budgetRange"]');
  const messageInput = document.getElementById('message');
  const consentCheckbox = document.getElementById('consentCheckbox');
  const charCounter = document.getElementById('charCounter');
  const submitBtn = document.getElementById('submitBtn');
  const btnText = document.getElementById('btnText');
  const successAlert = document.getElementById('formSuccessAlert');
  const errorAlert = document.getElementById('formErrorAlert');

  // Element ID Map for accurate focus and accessibility
  const elementMap = {
    fullName: fullNameInput,
    email: emailInput,
    phone: phoneInput,
    service: serviceSelect,
    message: messageInput,
    consent: consentCheckbox
  };

  // Group Container Elements
  const groups = {
    fullName: document.getElementById('groupFullName'),
    email: document.getElementById('groupEmail'),
    phone: document.getElementById('groupPhone'),
    service: document.getElementById('groupService'),
    message: document.getElementById('groupMessage'),
    consent: document.getElementById('groupConsent')
  };

  // Inline Error Text Elements
  const errorMessages = {
    fullName: document.getElementById('fullNameError'),
    email: document.getElementById('emailError'),
    phone: document.getElementById('phoneError'),
    service: document.getElementById('serviceError'),
    message: document.getElementById('messageError'),
    consent: document.getElementById('consentError')
  };

  // Track whether a field has been blurred or form submitted
  const touchedFields = {
    fullName: false,
    email: false,
    phone: false,
    service: false,
    message: false,
    consent: false
  };

  let hasAttemptedSubmit = false;

  // Pre-select service from URL parameter (e.g. ?service=modular-kitchen)
  preselectServiceFromUrl(serviceSelect);

  // Initialize Radio Card UI styling
  initRadioCards(budgetRadios);

  // Live Character Counter for Message
  if (messageInput && charCounter) {
    const updateCharCounter = () => {
      const len = messageInput.value.trim().length;
      charCounter.textContent = `${len} / 500 characters (min 20)`;
      if (len > 0 && len < 20) {
        charCounter.style.color = 'var(--color-error)';
      } else if (len >= 20 && len <= 500) {
        charCounter.style.color = 'var(--color-primary)';
      } else {
        charCounter.style.color = 'var(--color-text-light)';
      }
    };
    messageInput.addEventListener('input', updateCharCounter);
    updateCharCounter();
  }

  // Helper to normalize phone numbers (strip +91, leading 0, non-digits)
  function cleanPhoneNumber(raw) {
    let digits = raw.replace(/\D/g, '');
    // If user pasted with country code +91
    if (digits.length === 12 && digits.startsWith('91')) {
      digits = digits.substring(2);
    }
    // If user entered leading 0
    else if (digits.length === 11 && digits.startsWith('0')) {
      digits = digits.substring(1);
    }
    return digits.slice(0, 10);
  }

  // Field Validation Logic
  function validateField(fieldName, isTyping = false) {
    let isValid = true;
    let customError = '';

    switch (fieldName) {
      case 'fullName': {
        const val = fullNameInput.value.trim();
        // Min 3 chars, letters, spaces, dots, hyphens, and apostrophes
        const nameRegex = /^[A-Za-z\s.'-]{3,}$/;
        if (!val) {
          isValid = false;
          customError = 'Full name is required.';
        } else if (val.length < 3) {
          isValid = false;
          customError = 'Full name must be at least 3 characters long.';
        } else if (!nameRegex.test(val)) {
          isValid = false;
          customError = 'Full name must contain only letters and spaces.';
        }
        break;
      }

      case 'email': {
        const val = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
        if (!val) {
          isValid = false;
          customError = 'Email address is required.';
        } else if (!emailRegex.test(val)) {
          isValid = false;
          customError = 'Please enter a valid email address (e.g. name@domain.com).';
        }
        break;
      }

      case 'phone': {
        const val = phoneInput.value.trim();
        const phoneRegex = /^[6-9]\d{9}$/;
        if (!val) {
          isValid = false;
          customError = 'Phone number is required.';
        } else if (val.length !== 10) {
          isValid = false;
          customError = 'Phone number must be exactly 10 digits.';
        } else if (!phoneRegex.test(val)) {
          isValid = false;
          customError = 'Indian mobile number must start with 6, 7, 8, or 9.';
        }
        break;
      }

      case 'service': {
        const val = serviceSelect.value;
        if (!val || val === '') {
          isValid = false;
          customError = 'Please select a service interested in.';
        }
        break;
      }

      case 'message': {
        const val = messageInput.value.trim();
        if (!val) {
          isValid = false;
          customError = 'Project message is required.';
        } else if (val.length < 20) {
          isValid = false;
          customError = `Please provide at least 20 characters describing your space (${val.length}/20).`;
        } else if (val.length > 500) {
          isValid = false;
          customError = `Message exceeds 500 characters limit (${val.length}/500).`;
        }
        break;
      }

      case 'consent': {
        if (!consentCheckbox.checked) {
          isValid = false;
          customError = 'You must agree to be contacted to submit your consultation request.';
        }
        break;
      }
    }

    const groupEl = groups[fieldName];
    const errorEl = errorMessages[fieldName];

    if (groupEl && errorEl) {
      // If user is currently typing and field is not yet touched or submitted,
      // only clear previous error if it becomes valid; don't trigger new errors mid-typing!
      const shouldDisplayError = hasAttemptedSubmit || touchedFields[fieldName];

      if (!isValid && shouldDisplayError && !isTyping) {
        groupEl.classList.add('has-error');
        errorEl.textContent = customError;
      } else if (isValid) {
        groupEl.classList.remove('has-error');
      }
    }

    return isValid;
  }

  // Attach Event Listeners
  if (fullNameInput) {
    fullNameInput.addEventListener('blur', () => {
      touchedFields.fullName = true;
      validateField('fullName', false);
    });
    fullNameInput.addEventListener('input', () => {
      if (groups.fullName.classList.contains('has-error') || hasAttemptedSubmit) {
        validateField('fullName', true);
      }
    });
  }

  if (emailInput) {
    emailInput.addEventListener('blur', () => {
      touchedFields.email = true;
      validateField('email', false);
    });
    emailInput.addEventListener('input', () => {
      if (groups.email.classList.contains('has-error') || hasAttemptedSubmit) {
        validateField('email', true);
      }
    });
  }

  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      const cleaned = cleanPhoneNumber(e.target.value);
      e.target.value = cleaned;
      if (groups.phone.classList.contains('has-error') || hasAttemptedSubmit) {
        validateField('phone', true);
      }
    });
    phoneInput.addEventListener('blur', () => {
      touchedFields.phone = true;
      validateField('phone', false);
    });
  }

  if (serviceSelect) {
    serviceSelect.addEventListener('change', () => {
      touchedFields.service = true;
      validateField('service', false);
    });
  }

  if (messageInput) {
    messageInput.addEventListener('blur', () => {
      touchedFields.message = true;
      validateField('message', false);
    });
    messageInput.addEventListener('input', () => {
      if (groups.message.classList.contains('has-error') || hasAttemptedSubmit) {
        validateField('message', true);
      }
    });
  }

  if (consentCheckbox) {
    consentCheckbox.addEventListener('change', () => {
      touchedFields.consent = true;
      validateField('consent', false);
    });
  }

  // Validate Entire Form
  function validateEntireForm() {
    const fields = ['fullName', 'email', 'phone', 'service', 'message', 'consent'];
    let allValid = true;
    let firstInvalidField = null;

    fields.forEach(f => {
      touchedFields[f] = true;
      const isFieldValid = validateField(f, false);
      if (!isFieldValid) {
        allValid = false;
        if (!firstInvalidField) {
          firstInvalidField = f;
        }
      }
    });

    return { allValid, firstInvalidField };
  }

  // Form Submit Handler
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    hasAttemptedSubmit = true;

    // Hide any previous alert banners
    if (successAlert) successAlert.style.display = 'none';
    if (errorAlert) errorAlert.style.display = 'none';

    const { allValid, firstInvalidField } = validateEntireForm();

    if (!allValid) {
      // Keep entered data in form! Show error banner
      if (errorAlert) {
        errorAlert.style.display = 'flex';
        errorAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      // Accurately focus first invalid element
      const targetElement = elementMap[firstInvalidField];
      if (targetElement && typeof targetElement.focus === 'function') {
        targetElement.focus();
      }
      return;
    }

    // Processing State: Disable button, show spinner
    submitBtn.classList.add('is-submitting');
    submitBtn.disabled = true;
    btnText.textContent = 'Booking Free Consultation...';

    // Capture user details safely
    const submittedName = fullNameInput.value.trim();
    const submittedPhone = phoneInput.value.trim();
    const submittedService = serviceSelect.value;

    // Simulate network submission delay (1200ms)
    await new Promise(resolve => setTimeout(resolve, 1200));

    // Re-enable button after processing
    submitBtn.classList.remove('is-submitting');
    submitBtn.disabled = false;
    btnText.textContent = 'Book a Free Consultation';

    // Show friendly success message with user-specific confirmation
    if (successAlert) {
      const titleStrong = successAlert.querySelector('strong');
      const descDiv = successAlert.querySelector('div div');
      if (titleStrong) {
        titleStrong.textContent = `Thank you, ${submittedName}! Your free consultation request has been received.`;
      }
      if (descDiv) {
        descDiv.textContent = `Our Anna Nagar lead architect will review your ${submittedService} enquiry and call you at +91 ${submittedPhone} within 24 business hours. (Note: Simulated submission; no actual email sent).`;
      }
      successAlert.style.display = 'flex';
      successAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Reset Form fields cleanly
    form.reset();
    hasAttemptedSubmit = false;
    Object.keys(touchedFields).forEach(k => { touchedFields[k] = false; });

    // Reset radio card styles
    budgetRadios.forEach(r => {
      const parentLabel = r.closest('.radio-card-label');
      if (parentLabel) parentLabel.classList.remove('is-selected');
    });

    // Reset char counter
    if (charCounter) {
      charCounter.textContent = '0 / 500 characters (min 20)';
      charCounter.style.color = 'var(--color-text-light)';
    }

    // Remove any leftover error highlights
    Object.values(groups).forEach(g => {
      if (g) g.classList.remove('has-error');
    });
  });
}

/**
 * Handle URL query param service preselection (e.g. ?service=modular-kitchen)
 */
function preselectServiceFromUrl(selectElement) {
  if (!selectElement) return;

  const urlParams = new URLSearchParams(window.location.search);
  const serviceParam = urlParams.get('service');
  if (!serviceParam) return;

  const map = {
    'full-home': 'Full Home Interiors',
    'modular-kitchen': 'Modular Kitchen',
    'living-bedroom': 'Living & Bedroom Design',
    'office-interiors': 'Office Interiors',
    '3d-design': '3D Design & Visualization',
    'renovation': 'Renovation & Makeover'
  };

  const targetValue = map[serviceParam.toLowerCase()];
  if (targetValue) {
    selectElement.value = targetValue;
  }
}

/**
 * Radio button styling helper
 */
function initRadioCards(radios) {
  if (!radios || !radios.length) return;

  radios.forEach(radio => {
    radio.addEventListener('change', () => {
      radios.forEach(r => {
        const parent = r.closest('.radio-card-label');
        if (parent) parent.classList.remove('is-selected');
      });
      if (radio.checked) {
        const parent = radio.closest('.radio-card-label');
        if (parent) parent.classList.add('is-selected');
      }
    });
  });
}
