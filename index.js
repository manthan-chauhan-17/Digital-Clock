const time = document.getElementById("time");
const timeFormat = document.getElementById("timeFormat");

setInterval(displayTime, 1000);

function displayTime() {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    // To not get messy 1 digit look in clock
    hours = hours<10 ? `0${hours}`: hours;
    minutes = minutes<10 ? `0${minutes}`: minutes;
    seconds = seconds<10 ? `0${hours}`: seconds;

    time.innerHTML = `${hours}:${minutes}:${seconds}`;
    timeFormat.innerHTML = hours < 12 ? "AM" : "PM";

}