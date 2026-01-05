// Fade-up scroll effect
const faders = document.querySelectorAll('.fade-up');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

const logo = document.querySelector('.nav-logo');

window.addEventListener('scroll', () => {
  let offset = window.scrollY;
  logo.style.transform = `translateY(${offset * 0.3}px)`;
});