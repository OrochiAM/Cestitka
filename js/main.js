const preklopaca = document.querySelector('.preklapaca');
const papir = document.querySelector('.papir');
// DUGMAD
const openD = document.querySelector('.open');
const closeD = document.querySelector('.close');

const tl = gsap.timeline();
tl.pause();
tl.to(
  preklopaca,
  {
    transform: 'rotateX(180deg)',
    duration: 1.5,
  },
  '<'
)
  .to(preklopaca, {
    zIndex: 0,
    duration: 0,
  })
  .to(
    papir,
    {
      y: '-=100px',
      duration: 1.1,
    },
    '<'
  );

openD.addEventListener('click', () => {
  tl.play();
});

closeD.addEventListener('click', () => {
  tl.reverse();
});
