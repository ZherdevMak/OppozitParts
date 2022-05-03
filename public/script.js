// кнопки меню
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

// меню моделей
let images = document.querySelectorAll('.imageM72');
let modelChoseButtons = document.querySelectorAll('li.model-navMenu-table__element');
let modelName = document.querySelector('.title-navMenu__span');
let fotoLink = document.querySelector('.bottom-navMenu-table__link');
for(let a = 0; a < modelChoseButtons.length; a++) {
modelChoseButtons[a].addEventListener("click", function () {
  let index = modelChoseButtons[a].firstChild.id;
  let imageSrcs = ["img/"+(index)+"-1.jpg","img/"+(index)+"-2.jpg", "img/"+(index)+"-3.jpg","img/"+(index)+"-4.jpg","img/"+(index)+"-5.jpg","img/"+(index)+"-6.jpg"];
  fotoLink.setAttribute('href', 'foto'+(index)+'.html')
  // fotoLink.href = "foto+(index[a])+.html"
for(let b = 0; b < images.length; b++) {
  images[b].src = imageSrcs[b];
};
  let Name = modelChoseButtons[a].firstChild.innerHTML
  modelName.innerHTML = Name;
  closeButton();

}
)}
  

  
