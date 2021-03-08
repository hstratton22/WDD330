import { random, shuffle } from './utilities.js';

const view = {
    score: document.querySelector('#score strong'),
    question: document.querySelector('#question'),
    result: document.querySelector('#result'),
    info: document.querySelector('#info'),
    start: document.querySelector('#start'),
    response: document.querySelector('#response'),
    timer: document.querySelector('#timer strong'),
    hiScore: document.querySelector('#hiScore strong'),
    render(target,content,attributes) {
        for(const key in attributes) {
          target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    },
    show(element){
      element.style.display = 'block';
    },
    hide(element){
      element.style.display = 'none';
    },
    setup(){
      this.show(this.question);
      this.show(this.response);
      this.show(this.result);
      this.hide(this.start);
      this.render(this.score,game.score);
      this.render(this.result,'');
      this.render(this.info,'');
      this.render(this.hiScore, game.hiScore());
    },
    teardown(){
      this.hide(this.question);
      this.hide(this.response);
      this.show(this.start);
      this.render(this.hiScore, game.hiScore());
    },
    buttons(array){
      return array.map(value => `<button>${value}</button>`).join('');
    }
  };
  
  const game = {
    start(quiz){
      console.log('start() invoked');
      this.score = 0;
      this.temples = [...quiz];
      view.setup();
      this.secondsRemaining = 40;
      this.timer = setInterval( this.countdown , 1000 );
      this.ask();
    },
    countdown() {
      game.secondsRemaining--;
      view.render(view.timer,game.secondsRemaining);
        if(game.secondsRemaining <= 0) {
          game.gameOver();
        }
    },
    ask(name){
      //console.log('ask() invoked');
      if(this.temples.length > 2) {
        shuffle(this.temples);
        this.question = this.temples.pop();
        const options = [this.temples[0].name, this.temples[1].name, this.question.name];
        shuffle(options);
        
        const questionImage = `<img src="${this.question.imageSrc}" alt="temple image">`;
        
        //console.log(this.question.imageSrc);
        
        view.render(view.question,questionImage);
        view.render(view.response,view.buttons(options));
      }
      else {
        this.gameOver();
      }
    },
    check(event){
      //console.log('check(event) invoked');
      const response = event.target.textContent;
      const answer = this.question.name;
      if(response === answer){
        console.log('correct');
        view.render(view.result,'Correct!',{'class':'correct'});
        this.score++;
        view.render(view.score,this.score);
      } else {
        console.log('wrong');
        view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
      }
      this.ask();
    },
    gameOver(){
      console.log('gameOver() invoked');
      view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
      view.teardown();
      clearInterval(this.timer);
    },
    hiScore(){
      const hi = localStorage.getItem('highScore') || 0;
      if(this.score > hi || hi === 0) {
        localStorage.setItem('highScore',this.score);
        view.render(view.info,'** NEW HIGH SCORE! **');
      }
      return localStorage.getItem('highScore');
    }
  };
  export {
      view, game
  }