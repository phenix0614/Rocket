// ************************************** compte a rebours ********************************************
let timer = 60;
let button;
let timelaps;
let billboard;
let disable;
let rocket;
let buttonReset={
    green:"./rocketImage/firing-button.png",
    red:"./rocketImage/cancel-button.png"
}
let rocketStart = {
    start: "./rocketImage/rocket2.gif",
    fly: "./rocketImage/rocket3.gif",
};


const main = () => {
    billboard = document.querySelector("#billboard span");
    button = document.getElementById("firing-button");
    rocket = document.getElementById("rocket");
    button.addEventListener('click', disable);
};

disable = () => {
    button.classList.add("disabled");
    rocket.src = rocketStart.start;
    timelaps();
}

timelaps = () => {
    billboard.innerText = timer;
    timer--;
    if (timer >= 0) {
        setTimeout(timelaps, 1000);
    }
    else {
        clearTimeout(timelaps);
        button.classList.remove("disabled");
        button.src=buttonReset.red;
        takeOff();
    };
};

const takeOff = () => {
    rocket.src = rocketStart.fly;
    rocket.classList.add("tookOff");
   
};


addEventListener('load', main);