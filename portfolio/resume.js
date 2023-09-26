var typedAbtLogo2 = new Typed(".abtlogo", {
    strings: ["Tanushree Hajare."],
    typeSpeed: 70,
    backSpeed: 30,
    backDelay: 1000,
    loop: false,
    showCursor: false
});

const animatedElements = document.querySelectorAll('.animate-element');


const animateCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
    
      entry.target.classList.add('active');
    
      observer.unobserve(entry.target);
    }
  });
};

// Create an Intersection Observer
const observer = new IntersectionObserver(animateCallback, {
  root: null, 
  threshold: 0.2,
});

// Observe each animated element
animatedElements.forEach((element) => {
  observer.observe(element);
});
const progressBars = document.querySelectorAll('.progress-line span');

const animateProgressBar = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.dataset.width; 
      entry.target.style.transform = 'translateX(0)'; 
      observer.unobserve(entry.target);
    }
  });
};

const progressBarObserver = new IntersectionObserver(animateProgressBar, {
  root: null,
  threshold: 0.2,
});

progressBars.forEach((bar) => {
  bar.dataset.width = bar.style.width; 
  bar.style.width = '0'; 
  progressBarObserver.observe(bar);
});
function scrollToTop() {
  
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}
