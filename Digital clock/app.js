var time = () => {
var date = new Date();
var hours = date.getHours() % 12 || 12;
var minutes = date.getMinutes();
var seconds = date.getSeconds();
const ampm = hours >= 12 ? 'am' : 'pm';
if (minutes < 10) {
    minutes = '0' + minutes;
} else {
    minutes = minutes;
}

if (seconds < 10) {
    seconds = '0' + seconds;
} else {
    seconds = seconds;
}
var conatiner = document.querySelector(".main");
conatiner.innerHTML = `
<div class="time">${hours} : ${minutes} : ${seconds} ${ampm}</div>
`
setInterval(time,1000)
} 
time();
