// PARALLAX EFFECT ON COLLAGE IMAGES
const collageImages = document.querySelectorAll('.collage img');

document.addEventListener('mousemove', e => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20; // horizontal tilt
  const y = (e.clientY / window.innerHeight - 0.5) * 20; // vertical tilt

  collageImages.forEach((img, index) => {
    const factor = (index + 1) * 1.5; // different movement for each image
    img.style.transform = `translate(${x*factor}px, ${y*factor}px) scale(1.02)`;
  });
});

document.addEventListener('mouseleave', () => {
  collageImages.forEach(img => {
    img.style.transform = 'translate(0,0) scale(1)';
  });
});










// COUNTER ANIMATION
const counters = document.querySelectorAll('.counter');
let started = false;

function startCounters() {
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    const speed = target / 120; // smoothness

    const updateCounter = () => {
      count += speed;
      if (count < target) {
        counter.innerText = Math.floor(count);
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}

// TRIGGER ON SCROLL
window.addEventListener('scroll', () => {
  const section = document.querySelector('.projects-stats');
  const sectionTop = section.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (sectionTop < screenHeight - 150 && !started) {
    startCounters();
    started = true;
  }
});
