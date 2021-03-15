let menu=document.getElementById('menu');
let quizBtn = document.createElement('button');
let quizDiv = document.createElement('div');
let quizTimer = document.createElement('button');
let quizNoTimer = document.createElement('button');
let matchBtn = document.createElement('button');
let matchDiv = document.createElement('div');
let matchVisible = document.createElement('button');
let matchCovered = document.createElement('button');

matchVisible.classList.add('buttonCtr');
quizTimer.classList.add('buttonCtr');
quizNoTimer.classList.add('buttonCtr');
matchCovered.classList.add('buttonCtr');

quizBtn.classList.add('button');
matchBtn.classList.add('button');



//quizBtn.innerText="Quiz";
quizBtn.innerText="Quiz";
matchBtn.innerText="Matching";

quizTimer.innerHTML=`<a href="QuizT/quizT.html">Timer</a>`;
quizNoTimer.innerHTML=`<a href="templeQuiz/templeQuiz.html">No Timer</a>`;

matchVisible.innerHTML=`<a href="matchGame/index.html">Visible</a>`;
matchCovered.innerHTML=`<a href="matchGameBacks/index.html">Covered</a>`;

matchDiv.classList.add('hidden');
quizDiv.classList.add('hidden');

quizDiv.appendChild(quizTimer);
quizDiv.appendChild(quizNoTimer);
matchDiv.appendChild(matchVisible);
matchDiv.appendChild(matchCovered);



menu.appendChild(quizBtn);
menu.appendChild(quizDiv);
menu.appendChild(matchBtn);
menu.appendChild(matchDiv);

function chooseQuiz(){
    quizDiv.classList.remove('hidden');
    quizDiv.classList.add('matchDiv');
}

function chooseMatching(){
    matchDiv.classList.remove('hidden');
    matchDiv.classList.add("matchDiv");
}
quizBtn.addEventListener('click', chooseQuiz);
matchBtn.addEventListener('click', chooseMatching);
