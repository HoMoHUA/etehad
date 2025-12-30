/* ========================================
   Ettehad Landing Page - Pure JavaScript
   ======================================== */

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
  // Initialize all modules
  initHeader();
  initMobileMenu();
  initScrollAnimations();
  initConsultantForm();
  initTestimonialsSlider();
  initBottomNavbar();
  initChatWidget();
  initSmoothScroll();
  setCurrentYear();
});

/* ========== Header Scroll Effect ========== */
function initHeader() {
  const header = document.getElementById('main-header');
  
  function handleScroll() {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check
}

/* ========== Mobile Menu ========== */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuLinks = mobileMenu.querySelectorAll('a');

  menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  // Close menu when link is clicked
  menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      menuBtn.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });

  // Close menu on outside click
  document.addEventListener('click', function(e) {
    if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
      menuBtn.classList.remove('open');
      mobileMenu.classList.remove('open');
    }
  });
}

/* ========== Scroll Animations ========== */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.scroll-animate');

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  animatedElements.forEach(function(el) {
    observer.observe(el);
  });
}

/* ========== Consultant Form ========== */
function initConsultantForm() {
  let currentStep = 0;
  const totalSteps = 4;
  const answers = {};
  
  const steps = document.querySelectorAll('.form-step[data-step]');
  const successStep = document.querySelector('.form-step[data-step="success"]');
  const progressFill = document.getElementById('progress-fill');
  const stepInfo = document.getElementById('step-info');
  const progressPercent = document.getElementById('progress-percent');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const btnSubmit = document.getElementById('btn-submit');
  const formNav = document.getElementById('form-nav');

  // Persian number converter
  function toPersianNumber(num) {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return num.toString().replace(/\d/g, function(d) {
      return persianDigits[d];
    });
  }

  function updateProgress() {
    const progress = ((currentStep + 1) / totalSteps) * 100;
    progressFill.style.width = progress + '%';
    stepInfo.textContent = 'مرحله ' + toPersianNumber(currentStep + 1) + ' از ' + toPersianNumber(totalSteps);
    progressPercent.textContent = toPersianNumber(Math.round(progress)) + '٪';
  }

  function showStep(stepIndex) {
    steps.forEach(function(step, index) {
      step.classList.remove('active');
      if (index === stepIndex) {
        step.classList.add('active');
      }
    });

    // Update buttons
    btnPrev.disabled = stepIndex === 0;
    
    if (stepIndex === totalSteps - 1) {
      // Contact step
      btnNext.classList.add('hidden');
      btnSubmit.classList.remove('hidden');
      updateSubmitButton();
    } else {
      btnNext.classList.remove('hidden');
      btnSubmit.classList.add('hidden');
      updateNextButton();
    }

    updateProgress();
  }

  function updateNextButton() {
    btnNext.disabled = !answers[currentStep];
  }

  function updateSubmitButton() {
    const name = document.getElementById('user-name').value.trim();
    const phone = document.getElementById('user-phone').value.trim();
    btnSubmit.disabled = !name || !phone;
  }

  function showSuccess() {
    steps.forEach(function(step) {
      step.classList.remove('active');
    });
    successStep.classList.add('active');
    formNav.classList.add('hidden');
    
    // Update progress to 100%
    progressFill.style.width = '100%';
    stepInfo.textContent = 'تکمیل شد';
    progressPercent.textContent = '۱۰۰٪';
  }

  // Option button clicks
  document.querySelectorAll('.option-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      const step = parseInt(this.closest('.form-step').dataset.step);
      const value = this.dataset.value;

      // Remove selected from siblings
      this.parentElement.querySelectorAll('.option-btn').forEach(function(sibling) {
        sibling.classList.remove('selected');
      });

      // Add selected to clicked
      this.classList.add('selected');
      answers[step] = value;
      
      updateNextButton();
    });
  });

  // Contact inputs
  const nameInput = document.getElementById('user-name');
  const phoneInput = document.getElementById('user-phone');

  nameInput.addEventListener('input', updateSubmitButton);
  phoneInput.addEventListener('input', updateSubmitButton);

  // Navigation buttons
  btnPrev.addEventListener('click', function() {
    if (currentStep > 0) {
      currentStep--;
      showStep(currentStep);
    }
  });

  btnNext.addEventListener('click', function() {
    if (currentStep < totalSteps - 1 && answers[currentStep]) {
      currentStep++;
      showStep(currentStep);
    }
  });

  btnSubmit.addEventListener('click', function() {
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    
    if (name && phone) {
      // Here you would normally send data to server
      console.log('Form submitted:', { answers, name, phone });
      showSuccess();
    }
  });

  // Initialize
  showStep(0);
}

/* ========== Testimonials Slider ========== */
function initTestimonialsSlider() {
  let currentIndex = 0;
  const cards = document.querySelectorAll('.testimonial-card');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.getElementById('slider-prev');
  const nextBtn = document.getElementById('slider-next');
  const totalSlides = cards.length;

  function showSlide(index) {
    // Normalize index
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    currentIndex = index;

    // Update cards
    cards.forEach(function(card, i) {
      card.classList.remove('active');
      if (i === currentIndex) {
        card.classList.add('active');
      }
    });

    // Update dots
    dots.forEach(function(dot, i) {
      dot.classList.remove('active');
      if (i === currentIndex) {
        dot.classList.add('active');
      }
    });
  }

  // Button clicks
  prevBtn.addEventListener('click', function() {
    showSlide(currentIndex + 1);
  });

  nextBtn.addEventListener('click', function() {
    showSlide(currentIndex - 1);
  });

  // Dot clicks
  dots.forEach(function(dot) {
    dot.addEventListener('click', function() {
      const index = parseInt(this.dataset.index);
      showSlide(index);
    });
  });

  // Auto-play
  setInterval(function() {
    showSlide(currentIndex + 1);
  }, 5000);
}

/* ========== Bottom Navbar ========== */
function initBottomNavbar() {
  const navItems = document.querySelectorAll('.bottom-navbar .nav-item');

  navItems.forEach(function(item) {
    item.addEventListener('click', function() {
      const href = this.dataset.href;
      const hash = href.split('#')[1];
      
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

/* ========== Chat Widget ========== */
function initChatWidget() {
  const chatButton = document.getElementById('chat-button');
  const chatWindow = document.getElementById('chat-window');
  const chatClose = document.getElementById('chat-close');
  const chatInput = document.getElementById('chat-input');
  const chatSend = document.getElementById('chat-send');
  const chatMessages = document.getElementById('chat-messages');

  // Chat URL for AI backend
  const CHAT_URL = 'https://icizpjnlnuopzcuejexz.supabase.co/functions/v1/chat';
  
  // Store conversation history
  let conversationHistory = [];
  let isLoading = false;

  function toggleChat() {
    chatWindow.classList.toggle('open');
    chatButton.classList.toggle('hidden');
  }

  function addMessage(content, isUser, messageId) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message ' + (isUser ? 'user' : 'bot');
    if (messageId) messageDiv.id = messageId;
    
    const avatarSvg = isUser 
      ? '<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>'
      : '<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>';
    
    messageDiv.innerHTML = 
      '<div class="message-avatar">' + avatarSvg + '</div>' +
      '<div class="message-content"><p>' + content + '</p></div>';
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    return messageDiv;
  }

  function updateMessage(messageId, content) {
    const messageDiv = document.getElementById(messageId);
    if (messageDiv) {
      const contentP = messageDiv.querySelector('.message-content p');
      if (contentP) {
        contentP.textContent = content;
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }
    }
  }

  async function streamChat(messages) {
    const resp = await fetch(CHAT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages }),
    });

    if (!resp.ok || !resp.body) {
      if (resp.status === 429) {
        throw new Error('سیستم در حال حاضر شلوغ است. لطفاً کمی صبر کنید.');
      }
      if (resp.status === 402) {
        throw new Error('خطا در سرویس. لطفاً بعداً تلاش کنید.');
      }
      throw new Error('خطا در اتصال به سرور');
    }

    const reader = resp.body.getReader();
    const decoder = new TextDecoder();
    let textBuffer = '';
    let fullResponse = '';
    const messageId = 'bot-msg-' + Date.now();

    // Add initial bot message
    addMessage('...', false, messageId);

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      textBuffer += decoder.decode(value, { stream: true });

      let newlineIndex;
      while ((newlineIndex = textBuffer.indexOf('\n')) !== -1) {
        let line = textBuffer.slice(0, newlineIndex);
        textBuffer = textBuffer.slice(newlineIndex + 1);

        if (line.endsWith('\r')) line = line.slice(0, -1);
        if (line.startsWith(':') || line.trim() === '') continue;
        if (!line.startsWith('data: ')) continue;

        const jsonStr = line.slice(6).trim();
        if (jsonStr === '[DONE]') break;

        try {
          const parsed = JSON.parse(jsonStr);
          const content = parsed.choices?.[0]?.delta?.content;
          if (content) {
            fullResponse += content;
            updateMessage(messageId, fullResponse);
          }
        } catch (e) {
          textBuffer = line + '\n' + textBuffer;
          break;
        }
      }
    }

    return fullResponse;
  }

  async function handleSend() {
    const message = chatInput.value.trim();
    if (!message || isLoading) return;

    isLoading = true;
    chatSend.disabled = true;
    chatInput.disabled = true;

    addMessage(message, true);
    chatInput.value = '';

    // Add to conversation history
    conversationHistory.push({ role: 'user', content: message });

    try {
      const response = await streamChat(conversationHistory);
      // Add assistant response to history
      conversationHistory.push({ role: 'assistant', content: response });
    } catch (error) {
      console.error('Chat error:', error);
      addMessage(error.message || 'خطا در دریافت پاسخ. لطفاً دوباره تلاش کنید.', false);
    } finally {
      isLoading = false;
      chatSend.disabled = false;
      chatInput.disabled = false;
      chatInput.focus();
    }
  }

  chatButton.addEventListener('click', toggleChat);
  chatClose.addEventListener('click', toggleChat);
  
  chatSend.addEventListener('click', handleSend);
  chatInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      handleSend();
    }
  });
}

/* ========== Smooth Scroll ========== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/* ========== Set Current Year ========== */
function setCurrentYear() {
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    // Convert to Persian numerals
    const year = new Date().getFullYear();
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    const persianYear = year.toString().replace(/\d/g, function(d) {
      return persianDigits[d];
    });
    yearSpan.textContent = persianYear;
  }
}
