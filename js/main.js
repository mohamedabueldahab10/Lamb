var demoElement = document.getElementById("demo");
var imgElement = document.getElementById("img");
var turnOnOffBtn = document.getElementById("turnOnOffBtn");

function turnOn() {
    demoElement.style.backgroundColor = "red";
    imgElement.src = "images/pic_bulbon.gif"
    turnOnOffBtn.innerHTML = "Turn off"
}

function turnOff() {
    demoElement.style.backgroundColor = "yellow";
    imgElement.src = "images/pic_bulboff.gif"
    turnOnOffBtn.innerHTML = "Turn on"
}

function turnOnOff() {
    if (turnOnOffBtn.innerHTML == "Turn off") {
        turnOff()
    } else {
        turnOn()
    }
}














