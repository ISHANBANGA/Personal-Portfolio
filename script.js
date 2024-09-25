document.addEventListener("DOMContentLoaded", function () {
    const currentPath = window.location.pathname.split("/").pop();
    
    const navLinks = {
      home: 'index.html',
      about: 'about.html',
      projects: 'projects.html',
      contact: 'contact.html'
    };
    
    Object.keys(navLinks).forEach(key => {
      if (navLinks[key] === currentPath) {
        document.getElementById(key + 'Link').classList.add('active');
      }
    });
  });

