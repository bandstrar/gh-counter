'use strict';

const playerArray = [
    {
    name: 'Player',
    score: 0
},
]

const buildCounter = () => {
  let domString =  ''
  

  for (let i = 0; i < playerArray.length; i++) {
  domString +=      `<div class="counter--card">
                        <h3 class="counter--header">${playerArray[i].name}</h3>
                        <div class="counter--value score--${i}">${playerArray[i].score}</div>
                        <div class="counter--buttons">
                            <button id="decrease--${i}">Decrease</button>
                            <button id="reset--${i}">Reset</button>
                            <button id="increase--${i}">Increase</button>
                        </div>
                        <div class="submit--name">
                            <input type="text" id="player-submit--${i}" placeholder="Player Name">
                            <button type="submit" class="name--button" id="player-button--${i}">Submit Name</button>
                        </div>
                        <div class="remove--player">
                            <button id="remove--${i}" type="button">Remove Player</button>
                        </div>
                    </div>`;
  }

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

const changeName = (e) => {
    const target = e.target.id;

    for (let i = 0; i < playerArray.length; i++) {
        if (target === `player-button--${i}`) {
            const name = document.querySelector(`#player-submit--${i}`).value;
            playerArray[i].name = name;
        }
    }
    init();
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

const removePlayer = (e) => {
    const ctype = e.target.type;
    const target = e.target.id;
    if (ctype === 'button') {
        playerArray.splice(target, 1);
        init();
    }
}

const buttonEvent = () => {
    document.querySelector('#addButton').addEventListener('click', addPlayer);
    for (let i = 0; i < playerArray.length; i++) {
    document.querySelector(`#player-button--${i}`).addEventListener('click', changeName);
    document.querySelector(`#decrease--${i}`).addEventListener('click', changeScore);
    document.querySelector(`#increase--${i}`).addEventListener('click', changeScore);
    document.querySelector(`#reset--${i}`).addEventListener('click', changeScore);
    document.querySelector(`#remove--${i}`).addEventListener('click', removePlayer);
    }
}

const init = () => {
    buildCounter();
    changeColor();
    buttonEvent();
}

init();