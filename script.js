// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const targetId = link.getAttribute('href');
      window.location.href = targetId;
    });
  });
  
  // Button Click Animation
  function navigate(page) {
    window.location.href = page;
  }
  
  // Fade-In Animation on Scroll
  const fadeInElements = document.querySelectorAll('.fade-in');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  fadeInElements.forEach(el => observer.observe(el));
  