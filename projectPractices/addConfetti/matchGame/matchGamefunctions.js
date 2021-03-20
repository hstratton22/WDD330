let firstGuess = '';
let secondGuess = '';

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

        addSelected(clicked, count);
    }
}
function addSelected(clicked, count) {
    if (count === 1) {
        firstGuess = clicked.dataset.id;
        clicked.classList.add("selected");
    } else {
        secondGuess = clicked.dataset.id;
        clicked.classList.add("selected");
    }

    checkGuess(clicked, firstGuess, secondGuess);
}

function checkGuess(clicked, firstGuess, secondGuess){
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

export default {checkForLevelUp, resetGuesses, checkCount, addSelected, checkGuess}