// script.js

// Simple search function
function searchContent() {
    const query = document.getElementById('searchBox').value.toLowerCase();
    if (query) {
      alert(`Search triggered for: ${query}`);
      // Extend with real filtering logic
    } else {
      alert('Please enter a search term.');
    }
  }
  
  // Security note: Always validate links and inputs server-side in production.

  // 🚀 Optimized Sliding Banner Script

// Select all slides
const slides = document.querySelectorAll('.slide');

// Function to show the current slide
function showSlide() {
  // Hide all slides
  slides.forEach(slide => slide.classList.remove('active'));

  // Show current slide
  slides[currentSlideIndex].classList.add('active');

  // Move to next slide
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
}

// Start the slider with a 5-second interval
setInterval(showSlide, 5000);

// Show the first slide initially
if (slides.length > 0) {
  slides[0].classList.add('active');
}

// Manual Controls for Sliding Banner
const manualControls = document.querySelector('.manual-controls');

// Ensure only one set of manual controls is created
if (!manualControls.querySelector('button')) {
  const prevButton = document.createElement('button');
  const nextButton = document.createElement('button');

  // Set button text content
  prevButton.textContent = '❮';
  nextButton.textContent = '❯';

  // Append buttons to manual controls
  manualControls.appendChild(prevButton);
  manualControls.appendChild(nextButton);

  // Add event listeners for manual navigation
  prevButton.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide();
  });

  nextButton.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide();
  });
}

