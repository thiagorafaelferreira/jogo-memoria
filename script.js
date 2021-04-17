let cristalsShowed = Array();
let amountCristal = 6;
let timeBase = 1000;
let timeIntervalCallCristal = 1000;
let timeIntervalClearCristals = timeIntervalCallCristal + 500;
let timeIntervalCallGame = timeIntervalClearCristals + 500;
let level = 1;
let times = 0;
let testPosition = 0;
let points = 0;
let blockClick = true;
let elementSelectedGlobal;
let cristalSelectedGlobal;

const numberColor = {
  1: "cristal-green",
  2: "cristal-blue",
  3: "cristal-pink",
  4: "cristal-grey",
  5: "cristal-orange",
  6: "cristal-plum"
}

const start = () => {
  level = 1;
  times = 0;
  points = 0;
  blockClick = false;
  cristalsShowed = Array();
  cleanSelection();
  game(0);
}

const subiuDelevel = () => level++;
const fillMessage = (message) => document.getElementsByClassName("message")[0].innerHTML = message;
const fillPoints = () => { points += 10; document.getElementsByClassName("points")[0].innerHTML = points; }

const clickCristal = (cristalSelected) => {
  if(!blockClick) {
    cristalSelectedGlobal = cristalSelected;
    if(cristalSelected == cristalsShowed[testPosition]) {
      if(testPosition + 1 < level) {
        testPosition++;
      } else {
        fillMessage("Computador");
        blockClick = true;
        testPosition = 0;
        times = 0;
        subiuDelevel();
        callGame();
      }
      fillPoints();
    } else {
      allSelection();
      blockClick = true;
      alert("Voce errou, jogue novamente");
    }
  }
} 

const gameSteps = () => {
  clearCristals();
  callGame();
  times++;
}

const game = () => {
  var div = document.getElementsByClassName("message");
  fillMessage("Computador");
  if(times < cristalsShowed.length) {
    callCristals(cristalsShowed[times]);
    gameSteps();
  } else {
    if(times < level) {
      callNewCristals();
      gameSteps();
    } else {
      blockClick = false;
      fillMessage("Você");
    }
  } 
}

const cleanSelection = () => {
  var div = document.getElementsByClassName("cristal");
  var children = div[0].children;
  for (var index in [...Array(children.length).keys()]) {
    children[index].classList.remove("cristal-green");
    children[index].classList.remove("cristal-pink");
    children[index].classList.remove("cristal-orange");
    children[index].classList.remove("cristal-blue");
    children[index].classList.remove("cristal-grey");
    children[index].classList.remove("cristal-plum");
  }
}

const allSelection = () => {
  var div = document.getElementsByClassName("cristal");
  var children = div[0].children;
  for (var index in [...Array(children.length).keys()]) {
    console.log(children[index].getAttribute("name"));
    if(children[index].getAttribute("name") == "cristal-green")
      children[index].classList.add("cristal-green");
    if(children[index].getAttribute("name") == "cristal-pink")
      children[index].classList.add("cristal-pink");
    if(children[index].getAttribute("name") == "cristal-orange")
      children[index].classList.add("cristal-orange");
    if(children[index].getAttribute("name") == "cristal-blue")
      children[index].classList.add("cristal-blue");
    if(children[index].getAttribute("name") == "cristal-grey")
    children[index].classList.add("cristal-grey");
    if(children[index].getAttribute("name") == "cristal-plum")
      children[index].classList.add("cristal-plum");
  }
}

const cristalSelection = (cristalSelected) => {
  let element = null;
  switch(cristalSelected) {
    case "cristal-green": 
      element = document.querySelector('[name="cristal-green"]');
      element.classList.add("cristal-green");
      break;
    case "cristal-blue":
      element = document.querySelector('[name="cristal-blue"]');
      element.classList.add("cristal-blue");
      break;
    case "cristal-pink":
      element = document.querySelector('[name="cristal-pink"]');
      element.classList.add("cristal-pink");
      break;
    case "cristal-grey":
      element = document.querySelector('[name="cristal-grey"]');
      element.classList.add("cristal-grey");
      break;
    case "cristal-orange":
      element = document.querySelector('[name="cristal-orange"]');
      element.classList.add("cristal-orange");
      break;
    case "cristal-plum":
      element = document.querySelector('[name="cristal-plum"]');
      element.classList.add("cristal-plum");
      break;
  }
  return element;
}

const chooseNewCristalToShow = () => {
  let cristalNumber = Math.floor((Math.random() * amountCristal) + 1);
  let element = cristalSelection(numberColor[cristalNumber]);
  adicionaCristalNaLista(element);
}

const chooseCristalToShow = (cristalSelected) => {
  cristalSelection(cristalSelected);
}

const adicionaCristalNaLista = (element) => {
  cristalsShowed.push(element.getAttribute("name"));
}

const callNewCristals = () => {
  setTimeout(chooseNewCristalToShow, timeIntervalCallCristal);
}

const callCristals = (param) => {
  setTimeout(chooseCristalToShow(param), timeIntervalCallCristal);
}

const clearCristals = () => {
  setTimeout(cleanSelection, timeIntervalClearCristals);
}

const callGame = () => {
  setTimeout(game, timeIntervalCallGame);
}

