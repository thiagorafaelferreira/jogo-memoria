let cristalsShowed = Array();
let amountCristal = 6;
let timeBase = 1000;
let timeIntervalCallCristal = 1000;
let timeIntervalClearCristals = timeIntervalCallCristal + 500;
let timeIntervalCallGame = timeIntervalClearCristals + 500;
let level = 1;
let vezes = 0;
let posicaoTestada = 0;
let pontuacao = 0;
let bloqueiaClick = true;
let elementSelectedGlobal;
let cristalSelectedGlobal;

const start = () => {
  level = 1;
  vezes = 0;
  pontuacao = 0;
  bloqueiaClick = false;
  cristalsShowed = Array();
  cleanSelection();
  game(0);
}

const clickCristal = (cristalSelected) => {
  if(!bloqueiaClick) {
    cristalSelectedGlobal = cristalSelected;
    if(cristalSelected == cristalsShowed[posicaoTestada]) {
      if(posicaoTestada + 1 < level) {
        posicaoTestada++;
      } else {
        var div = document.getElementsByClassName("message");
        div[0].innerHTML = "Computador";
        bloqueiaClick = true;
        posicaoTestada = 0;
        vezes = 0;
        level++;
        callGame();
      }
      pontuacao += 10;
      var div = document.getElementsByClassName("points");
      div[0].innerHTML = pontuacao;
    } else {
      allSelection();
      bloqueiaClick = true;
      alert("Voce errou, jogue novamente");
    }
  }
} 

const game = () => {
  var div = document.getElementsByClassName("message");
  if(vezes < cristalsShowed.length) {
    div[0].innerHTML = "Computador";
    console.log("menor");
    callCristals(cristalsShowed[vezes]);
    clearCristals();
    callGame();
    vezes++;
  } else {
    console.log("nao menor");
    if(vezes < level) {
      div[0].innerHTML = "Computador";
      callNewCristals();
      clearCristals();
      callGame();
      vezes++;
    } else {
      bloqueiaClick = false;
      console.log(div);
      div[0].innerHTML = "Você";
    }
  } 
}

const subiuDelevel = () => level++;

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

const chooseNewCristalToShow = () => {
  let cristalNumber = Math.floor((Math.random() * amountCristal) + 1);
  let element = null;
  switch(cristalNumber) {
    case 1: 
      element = document.querySelector('[name="cristal-green"]');
      element.classList.add("cristal-green");
      break;
    case 2:
      element = document.querySelector('[name="cristal-blue"]');
      element.classList.add("cristal-blue");
      break;
    case 3:
      element = document.querySelector('[name="cristal-pink"]');
      element.classList.add("cristal-pink");
      break;
    case 4:
      element = document.querySelector('[name="cristal-grey"]');
      element.classList.add("cristal-grey");
      break;
    case 5:
      element = document.querySelector('[name="cristal-orange"]');
      element.classList.add("cristal-orange");
      break;
    case 6:
      element = document.querySelector('[name="cristal-plum"]');
      element.classList.add("cristal-plum");
      break;
  }
  adicionaCristalNaLista(element);
}

const chooseCristalToShow = (cristalSelected) => {
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

