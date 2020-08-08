'use strict';

const playerArray = [
    {
    name: 'Player',
    health: 0,
    exp: 0
},
]

const buildCounter = () => {
  let domString =  ''
  

  for (let i = 0; i < playerArray.length; i++) {
  domString +=      `<div class="counter--card">
                        <h3 class="counter--header">${playerArray[i].name}</h3>
                        <div class="health-exp--container">
                            <div class="counter--value health--${i}">${playerArray[i].health}</div>
                            <div class="counter--image"><img src="./images/01 Brute.png"></div>
                            <div class="exp--value exp--${i}">${playerArray[i].exp}</div>
                        </div>
                        <div class="counter-buttons--container">
                        <div class="counter--buttons">
                            <button id="decrease-health--${i}">Decrease</button>
                            <button id="reset-health--${i}">Reset</button>
                            <button id="increase-health--${i}">Increase</button>
                        </div>
                        <div class="counter--buttons">
                            <button id="decrease-exp--${i}">Decrease</button>
                            <button id="reset-exp--${i}">Reset</button>
                            <button id="increase-exp--${i}">Increase</button>
                        </div>
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
        if (playerArray[i].health > 5) {
            document.querySelector(`.health--${i}`).style.color = '#9DCBBA';
        } else if (playerArray[i].health >= 0 && playerArray[i].health <= 5) {
            document.querySelector(`.health--${i}`).style.color = '#F56960';
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

const changeHealth = (e) => {
    const target = e.target.id;

    for (let i = 0; i < playerArray.length; i++) {
        if (target === `decrease-health--${i}` && playerArray[i].health > 0) {
            playerArray[i].health -= 1;
        } else if (target === `increase-health--${i}`) {
            playerArray[i].health += 1;
        } else if (target === `reset-health--${i}`) {
            playerArray[i].health = 0;
        }
    }
    init();
}
const changeExp = (e) => {
    const target = e.target.id;

    for (let i = 0; i < playerArray.length; i++) {
        if (target === `decrease-exp--${i}` && playerArray[i].exp > 0) {
            playerArray[i].exp -= 1;
        } else if (target === `increase-exp--${i}`) {
            playerArray[i].exp += 1;
        } else if (target === `reset-exp--${i}`) {
            playerArray[i].exp = 0;
        }
    }
    init();
}

const addPlayer = () => {
    playerArray.push({name: 'Player', health: 0, exp: 0})
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
    document.querySelector(`#decrease-health--${i}`).addEventListener('click', changeHealth);
    document.querySelector(`#increase-health--${i}`).addEventListener('click', changeHealth);
    document.querySelector(`#reset-health--${i}`).addEventListener('click', changeHealth);
    document.querySelector(`#decrease-exp--${i}`).addEventListener('click', changeExp);
    document.querySelector(`#increase-exp--${i}`).addEventListener('click', changeExp);
    document.querySelector(`#reset-exp--${i}`).addEventListener('click', changeExp);
    document.querySelector(`#remove--${i}`).addEventListener('click', removePlayer);
    }
}

const init = () => {
    buildCounter();
    changeColor();
    buttonEvent();
}

init();