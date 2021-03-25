import getJSON from './matchGameUtilities.js';

let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let start = 1;
let round = 65;
let delay = 600;
let matchCount = 0;
let level = 9;
let first = 1;

const game = document.getElementById("game");
const end = document.createElement('div');
const grid = document.createElement("section");
grid.setAttribute("class", "grid");
let gameGrid = [];

async function getData() {
    const data = await getJSON();
    renderData(data);
};
function buildFinished(){
    end.classList.add('hidden');
    end.classList.add('finished');
    end.innerText = "You did it!";
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    for (let i = 0; i < 15; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        end.appendChild(confetti);
    }
    game.appendChild(end);
}
function renderData(data) {
    buildFinished();

    data.temples.forEach((item) => {

        let card = document.createElement('div');
        card.classList.add("card");
        let label = document.createElement('div');
        label.classList.add("card");
        label.classList.add("center");

        if (item.id >= start && item.id < round) {
            console.log(item.id);
            card.dataset.id = item.id;
            label.dataset.id = item.id;

            card.name = item.name;
            label.name = item.name;
            //card.innerHTML = `<img src="${item.imageSrc}" alt="temple image">`;
            card.style.backgroundImage = `url(${item.imageSrc})`;
            label.innerText = label.name;
            gameGrid.push(card);
            gameGrid.push(label);
            displayGrid();
        }
    })
}

function displayGrid() {
    let showList = [];
    grid.innerHTML = "";
    
    gameGrid.forEach((item) => {
        if (item.dataset.id >= first && item.dataset.id < level) {
            item.classList.add('back');
            showList.push(item);
        }
        showList.sort(() => 0.5 - Math.random());
        showList.forEach((it) => {
            grid.append(it);
        })
    })

    game.appendChild(grid);
}

function match(){
    const selected = document.querySelectorAll(".selected");
    selected.forEach((card) => {
        card.classList.add('match')
        card.classList.add('hide');

    });
    matchCount++;
    console.log("matchCount: " + matchCount);
    checkForLevelUp();
}

function checkForLevelUp() {
    if (matchCount == 64) {
        end.classList.remove('hidden');
    }
    else if (matchCount % 8 == 0) {
        first = level;
        level += 8;
        console.log("level= " + level);
        setTimeout(displayGrid(), delay);
    }
}
function resetGuesses(){
    firstGuess = '';
    secondGuess = '';
    count = 0;

    const selected = document.querySelectorAll('.selected');
    selected.forEach((card) => {
        card.classList.remove('selected');
        card.classList.add('back');
    })
}
function checkCount(clicked) {
    if (count < 2) {
        count++;
        addSelected(clicked);
    }
}

function addSelected(clicked) {
    if (count === 1) {
        firstGuess = clicked.dataset.id;
        clicked.classList.add("selected");
    } else {
        secondGuess = clicked.dataset.id;
        clicked.classList.add("selected");
    }
    checkGuess(clicked, firstGuess, secondGuess);

}
function checkGuess(clicked, firstGuess, secondGuess) {
    if (firstGuess !== '' && secondGuess !== '') {
        if (firstGuess === secondGuess) {
            setTimeout(match, delay);
            setTimeout(resetGuesses, delay);
        } else {
            setTimeout(resetGuesses, delay);
        }
    }
    previousTarget = clicked;
}


grid.addEventListener("click", function (event) {
    let clicked = event.target;

    if (clicked.nodeName === "SECTION" || clicked === previousTarget) {
        return;

    }
    clicked.classList.remove('back');
    checkCount(clicked);

});
window.addEventListener('load', getData());

