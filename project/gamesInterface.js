let menu=document.getElementById('menu');
let quizBtn = document.createElement('button');
let matchBtn = document.createElement('button');
let matchDiv = document.createElement('div');
let matchVisible = document.createElement('button');
let matchCovered = document.createElement('button');

matchVisible.classList.add('buttonCtr');
//matchVisible.classList.add('hidden')
matchCovered.classList.add('buttonCtr');
//matchCovered.classList.add('hidden');
quizBtn.classList.add('button');
matchBtn.classList.add('button');



//quizBtn.innerText="Quiz";
quizBtn.innerHTML=`<a href="QuizT/quizT.html">Quiz</a>`;
matchBtn.innerText="Matching";
//matchCovered.innerText="Covered";
matchVisible.innerHTML=`<a href="matchGame/index.html">Visible</a>`;
//matchVisible.innerText="Visible";
matchCovered.innerHTML=`<a href="matchGameBacks/index.html">Covered</a>`;

matchDiv.classList.add('hidden');
matchDiv.appendChild(matchVisible);
matchDiv.appendChild(matchCovered);

menu.appendChild(quizBtn);
menu.appendChild(matchBtn);
menu.appendChild(matchDiv);

function chooseMatching(){
    matchDiv.classList.remove('hidden');
    matchDiv.classList.add("matchDiv");
}
matchBtn.addEventListener('click', chooseMatching);
