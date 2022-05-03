var img = document.querySelectorAll('.gallery img'),
  backPop = document.getElementById('backPop'),
    popUp = document.getElementById('popUp'),
    bigImg= document.getElementById('bigImg');
[].forEach.call(img, function(elem) {
  elem.onclick = function() { 
    var src = elem.getAttribute('src');
    bigImg.setAttribute('src',src);
    backPop.style.display = "block";
  }
});
backPop.onclick = function(elem){
  // if(!(elem.target.closest("#popUp"))){
      backPop.style.display = 'none';
  //    }    
}
