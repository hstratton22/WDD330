let firstGuess = '';
let secondGuess = '';
let previousTarget = null;


function match(previousTarget){
    console.log("inside match");
    const selected = document.querySelectorAll(".selected");
    selected.forEach((card) => {
        card.classList.add('match')
        card.classList.add('hide');

    });
    matchCount++;
    console.log("matchCount: " + matchCount);
    //checkForLevelUp();
    tools.checkForLevelUp(matchCount);
}

function checkForLevelUp(matchCount) {
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


const resetGuesses = () => {
    firstGuess = '';
    secondGuess = '';
    count = 0;

    const selected = document.querySelectorAll('.selected');
    selected.forEach((card) => {
        card.classList.remove('selected')
    })
}

function checkCount(clicked, count) {
    if (count < 2) {
        count++;

        addSelected(clicked, count, previousTarget);
    }
}
function addSelected(clicked, count, previousTarget) {
    if (count === 1) {
        firstGuess = clicked.dataset.id;
        clicked.classList.add("selected");
    } else {
        secondGuess = clicked.dataset.id;
        clicked.classList.add("selected");
    }

    checkGuess(clicked, firstGuess, secondGuess, previousTarget);
}

function checkGuess(clicked, firstGuess, secondGuess, previousTarget){
    if (firstGuess !== '' && secondGuess !== '') {
        if (firstGuess === secondGuess) {
            setTimeout(match(previousTarget), delay);
            setTimeout(resetGuesses, delay);

        } else {
            setTimeout(resetGuesses, delay);
        }
    }
    previousTarget = clicked;
}

export default {match, checkForLevelUp, resetGuesses, checkCount, addSelected, checkGuess}