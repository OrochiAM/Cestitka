const preklopaca = document.querySelector('.preklapaca');
const papir = document.querySelector('.papir');
// DUGMAD
const openD = document.querySelector('.open');
const closeD = document.querySelector('.close');

const tl = gsap.timeline({ paused: true });

tl.to(
  preklopaca,
  {
    transform: 'rotateX(180deg)',
    duration: 1.5,
    ease: 'back',
  },
  '<',
)
  .set(preklopaca, {
    zIndex: 0,
  })
  .to(papir, {
    yPercent: '-=110',
    duration: 1.5,
    ease: 'sine.out',
  })
  .set(papir, { zIndex: 10 })
  .to(papir, {
    yPercent: '+=90',
    duration: 1.5,
    ease: 'sine.in',
  });

openD.addEventListener('click', () => {
  tl.play();
});

closeD.addEventListener('click', () => {
  tl.reverse();
});
