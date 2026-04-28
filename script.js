// RB Classes Website - Optimized JavaScript

document.addEventListener('DOMContentLoaded', function() {
  initScrollAnimations();
  console.log('RB Classes Website Loaded Successfully!');
});

// Intersection Observer for fade-in animations - Efficient single observer
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  // Observe all cards in one loop
  document.querySelectorAll('.subject-card, .batch-card, .testi-card, .why-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
}
