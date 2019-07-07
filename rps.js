const randomNum = Math.floor((Math.random() * 3) + 1);
const sharkButton = document.getElementById("sharkButton");
const manateeButton = document.getElementById("manateeButton");
const humanButton = document.getElementById("humanButton");
const results = document.querySelector(".results");
const playerSharkMessage = document.createElement('p');
const playerManateeMessage = document.createElement('p');
const playerHumanMessage = document.createElement('p');
const computerSharkMessage = document.createElement('p');
const computerManateeMessage = document.createElement('p');
const computerHumanMessage = document.createElement('p');
const sameMessage = document.createElement('h2');
const sharkWinMessage = document.createElement('h2');
const sharkLoseMessage = document.createElement('h2');
const manateeWinMessage = document.createElement('h2');
const manateeLoseMessage = document.createElement('h2');
const humanWinMessage = document.createElement('h2');
const humanLoseMessage = document.createElement('h2');
const button = document.querySelector('.button');
let playerResult = "";
let computerResult = "";


playerSharkMessage.textContent = "You chose shark!";
playerManateeMessage.textContent = "You chose manatee!";
playerHumanMessage.textContent = "You chose human!";
computerSharkMessage.textContent = "I chose shark!";
computerManateeMessage.textContent = "I chose manatee!";
computerHumanMessage.textContent = "I chose human!";
sameMessage.textContent = "Samesies! Refresh the page and try again."
sharkWinMessage.textContent = "Shark eats human. You win!"
sharkLoseMessage.textContent = "Manatee gazes lovingly into Shark's eyes until dead. You lose!"
manateeWinMessage.textContent = "Manatee gazes lovingly into Shark's eyes until dead. You win!"
manateeLoseMessage.textContent = "Manitee's habitat is slowly decimated by Rick Scott.  You lose!"
humanWinMessage.textContent = "Manitee's habitat is slowly decimated by Rick Scott. You win!"
humanLoseMessage.textContent = "Shark eats human. You lose!"


function playRound () {
    function computerPlay() {
        if (randomNum === 1) {
            results.appendChild(computerSharkMessage);
        } else if (randomNum === 2) {
            results.appendChild(computerManateeMessage);
        } else {
            results.appendChild(computerHumanMessage);
        }
    }
    sharkButton.addEventListener('click', (e) => {
        results.appendChild(playerSharkMessage);
        let playerResult = 1;
        computerPlay();
        button.style.display = "none";
        if (randomNum === playerResult) {
            results.appendChild(sameMessage);
        } else if (randomNum === 2) {
            results.appendChild(sharkLoseMessage);
        } else if (randomNum === 3) {
            results.appendChild(sharkWinMessage);
        }
    });
    manateeButton.addEventListener('click', (e) => {
        results.appendChild(playerManateeMessage);
        let playerResult = 2;
        computerPlay();
        button.style.display = "none";
        if (randomNum === playerResult) {
            results.appendChild(sameMessage);
        } else if (randomNum === 1) {
            results.appendChild(manateeWinMessage);
        } else if (randomNum === 3) {
            results.appendChild(manateeLoseMessage);
        }
    });
    humanButton.addEventListener('click', (e) => {
        results.appendChild(playerHumanMessage);
        let playerResult = 3;
        computerPlay();
        button.style.display = "none";
        if (randomNum === playerResult) {
            results.appendChild(sameMessage);
        } else if (randomNum === 1) {
            results.appendChild(humanLoseMessage);
        } else if (randomNum === 2) {
            results.appendChild(humanWinMessage);
        }
    });
}

playRound();




