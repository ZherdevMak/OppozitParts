
let miniMenu = document.querySelectorAll('.mini-menu');
let linkPosition = document.querySelectorAll('.nav__table-element-link');


miniMenu[0].addEventListener("click", function() {
  for (let i = 0; i < miniMenu.length; i++) {
        if (miniMenu[i].classList.contains('mini-menu--closed')) {
          miniMenu[i].classList.remove('mini-menu--closed');
          miniMenu[i].classList.add('mini-menu--open');
        } else {
       miniMenu[i].classList.add('mini-menu--closed');
     miniMenu[i].classList.remove('mini-menu--open');
    }};
    for (let e = 0; e < linkPosition.length; e++) {
      if (linkPosition[e].classList.contains('position-right')) {
       linkPosition[e].classList.remove('position-right');
      } else {
         linkPosition[e].classList.add('position-right');
  }};

  });
