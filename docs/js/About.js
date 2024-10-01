document.querySelector('.left-btn').addEventListener('click', () => {
    document.querySelector('.skills-flex').scrollBy({ left: -100, behavior: 'smooth' });
  });
  
  document.querySelector('.right-btn').addEventListener('click', () => {
    document.querySelector('.skills-flex').scrollBy({ left: 100, behavior: 'smooth' });
  });
  