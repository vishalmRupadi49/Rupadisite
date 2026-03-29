console.log('Website Loaded');

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('header nav');

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      mobileMenuBtn.classList.toggle('active');
      setTimeout(() => navMenu.classList.toggle('visible'), 10); // Small delay for smooth slide-in
    });

    // Close menu when clicking a nav link
    document.querySelectorAll('header nav ul li a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active', 'visible');
        mobileMenuBtn.classList.remove('active');
      });
    });
  } else {
    console.warn('Mobile menu button or nav not found');
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();

      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        });

        // Close mobile menu if open
        if (navMenu?.classList.contains('active')) {
          navMenu.classList.remove('active', 'visible');
          mobileMenuBtn?.classList.remove('active');
        }
      }
    });
  });

  // Add scrolled header on scroll
  const header = document.querySelector('header');
  const scrollThreshold = 50;

  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > scrollThreshold);
    });
  } else {
    console.warn('Header element not found');
  }

  // Simple counter animation for stats
  const animateCounter = (el, target) => {
    let count = 0;
    const duration = 2000; // 2 seconds
    const interval = 50; // Update every 50ms
    const steps = Math.floor(duration / interval);
    const increment = target / steps;

    const timer = setInterval(() => {
      count += increment;
      if (count >= target) {
        clearInterval(timer);
        count = target;
      }
      el.textContent = Math.floor(count);
    }, interval);
  };

  // Initialize counters when they come into view
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const statsElements = entry.target.querySelectorAll('.stat h3');
          statsElements.forEach(el => {
            const target = parseInt(el.textContent.replace(/\+|\D/g, ''), 10);
            el.textContent = '0';
            animateCounter(el, target);
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  // Observe stats section
  const statsSection = document.querySelector('.about-stats');
  if (statsSection) {
    observer.observe(statsSection);
  } else {
    console.warn('Stats section not found');
  }

  console.log('Rupadi Website Loaded');
});