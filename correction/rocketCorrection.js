
/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/

const RocketStatus = {
  START: "images/rocket2.gif",
  FLY: "images/rocket3.gif",
};

const INITIAL_COUNTER = 10;

let btn;
let rocket;
let billboard;
let counter = INITIAL_COUNTER;

/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/

const main = () => {
  rocket = document.getElementById("rocket");
  btn = document.getElementById("firing-button");
  billboard = document.querySelector("#billboard span");

  btn.addEventListener("click", handleStart);
};

const handleStart = () => {
  if (counter < INITIAL_COUNTER) return;
  disableBtn();
  changeRocketStatus(RocketStatus.START);
  startCounter();
};

const startCounter = () => {
  billboard.innerText = counter;
  counter--;
  // counter >= 0 ? setTimeout(startCounter, 1000) : letsGOO();
  if (counter >= 0) {
    setTimeout(startCounter, 1000);
  } else {
    letsGOO();
  }
};

const letsGOO = () => {
  changeRocketStatus(RocketStatus.FLY);
  rocket.classList.add("tookOff");
};

const disableBtn = () => btn.classList.add("disabled");
const changeRocketStatus = (status) => (rocket.src = status);

/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/

addEventListener("load", main);