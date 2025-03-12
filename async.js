//defalult js is synchronous and single threaded

const btn1=document.getElementById('start')
const btn2=document.getElementById('stop')
const btn3=document.getElementById('forward')
const btn4=document.getElementById('backward')
const timer=document.getElementById('timer')

function changeBgColour(){
    let s1='0123456789ABCDEF'
    let s2='#'
    for(let i=0;i<6;i++){
        let rand=Math.floor(Math.random()*16)
        s2+=s1[rand]

    }
    return s2
}
let intervalId

const startChangingBgColor=function(){

    if(!intervalId){
     intervalId=setInterval(() => {
        document.body.style.backgroundColor=changeBgColour()
        
    }, 200);
}
}

const stopChangingBgColor=function(){
    if(intervalId){
    clearInterval(intervalId)
    intervalId=null
    
    }
}


btn1.addEventListener('click',startChangingBgColor)

btn2.addEventListener('click',stopChangingBgColor)

setInterval(()=>{
    const t1=document.getElementById('timer')
    const t2=Number(t1.innerText)
    t1.textContent=t2+1
},1000)

btn3.addEventListener('click',function(){
    const t1=document.getElementById('timer')
        const t2=Number(t1.innerText)
            t1.textContent=t2+10

})


btn4.addEventListener('click',function(){
    const t1=document.getElementById('timer')
            const t2=Number(t1.innerText)
                        t1.textContent=Math.max(t2-10,0)

                        })