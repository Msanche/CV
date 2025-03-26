import {
  confetti
} from 'confetti-js'

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const downloadButton = document.getElementById('download-button');
  const profilePic = document.getElementById('profile-pic');

  // Check for saved theme preference
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    document.body.classList.add(currentTheme);
    if (currentTheme === 'dark-theme') {
      themeToggle.checked = true;
    }
  }

  // Theme toggle functionality
  themeToggle.addEventListener('change', function () {
    if (this.checked) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', '');
    }
  });


  // Download CV functionality (placeholder)
  downloadButton.addEventListener('click', function () {
    // Replace with actual PDF download logic
    alert('Descargando CV...');

    const confettiSettings = {
      target: 'confetti-canvas',
      respawn: true,
      colors: ['#bb86fc', '#3700b3', '#03dac6'] // Optional: customize confetti colors
    };
    const myConfetti = new confetti_js(confettiSettings);
    myConfetti.render();
  });

  // Placeholder for profile picture hover effect (replace with actual image URL)
  profilePic.addEventListener('mouseover', function () {
    this.src = ''; // Replace with color image URL
  });

  profilePic.addEventListener('mouseout', function () {
    this.src = ''; // Replace with grayscale image URL
  });
});

