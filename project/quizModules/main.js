import { view, game } from './quiz.js';

const url ="quiz.json"
fetch(url)
  .then(res => res.json())
  .then(quiz => {
    view.start.addEventListener('click', () => game.start(quiz.temples), false);
    view.response.addEventListener('click', (event) => game.check(event), false);
});