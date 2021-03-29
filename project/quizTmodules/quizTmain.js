import {view, game} from './quizTquiz.js';
//modified from Ninja Quiz from Novice to Ninja

const url="quizTmodules.json";
fetch(url)
.then(res => res.json())
.then(quiz => {
    view.start.addEventListener('click', () => game.start(quiz.temples), false);
    view.response.addEventListener('click', (event) => game.check(event), false);
})