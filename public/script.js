
let miniMenu = document.querySelectorAll('.mini-menu');

miniMenu[0].addEventListener("click", function() {
  for (let i = 0; i < miniMenu.length; i++) {
        if (miniMenu[i].classList.contains('mini-menu--closed')) {
          miniMenu[i].classList.remove('mini-menu--closed');
          miniMenu[i].classList.add('mini-menu--open');
        } else {
       miniMenu[i].classList.add('mini-menu--closed');
     miniMenu[i].classList.remove('mini-menu--open');
    }}
   });