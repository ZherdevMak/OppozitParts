
let miniMenu = document.querySelectorAll('.mini-menu');
let linkPosition = document.querySelectorAll('.nav__table-element-link');
let firstLine = document.querySelector('.model-navMenu-table__element--first');
let modelMenu = document.querySelector('.model-navMenu');
let modelButton = document.querySelector('.model-navMenu-table__button');

let closeMini = function() {
  for (let i = 0; i < miniMenu.length; i++) {
        if (miniMenu[i].classList.contains('mini-menu--closed')) {
          miniMenu[i].classList.remove('mini-menu--closed');
          miniMenu[i].classList.add('mini-menu--open');
        } else {
       miniMenu[i].classList.add('mini-menu--closed');
     miniMenu[i].classList.remove('mini-menu--open');
    }};
    
};

let rightPosition = function() {
  for (let e = 0; e < linkPosition.length; e++) {
    if (linkPosition[e].classList.contains('position-right')) {
     linkPosition[e].classList.remove('position-right');
    } else {
       linkPosition[e].classList.add('position-right');
}}};

let openModel = function() {
  modelMenu.classList.remove('model-navMenu--closed');
}


let closeButton = function () {
  modelMenu.classList.add('model-navMenu--closed')
}

miniMenu[0].addEventListener("click", rightPosition);
miniMenu[0].addEventListener("click", closeMini);
firstLine.addEventListener("click", openModel);
modelButton.addEventListener("click", closeButton);

