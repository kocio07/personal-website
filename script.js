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

  


function openTab(tabId) {
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => content.classList.remove('active'));

  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => btn.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
  event.currentTarget.classList.add('active');
}

const grid = document.querySelector('.grid');
if (grid) {
new Sortable(grid, {
  animation: 300,
  ghostClass: 'ghost',
  dragClass: 'dragging',
});
}

const grida = document.querySelector('.grida');
if (grida){
new Sortable(grida, {
  animation: 300,
  ghostClass: 'ghost',
  dragClass: 'dragging'
});
}



