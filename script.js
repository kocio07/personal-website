let smallcircle = document.querySelector('.smallcircle');
let biggercircle = dpcuemnt.querySelector('biggercircle');

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
    innerCursor.classList.add('grow');
  });
  link.addEventListener('mouseleave', () => {
    innerCursor.classList.remove('grow');
  });
});

   


