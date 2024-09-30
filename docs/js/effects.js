window.onload = function() {
    const pageType = document.body.getAttribute('data-page-type');
    triggerAnimation(pageType);
};

function triggerAnimation(type) {
    const layer = document.getElementById('animationLayer');

    switch (type) {
        case 'home':
            // Thunderstorm effect
            layer.classList.add('thunderstorm');
            break;
        case 'about':
            // Fire effect
            layer.classList.add('fire');
            break;
        case 'contact':
            // Earthquake effect
            layer.classList.add('earthquake');
            break;
        case 'blog':
            // Fighting effect
            layer.classList.add('fight');
            break;
        case 'projects':
            // Chemical spill
            layer.classList.add('spill');
            break;
    }

    setTimeout(() => {
        layer.classList.remove(type); // Remove the effect after a while
    }, 3000); // Duration of the effect in milliseconds
}