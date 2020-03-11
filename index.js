const secondsHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.minute-hand');
const hoursHand = document.querySelector('.hour-hand');
const displayHour = document.querySelector('.displayHour');

function checkDate (current){
    return( current < 10) ? "0" + current : current; 

}

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const secondsDegrees = ((seconds/60)*360) + 90;
    const minutesDegrees = ((minutes/60)*360) +90;
    const hoursDegrees = ((hours/24)*360) +90;
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
    displayHour.innerHTML = `${checkDate (hours)}:${checkDate (minutes)}:${checkDate (seconds)}`;
    console.log(hours, minutes, seconds)
}

setInterval(setDate, 1000);