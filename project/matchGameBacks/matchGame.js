import getJSON from './matchGameUtilities.js';
/*const url = "matchGame.json"
fetch(url)
    .then(res => res.json())
    .then(data => {
        renderData(data);

    });
    */


let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let start = 1;//1;
let round = 65;//9;
let delay = 600;
let matchCount=0;
let level=9;
let first=1;

const game = document.getElementById("game");
const end = document.createElement('div');
const grid = document.createElement("section");
grid.setAttribute("class", "grid");
let gameGrid = [];

async function getData() {
    const data = await getJSON();
    //return data;
    //debugger
    renderData(data);
};
getData();

function renderData(data) {
    end.classList.add('hidden');
    end.classList.add('finished');
    end.innerText="You did it!";
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    for (let i = 0; i < 15; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        end.appendChild(confetti);
    }
    game.appendChild(end);

    data.temples.forEach((item) => {

        let card = document.createElement('div');
        card.classList.add("card");
        let label = document.createElement('div');
        label.classList.add("card");
        label.classList.add("center");

        //const front = document.createElement('div');
        //front.classList.add('front');
        //const back = document.createElement('div');
        //back.classList.add('back');


        //round = 9;
        if (item.id >= start && item.id < round) {
            console.log(item.id);
            card.dataset.id = item.id;
            label.dataset.id = item.id;

            card.name = item.name;
            label.name = item.name;
            //back.st
            //card.innerHTML = `<img src="${item.imageSrc}" alt="temple image">`;
            card.style.backgroundImage = `url(${item.imageSrc})`;
            label.innerText = label.name;
            gameGrid.push(card);
            gameGrid.push(label);
            displayGrid();
            //gameGrid.sort(() => 0.5 - Math.random());
            //grid.append(gameGrid);
            // gameGrid.forEach((item) => {
            //     grid.append(item);
            // })

            //grid.appendChild(card);
            //grid.appendChild(label);
            // game.appendChild(grid);

        }

    })
}

function displayGrid() {
    let showList=[];
    grid.innerHTML="";
    //gameGrid.sort(() => 0.5 - Math.random());
    //grid.append(gameGrid);
    gameGrid.forEach((item) => {
        if (item.dataset.id>= first && item.dataset.id <level){
            item.classList.add('back');
            showList.push(item);
            
        //grid.append(item);
    }
        showList.sort(()=>0.5 - Math.random());
        showList.forEach((it)=>{
            grid.append(it);
        })
    })

    //grid.appendChild(card);
    //grid.appendChild(label);
    game.appendChild(grid);
}


const match = () => {
    const selected = document.querySelectorAll(".selected");
    selected.forEach((card) => {
        card.classList.add('match')
        card.classList.add('hide');

    });
    matchCount++;
    console.log("matchCount: "+matchCount);
    checkForLevelUp();
}

function checkForLevelUp() {
    if (matchCount == 64){
        end.classList.remove('hidden');
    }
    else if (matchCount % 8 == 0) {
        //start += 8;
        //round += 8;
        //matchCount = 0;
        first=level;
        //console.log("level-1="+(level -1));
        level+=8;
        //level+=(level -1)
        //8;
        console.log("level= "+level);
        setTimeout(displayGrid(), delay);
    }
}
const resetGuesses = () => {
    firstGuess = '';
    secondGuess = '';
    count = 0;

    const selected = document.querySelectorAll('.selected');
    selected.forEach((card) => {
        card.classList.remove('selected');
        card.classList.add('back');
    })
}

grid.addEventListener("click", function (event) {
    let clicked = event.target;

    if (clicked.nodeName === "SECTION" || clicked === previousTarget) {
        return;

    }
    clicked.classList.add("selected");
    clicked.classList.remove('back');

    if (count < 2) {
        count++;

        if (count === 1) {
            //firstGuess = clicked.dataset.name;
            firstGuess = clicked.dataset.id;
            clicked.classList.add("selected");
        } else {
            ///secondGuess = clicked.dataset.name;
            secondGuess = clicked.dataset.id;
            clicked.classList.add("selected");
        }
        if (firstGuess !== '' && secondGuess !== '') {
            if (firstGuess === secondGuess) {
                setTimeout(match, delay);
                setTimeout(resetGuesses, delay);
                //match();
                //resetGuesses();
            } else {
                setTimeout(resetGuesses, delay);
                //resetGuesses();
            }
        }
        previousTarget = clicked;
    }
})
