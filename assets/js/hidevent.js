

// window.addEventListener('click', tapOutside(e))


let eventsTrigger=document.querySelector(".btn--modal");
eventsTrigger.addEventListener('click',showHideEvents);
let eventsList=document.querySelector(".events");
console.log(eventsList);


function showHideEvents(e){  
  console.log("hideEvents");
    eventsList.classList.toggle('events');  
  
};
