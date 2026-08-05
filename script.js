let smallcircle = document.querySelector('.smallcircle');
let biggercircle = document.querySelector('.biggercircle');

document.addEventListener('mousemove',(e) => {
    let x = e.clientX;
    let y = e.clientY;

    smallcircle.style.left = `${x}px`;
    smallcircle.style.top = `${y}px`;

    biggercircle.style.left = `${x}px`;
    biggercircle.style.top = `${y}px`;


});

let links = Array.from(document.querySelectorAll('a, button'));

links.forEach((link) => {
  link.addEventListener('mouseover', () => {
    smallcircle.classList.add('grow');
  });
  link.addEventListener('mouseleave', () => {
    smallcircle.classList.remove('grow');
  });
});

   


