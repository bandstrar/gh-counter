'use strict';

const playerArray = [
    {
    name: 'Player',
    score: 0
},
]

const buildCounter = () => {
  let domString =  ''
  

  for (let i = 0; i < playerArray.length; i++)
  domString +=      `<div class="counter--card">
                        <h3 class="counter--header">${playerArray[i].name} ${i + 1}</h3>
                        <div class="counter--value score--${i}">${playerArray[i].score}</div>
                        <div class="counter--buttons">
                            <button id="decrease--${i}">Decrease</button>
                            <button id="reset--${i}">Reset</button>
                            <button id="increase--${i}">Increase</button>
                        </div>
                    </div>`;

  printToDom('counterContainer', domString);
};

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const changeColor = () => {

    for (let i = 0; i < playerArray.length; i++) {
        if (playerArray[i].score === 0) {
            document.querySelector(`.score--${i}`).style.color = '#DAA588';
        } else if (playerArray[i].score < 0) {
            document.querySelector(`.score--${i}`).style.color = '#F56960';
        } else if (playerArray[i].score > 0) {
            document.querySelector(`.score--${i}`).style.color = '#9DCBBA';
        }
    }
}


const changeScore = (e) => {
    const target = e.target.id;

    for (let i = 0; i < playerArray.length; i++) {
        if (target === `decrease--${i}` && playerArray[i].score > 0) {
            playerArray[i].score -= 1;
        } else if (target === `increase--${i}`) {
            playerArray[i].score += 1;
        } else if (target === `reset--${i}`) {
            playerArray[i].score = 0;
        }
    }
    init();
}

const addPlayer = () => {
    playerArray.push({name: 'Player', score: 0})
    init();
}

const buttonEvent = () => {
    for (let i = 0; i < playerArray.length; i++) {
    document.querySelector(`#decrease--${i}`).addEventListener('click', changeScore);
    document.querySelector(`#increase--${i}`).addEventListener('click', changeScore);
    document.querySelector(`#reset--${i}`).addEventListener('click', changeScore);
    }
    document.querySelector('#addButton').addEventListener('click', addPlayer)
}

const init = () => {
    buildCounter();
    changeColor();
    buttonEvent();
}

init();