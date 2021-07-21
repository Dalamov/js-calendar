let input = document.querySelector('#burger');

input.addEventListener('click',showMenu());

function showMenu(){
    console.log('abcd');
    let before=document.querySelector(".before");
    let after=document.querySelector(".after");
    console.log(before);
    console.log(after);
    if (before.style.display==="none"){
      before.style.display="flex";
      after.style.display="flex";
    } 
    else {
      before.style.display="none";
      after.style.display="none";
    };

    