var typedAbtLogo2 = new Typed(".abtlogo", {
    strings: ["Tanushree Hajare."],
    typeSpeed: 70,
    backSpeed: 30,
    backDelay: 1000,
    loop: false,
    showCursor: false
});
// Select all elements with the class "animate-element"
const animatedElements = document.querySelectorAll('.animate-element');

// Callback function when the elements intersect with the viewport
const animateCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add the "active" class to start the animation
      entry.target.classList.add('active');
      // Stop observing the element to prevent the animation from occurring multiple times
      observer.unobserve(entry.target);
    }
  });
};

// Create an Intersection Observer
const observer = new IntersectionObserver(animateCallback, {
  root: null, // Use the viewport as the root
  threshold: 0.2, // Trigger the animation when 20% of the element is visible
});

// Observe each animated element
animatedElements.forEach((element) => {
  observer.observe(element);
});
const progressBars = document.querySelectorAll('.progress-line span');

const animateProgressBar = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.dataset.width; // Set the width
      entry.target.style.transform = 'translateX(0)'; // Slide in from the left
      observer.unobserve(entry.target);
    }
  });
};

const progressBarObserver = new IntersectionObserver(animateProgressBar, {
  root: null,
  threshold: 0.2,
});

progressBars.forEach((bar) => {
  bar.dataset.width = bar.style.width; // Store the width value in a data attribute
  bar.style.width = '0'; // Initialize width to zero
  progressBarObserver.observe(bar);
});
function scrollToTop() {
  // Scroll to the top of the page smoothly
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}
