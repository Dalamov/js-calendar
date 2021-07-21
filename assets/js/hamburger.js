let input = document.querySelector('#burger');
console.log(input);
input.addEventListener('click',showMenu);

function showMenu(){
  let before = document.querySelector("#menu-to-hide");
  console.log(before);
  before.classList.toggle('showMenu')
};

// window.addEventListener('click', tapOutside(e))
    
function tapOutside(e){  
  if (!document.getElementById('menu-to-hide').contains(e.target)){
    before.classList.remove('showMenu');
    // Clicked outside the box
  }
};
