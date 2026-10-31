/**
 * UrbanNest Interiors — Main JavaScript
 * Tagline: "Spaces that feel like you."
 * Features:
 *   1. Sticky Header with scroll detection
 *   2. Mobile Hamburger Navigation with Accessibility (ARIA)
 *   3. Open-Meteo REST API Chennai Live Weather Integration
 *   4. Animated Statistics Number Counters (IntersectionObserver)
 *   5. Testimonial Carousel Slider with touch swipe & autoplay
 *   6. FAQ Accordion with smooth expanding panels
 *   7. Category Filtering for Services Page
 *   8. Back-to-Top Smooth Scrolling Button
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileNav();
  initChennaiWeather();
  initAnimatedCounters();
  initTestimonialSlider();
  initFaqAccordion();
  initServicesFilter();
  initBackToTop();
});

/* ==========================================================================
   1. Sticky Header
   ========================================================================== */
function initStickyHeader() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ==========================================================================
   2. Mobile Hamburger Navigation
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNavigation');
  if (!toggleBtn || !nav) return;

  const toggleMenu = (open) => {
    const isOpen = open !== undefined ? open : !nav.classList.contains('is-open');
    nav.classList.toggle('is-open', isOpen);
    toggleBtn.classList.toggle('is-active', isOpen);
    toggleBtn.setAttribute('aria-expanded', String(isOpen));

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Close when clicking nav links
  nav.querySelectorAll('.nav-link, .mobile-cta-wrapper a').forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      toggleMenu(false);
      toggleBtn.focus();
    }
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (nav.classList.contains('is-open') && !nav.contains(e.target) && !toggleBtn.contains(e.target)) {
      toggleMenu(false);
    }
  });
}

/* ==========================================================================
   3. Open-Meteo Public API Integration (Chennai Weather)
   ========================================================================== */
function initChennaiWeather() {
  const weatherCard = document.getElementById('weatherCard');
  if (!weatherCard) return;

  const loadingEl = document.getElementById('weatherLoading');
  const contentEl = document.getElementById('weatherContent');
  const errorEl = document.getElementById('weatherError');
  const refreshBtn = document.getElementById('refreshWeatherBtn');
  const retryBtn = document.getElementById('retryWeatherBtn');

  const tempVal = document.getElementById('weatherTempValue');
  const condText = document.getElementById('weatherConditionText');
  const iconDisp = document.getElementById('weatherIconDisplay');
  const humidityEl = document.getElementById('weatherHumidity');
  const windEl = document.getElementById('weatherWind');

  // Chennai Coordinates (Anna Nagar Studio)
  const LATITUDE = 13.0827;
  const LONGITUDE = 80.2707;
  const API_URL = `https://api.open-meteo.com/v1/forecast?latitude=${LATITUDE}&longitude=${LONGITUDE}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m&timezone=auto`;

  // WMO Weather Interpretation Codes
  const WMO_CODES = {
    0: { text: 'Clear Sky', dayIcon: '☀️', nightIcon: '🌙' },
    1: { text: 'Mainly Clear', dayIcon: '🌤️', nightIcon: '🌤️' },
    2: { text: 'Partly Cloudy', dayIcon: '⛅', nightIcon: '⛅' },
    3: { text: 'Overcast', dayIcon: '☁️', nightIcon: '☁️' },
    45: { text: 'Foggy / Mist', dayIcon: '🌫️', nightIcon: '🌫️' },
    48: { text: 'Depositing Rime Fog', dayIcon: '🌫️', nightIcon: '🌫️' },
    51: { text: 'Light Drizzle', dayIcon: '🌦️', nightIcon: '🌦️' },
    53: { text: 'Moderate Drizzle', dayIcon: '🌧️', nightIcon: '🌧️' },
    55: { text: 'Dense Drizzle', dayIcon: '🌧️', nightIcon: '🌧️' },
    61: { text: 'Slight Rain', dayIcon: '🌦️', nightIcon: '🌦️' },
    63: { text: 'Moderate Rain', dayIcon: '🌧️', nightIcon: '🌧️' },
    65: { text: 'Heavy Rain Showers', dayIcon: '⛈️', nightIcon: '⛈️' },
    80: { text: 'Rain Showers', dayIcon: '🌦️', nightIcon: '🌦️' },
    81: { text: 'Moderate Showers', dayIcon: '🌧️', nightIcon: '🌧️' },
    82: { text: 'Violent Rain Showers', dayIcon: '⛈️', nightIcon: '⛈️' },
    95: { text: 'Thunderstorm', dayIcon: '⛈️', nightIcon: '⛈️' },
    96: { text: 'Thunderstorm with Hail', dayIcon: '⛈️', nightIcon: '⛈️' }
  };

  const showState = (state) => {
    if (loadingEl) loadingEl.style.display = state === 'loading' ? 'block' : 'none';
    if (contentEl) contentEl.style.display = state === 'content' ? 'block' : 'none';
    if (errorEl) errorEl.style.display = state === 'error' ? 'block' : 'none';
  };

  const fetchWeather = async () => {
    showState('loading');
    if (refreshBtn) refreshBtn.classList.add('rotating');

    try {
      const response = await fetch(API_URL, { cache: 'no-cache' });
      if (!response.ok) {
        throw new Error(`Weather API returned status: ${response.status}`);
      }
      const data = await response.json();
      const current = data.current;

      if (!current) {
        throw new Error('Current weather payload missing');
      }

      // Safe DOM Updates using textContent (Strict Security requirement)
      const tempCelsius = Math.round(current.temperature_2m);
      const humidityVal = current.relative_humidity_2m;
      const windSpeed = Math.round(current.wind_speed_10m);
      const isDay = current.is_day === 1;
      const codeInfo = WMO_CODES[current.weather_code] || { text: 'Pleasant & Mild', dayIcon: '🌤️', nightIcon: '🌙' };

      if (tempVal) tempVal.textContent = String(tempCelsius);
      if (condText) condText.textContent = codeInfo.text;
      if (iconDisp) iconDisp.textContent = isDay ? codeInfo.dayIcon : codeInfo.nightIcon;
      if (humidityEl) humidityEl.textContent = `${humidityVal}%`;
      if (windEl) windEl.textContent = `${windSpeed} km/h`;

      showState('content');
    } catch (err) {
      console.warn('Open-Meteo Weather API Fetch failed, displaying fallback error state:', err);
      showState('error');
    } finally {
      if (refreshBtn) {
        setTimeout(() => refreshBtn.classList.remove('rotating'), 600);
      }
    }
  };

  if (refreshBtn) {
    refreshBtn.addEventListener('click', fetchWeather);
  }
  if (retryBtn) {
    retryBtn.addEventListener('click', fetchWeather);
  }

  // Initial Fetch
  fetchWeather();
}

/* ==========================================================================
   4. Animated Statistics Counters
   ========================================================================== */
function initAnimatedCounters() {
  const counters = document.querySelectorAll('.stat-counter');
  if (!counters.length) return;

  const animateCounter = (el) => {
    const target = parseFloat(el.getAttribute('data-target'));
    const isDecimal = el.getAttribute('data-decimal') === 'true';
    const duration = 2000; // ms
    const startTime = performance.now();

    const updateNumber = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = target * easeProgress;

      if (isDecimal) {
        el.textContent = currentVal.toFixed(1);
      } else {
        el.textContent = Math.floor(currentVal).toLocaleString();
      }

      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      } else {
        el.textContent = isDecimal ? target.toFixed(1) : target.toLocaleString();
      }
    };

    requestAnimationFrame(updateNumber);
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });

    counters.forEach(c => observer.observe(c));
  } else {
    counters.forEach(animateCounter);
  }
}

/* ==========================================================================
   5. Testimonial Slider / Carousel
   ========================================================================== */
function initTestimonialSlider() {
  const track = document.getElementById('testimonialTrack');
  const prevBtn = document.getElementById('prevSlideBtn');
  const nextBtn = document.getElementById('nextSlideBtn');
  const dotsContainer = document.getElementById('sliderDots');

  if (!track) return;
  const slides = track.querySelectorAll('.testimonial-slide');
  if (!slides.length) return;

  let currentIndex = 0;
  let autoplayTimer = null;

  // Build dots
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = `slider-dot ${i === 0 ? 'active' : ''}`;
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', `Go to testimonial slide ${i + 1}`);
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    });
  }

  const updateDots = () => {
    if (!dotsContainer) return;
    const dots = dotsContainer.querySelectorAll('.slider-dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
      dot.setAttribute('aria-selected', String(i === currentIndex));
    });
  };

  const goToSlide = (index) => {
    if (index < 0) {
      currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
  };

  const nextSlide = () => goToSlide(currentIndex + 1);
  const prevSlide = () => goToSlide(currentIndex - 1);

  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);

  // Autoplay
  const startAutoplay = () => {
    stopAutoplay();
    autoplayTimer = setInterval(nextSlide, 6000);
  };

  const stopAutoplay = () => {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  };

  track.addEventListener('mouseenter', stopAutoplay);
  track.addEventListener('mouseleave', startAutoplay);
  startAutoplay();

  // Touch swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  track.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    stopAutoplay();
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) {
      nextSlide();
    } else if (touchEndX - touchStartX > 50) {
      prevSlide();
    }
    startAutoplay();
  }, { passive: true });
}

/* ==========================================================================
   6. FAQ Accordion
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    const panel = item.querySelector('.faq-answer-panel');
    if (!btn || !panel) return;

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      // Close all other items for clean accordion UX
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('is-open')) {
          otherItem.classList.remove('is-open');
          const otherBtn = otherItem.querySelector('.faq-question-btn');
          const otherPanel = otherItem.querySelector('.faq-answer-panel');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          if (otherPanel) otherPanel.style.maxHeight = null;
        }
      });

      // Toggle current
      if (isOpen) {
        item.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
        panel.style.maxHeight = null;
      } else {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });
}

/* ==========================================================================
   7. Services Category Filter (services.html)
   ========================================================================== */
function initServicesFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const serviceCards = document.querySelectorAll('#servicesContainer .service-card');
  if (!filterBtns.length || !serviceCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      // Update active button state
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      // Filter cards
      serviceCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   8. Back to Top Smooth Scrolling Button
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById('backToTopBtn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      btn.classList.add('is-visible');
    } else {
      btn.classList.remove('is-visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
