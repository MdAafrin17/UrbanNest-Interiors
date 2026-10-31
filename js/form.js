/**
 * UrbanNest Interiors — Contact Form Validation & State Management
 * Features:
 *   1. Real-time field validation with individual inline error messages
 *   2. Strict validation rules:
 *      - Full Name: Min 3 chars, letters and spaces only
 *      - Email: Valid standard email format
 *      - Phone: Exactly 10 digits, starting with 6, 7, 8, or 9
 *      - Service: Required dropdown selection
 *      - Budget: Optional radio selection
 *      - Message: 20 to 500 characters with live character counter
 *      - Consent: Required checkbox agreement
 *   3. No alert() popups
 *   4. Preserves user input on failed validation
 *   5. Disables submit button & displays spinner during async simulation
 *   6. Displays friendly success alert with simulated confirmation
 *   7. Auto-preselects service from URL query params (?service=modular-kitchen)
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

  // Groups and Error Message Elements
  const groups = {
    fullName: document.getElementById('groupFullName'),
    email: document.getElementById('groupEmail'),
    phone: document.getElementById('groupPhone'),
    service: document.getElementById('groupService'),
    message: document.getElementById('groupMessage'),
    consent: document.getElementById('groupConsent')
  };

  const errorMessages = {
    fullName: document.getElementById('fullNameError'),
    email: document.getElementById('emailError'),
    phone: document.getElementById('phoneError'),
    service: document.getElementById('serviceError'),
    message: document.getElementById('messageError'),
    consent: document.getElementById('consentError')
  };

  // Pre-select service from URL parameter (e.g. ?service=modular-kitchen)
  preselectServiceFromUrl(serviceSelect);

  // Initialize Radio Card UI styling
  initRadioCards(budgetRadios);

  // Live Character Counter for Message
  if (messageInput && charCounter) {
    const updateCharCounter = () => {
      const len = messageInput.value.trim().length;
      charCounter.textContent = `${len} / 500 characters (min 20)`;
      if (len < 20 || len > 500) {
        charCounter.style.color = 'var(--color-error)';
      } else {
        charCounter.style.color = 'var(--color-primary)';
      }
    };
    messageInput.addEventListener('input', updateCharCounter);
    updateCharCounter();
  }

  // Real-time inline validation triggers (input & blur)
  if (fullNameInput) {
    fullNameInput.addEventListener('input', () => validateField('fullName'));
    fullNameInput.addEventListener('blur', () => validateField('fullName'));
  }
  if (emailInput) {
    emailInput.addEventListener('input', () => validateField('email'));
    emailInput.addEventListener('blur', () => validateField('email'));
  }
  if (phoneInput) {
    // Only allow typing numbers
    phoneInput.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10);
      validateField('phone');
    });
    phoneInput.addEventListener('blur', () => validateField('phone'));
  }
  if (serviceSelect) {
    serviceSelect.addEventListener('change', () => validateField('service'));
  }
  if (messageInput) {
    messageInput.addEventListener('blur', () => validateField('message'));
    messageInput.addEventListener('input', () => {
      if (groups.message.classList.contains('has-error')) {
        validateField('message');
      }
    });
  }
  if (consentCheckbox) {
    consentCheckbox.addEventListener('change', () => validateField('consent'));
  }

  // Field Validation Logic
  function validateField(fieldName) {
    let isValid = true;
    let customError = '';

    switch (fieldName) {
      case 'fullName': {
        const val = fullNameInput.value.trim();
        // Required, minimum 3 chars, letters and spaces only
        const nameRegex = /^[A-Za-z\s.]{3,}$/;
        if (!val) {
          isValid = false;
          customError = 'Full name is required.';
        } else if (val.length < 3) {
          isValid = false;
          customError = 'Full name must be at least 3 characters long.';
        } else if (!nameRegex.test(val)) {
          isValid = false;
          customError = 'Full name must contain only letters, dots, and spaces.';
        }
        break;
      }

      case 'email': {
        const val = emailInput.value.trim();
        // Required, valid email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
        if (!val) {
          isValid = false;
          customError = 'Email address is required.';
        } else if (!emailRegex.test(val)) {
          isValid = false;
          customError = 'Please enter a valid email address (e.g. karthik@example.com).';
        }
        break;
      }

      case 'phone': {
        const val = phoneInput.value.trim();
        // Required, exactly 10 digits, starts with 6-9
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
          customError = `Message is too short (${val.length}/20 chars minimum). Please describe your space requirements.`;
        } else if (val.length > 500) {
          isValid = false;
          customError = `Message exceeds the 500 character limit (${val.length}/500 chars).`;
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

    // Toggle Group UI classes and error text
    const groupEl = groups[fieldName];
    const errorEl = errorMessages[fieldName];

    if (groupEl && errorEl) {
      if (!isValid) {
        groupEl.classList.add('has-error');
        errorEl.textContent = customError;
      } else {
        groupEl.classList.remove('has-error');
      }
    }

    return isValid;
  }

  // Validate Entire Form
  function validateEntireForm() {
    const fields = ['fullName', 'email', 'phone', 'service', 'message', 'consent'];
    let allValid = true;
    let firstInvalidField = null;

    fields.forEach(f => {
      const isFieldValid = validateField(f);
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

    // Hide any previous alert banners
    if (successAlert) successAlert.style.display = 'none';
    if (errorAlert) errorAlert.style.display = 'none';

    const { allValid, firstInvalidField } = validateEntireForm();

    if (!allValid) {
      // Keep entered data in form! Show error banner
      if (errorAlert) {
        errorAlert.style.display = 'flex';
      }
      // Focus first error field for accessibility
      const targetElement = document.getElementById(firstInvalidField) || consentCheckbox;
      if (targetElement) {
        targetElement.focus();
      }
      return;
    }

    // Processing State: Disable button, show spinner
    submitBtn.classList.add('is-submitting');
    submitBtn.disabled = true;
    btnText.textContent = 'Scheduling Consultation...';

    // Capture user details safely
    const submittedName = fullNameInput.value.trim();
    const submittedPhone = phoneInput.value.trim();
    const submittedService = serviceSelect.value;

    // Simulate network submission delay (1200ms)
    await new Promise(resolve => setTimeout(resolve, 1200));

    // Re-enable button after processing
    submitBtn.classList.remove('is-submitting');
    submitBtn.disabled = false;
    btnText.textContent = 'Schedule Free Consultation';

    // Show friendly success message with user-specific confirmation
    if (successAlert) {
      // Clean, safe DOM text replacement
      const titleStrong = successAlert.querySelector('strong');
      const descDiv = successAlert.querySelector('div div');
      if (titleStrong) {
        titleStrong.textContent = `Thank you, ${submittedName}! Your consultation request has been received.`;
      }
      if (descDiv) {
        descDiv.textContent = `Our Anna Nagar lead architect will review your ${submittedService} enquiry and call you at +91 ${submittedPhone} within 24 business hours. (Note: Simulated submission; no actual email sent).`;
      }
      successAlert.style.display = 'flex';
      successAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Reset Form fields cleanly
    form.reset();

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
