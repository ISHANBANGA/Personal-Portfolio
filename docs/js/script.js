document.addEventListener("DOMContentLoaded", function () {
  includeHTML();
    const currentPath = window.location.pathname.split("/").pop();
    
    const navLinks = {
      home: 'index.html',
      about: 'about.html',
      blog: 'Blog.html',
      projects: 'projects.html',
      contact: 'contact.html'
    };
    
    Object.keys(navLinks).forEach(key => {
      const linkElement = document.getElementById(key + 'Link');
      if (linkElement && navLinks[key] === currentPath) {
        linkElement.classList.add('active');
      }
    });
});
let mouseX = 0, mouseY = 0, posX = 0, posY = 0;

function logMouseMove(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
}

function updatePosition() {
    // Gradually move the eye towards the mouse position
    posX += (mouseX - posX - 25) / 10;  // The divisor controls the delay
    posY += (mouseY - posY - 25) / 10;  // The divisor controls the delay

    const eye = document.getElementById('eye');
    eye.style.left = posX + 'px';
    eye.style.top = posY + 'px';

    requestAnimationFrame(updatePosition);  // Recursively update position
}

document.addEventListener("mousemove", logMouseMove);
requestAnimationFrame(updatePosition);  // Start the loop

