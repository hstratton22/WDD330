
const statusDisplay = document.querySelector('.status');
let gameActive = true;
let curPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];

const winMess = () => `Player ${curPlayer} has won!`;
const drawMess = () => `Game ended in a draw`;
const curPlayerTurn = () => `It's ${curPlayer}'s turn`;

statusDisplay.innerHTML = curPlayerTurn();

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleSquarePlayed(clickedSquare, clickedSquareValue) {
    gameState[clickedSquareValue] = curPlayer;
    clickedSquare.innerHTML = curPlayer;
}
function handlePlayerChange() {
    curPlayer= curPlayer=== "X" ? "0" : "X";
    statusDisplay.innerHTML = curPlayerTurn();

}

function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }
    if (roundWon) {
        statusDisplay.innerHTML = winMess();
        gameActive = false;
        return;
    }
    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = drawMess();
        gameActive = false;
        return;
    }
    handlePlayerChange();
}

function handleSquareClick(clickedSquareEvent) {
    const clickedSquare = clickedSquareEvent.target;
    const clickedSquareValue = parseInt(clickedSquare.getAttribute('data-cell-index'));

    if (gameState[clickedSquareValue] !== "" || !gameActive) {
        return;
    }
    handleSquarePlayed(clickedSquare, clickedSquareValue);
    handleResultValidation();
}
function handleRestart() {
    gameActive = true;
    curPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML= curPlayerTurn();
    document.querySelectorAll('.square').forEach(square =>square.innerHTML="");

}
document.querySelectorAll('.square').forEach(square => square.addEventListener('touchend', handleSquareClick));
document.querySelectorAll('.square').forEach(square => square.addEventListener('click', handleSquareClick));

document.querySelector('.restart').addEventListener('click', handleRestart);


