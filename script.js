const minObg=document.querySelector('.min');
const secObg=document.querySelector('.sec');
const hourObg=document.querySelector('.hour');
const theme=document.querySelector('.theme');
const body=document.querySelector('body');
theme.addEventListener('click',()=>{
    body.classList.toggle('dark');
    let isdark=body.classList.contains('dark');
    if(isdark){
        theme.textContent='Light Mode'
    }else{
        theme.textContent='Dark Mode'
    }
});
clock();

function clock(){
     let date=new Date();
    let second=date.getSeconds(),
    minute=date.getMinutes(),
    hour=date.getHours();
    secObg.style=`transform: rotate(calc(${second}*(360deg/60)));`
    minObg.style=`transform: rotate(calc(${minute}*(360deg/60)));`
    hourObg.style=`transform: rotate(calc(${hour}*30deg + (${minute}/60)*30deg));`
}

setInterval(clock,1000);



