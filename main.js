const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

document.addEventListener('DOMContentLoaded', function() {
  const takeTourBtn = document.getElementById('takeTourBtn');
  const menuSection = document.getElementById('menu');

  takeTourBtn.addEventListener('click', function(e) {
      e.preventDefault();
      menuSection.scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// header container
ScrollReveal().reveal(".header__container .section__subheader", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container .btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

// feature container
ScrollReveal().reveal(".feature__card", {
  ...scrollRevealOption,
  interval: 500,
});

// news container
ScrollReveal().reveal(".news__card", {
  ...scrollRevealOption,
  interval: 500,
});

document.addEventListener('DOMContentLoaded', function() {
  const bookNowBtn = document.getElementById('bookNowBtn');
  
  if (bookNowBtn) {
      bookNowBtn.addEventListener('click', function() {
          // Replace 'YOUR_GOOGLE_FORM_URL' with the actual URL of your Google Form
          window.open('https://forms.gle/y4BXSKo852Me7ZoEA', '_blank');
      });
  }
});



document.addEventListener('DOMContentLoaded', function() {
  const bookNowBtn1 = document.getElementById('bookNowBtn1');
  
  if (bookNowBtn1) {
      bookNowBtn1.addEventListener('click', function() {
          // Replace 'YOUR_GOOGLE_FORM_URL' with the actual URL of your Google Form
          window.open('https://forms.gle/y4BXSKo852Me7ZoEA', '_blank');
      });
  }
});





// Function to animate counting
function animateCounter(element, target, duration) {
  let start = 0;
  const end = parseInt(target.replace(/[km]+$/i, ''), 10);
  const suffix = target.match(/[km]+$/i) ? target.match(/[km]+$/i)[0].toLowerCase() : '';
  const range = end - start;
  const increment = end > start ? 1 : -1;
  const stepTime = Math.abs(Math.floor(duration / range));
  const timer = setInterval(() => {
      start += increment;
      const progress = Math.min(Math.abs(start), end);
      element.textContent = formatNumber(progress, suffix);
      if (progress === end) {
          clearInterval(timer);
      }
  }, stepTime);
}

// Function to format number with suffix
function formatNumber(num, suffix) {
  if (suffix === 'K') {
      return (num / 1000).toFixed(num < 100 ? 1 : 0) + 'K';
  } else if (suffix === 'M') {
      return (num / 1000000).toFixed(1) + 'M';
  }
  return num.toString();
}

// Function to check if an element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to start animation when element is in viewport
function startAnimationOnView() {
  const banner = document.querySelector('.menu__banner');
  if (isInViewport(banner) && !banner.classList.contains('animated')) {
      banner.classList.add('animated');
      const counters = banner.querySelectorAll('h4');
      counters.forEach(counter => {
          animateCounter(counter, counter.textContent, 3000); // 3000ms duration
      });
  }
}

// Listen for scroll and load events
window.addEventListener('scroll', startAnimationOnView);
window.addEventListener('load', startAnimationOnView);