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
matchCovered.innerHTML=`<a href="matchGame/index.html">Covered</a>`;
//matchVisible.innerText="Visible";
matchVisible.innerHTML=`<a href="matchGameBacks/index.html">Visible</a>`;

matchDiv.classList.add('hidden');
matchDiv.appendChild(matchVisible);
matchDiv.appendChild(matchCovered);

menu.appendChild(quizBtn);
menu.appendChild(matchBtn);
menu.appendChild(matchDiv);
//menu.appendChild(matchVisible);
//menu.appendChild(matchCovered);



function chooseMatching(){
    /*matchVisible.classList.remove('hidden');
    matchVisible.classList.add('buttonCtr');
    matchCovered.classList.remove('hidden');
    matchCovered.classList.add('buttonCtr');*/
    matchDiv.classList.remove('hidden');
    matchDiv.classList.add("matchDiv");
}
matchBtn.addEventListener('click', chooseMatching );
//quizBtn.addEventListener('click', 
//})