const secHandle = document.querySelector(".second-hand")
const minHandle = document.querySelector(".min-hand")
const hourHandle = document.querySelector(".hour-hand")

function getDate(){
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes =date.getMinutes();
    const hours = date.getHours();

    const secDeg = ((seconds/60)*360)+90;
    const minDeg = ((minutes/60)*360)+90;
    const hourDeg = ((hours/12)*360)+90;

    secHandle.style.transform=`rotate(${secDeg}deg)`;
    minHandle.style.transform=`rotate(${minDeg}deg)`;
    hourHandle.style.transform=`rotate(${hourDeg}deg)`;


}
setInterval(getDate,1000)