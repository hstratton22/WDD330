import { random, shuffle } from './templeQuizutilities.js';

const view = {
    score: document.querySelector('#score strong'),
    question: document.querySelector('#tImage'),
    result: document.querySelector('#result'),
    info: document.querySelector('#info'),
    start: document.querySelector('#start'),
    response: document.querySelector('#response'),
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
    },
    teardown(){
      this.hide(this.question);
      this.hide(this.response);
      this.show(this.start);
    },
    buttons(array){
      return array.map(value => `<button>${value}</button>`).join('');
    }
  };
  
  const game = {
    start(quiz){
      this.score = 0;
      this.temples = [...quiz];
      view.setup();
      this.ask();
    },
  
    ask(name){
      if(this.temples.length > 2) {
        shuffle(this.temples);
        this.question = this.temples.pop();
        const options = [this.temples[0].name, this.temples[1].name, this.question.name];
        shuffle(options);
        
        const questionImage = `<img src="${this.question.imageSrc}" alt="temple image">`;
        
        view.render(view.question,questionImage);
        view.render(view.response,view.buttons(options));
      }
      else {
        this.gameOver();
      }
    },
    check(event){
      const response = event.target.textContent;
      const answer = this.question.name;
      if(response === answer){
        view.render(view.result,'Correct!',{'class':'correct'});
        this.score++;
        view.render(view.score,this.score);
      } else {
        view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
      }
      this.ask();
    },
    gameOver(){
      view.render(view.info,`Game Over`);
      view.teardown();
     
    } 
  }
  export { view, game }