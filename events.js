console.log("hello form js");

const btn=document.getElementById('btn')
btn.addEventListener('click',(e)=>{
    console.log("event occured");
    console.log(e);
    
    
})

/*

Events Phases

Capture phase top down parent to child
bubbling phase bottom up child to parent

default behaviour is bubbling phase
addEventListner('click',()=>{},false) default
addEventListner('click',()=>{},true) explicitly mention for capture phase

stop propagation is used to stop the propagation of events to next levels
*/