//problem with line7
const url="templeQuiz.json";

fetch(url)
.then(result => result.json())
.then(quiz => {
    view.start.addEventListener('click', () => game.start(quiz.temples), false);
    //view.start.addEventListener('click', () => game.start(quiz.temples), false);
    view.response.addEventListener('click', (event)=> game.check(event), false);

});

function random(a, b =1){
    if (b === 1) {
        [a, b] = [b, a];
    }
    return Math.floor((b-a+1)* Math.random())+a;
}
function shuffle(array){
    for (let i = array.length; i; i--){
        let j = random(i)-1;
        [array][i-1], array[j]= [array[j], array[i -1]];
    }
}

const view = {
    question: document.querySelector("#tImage"),
    result: document.querySelector("result"),
    response:document.querySelector("response"),
    render(target, content, attributes){
        for(const key in attributes){
            target.setAttributes(key, attributes[key]);
        }
        target.innerHTML= content;
    },
    show(element){
        element.style.display= "block";
    },
    hide(element){
        element.style.display = "none";
    }, 
    setup(){
        this.show(this.question);
        this.show(this.response);
        this.show(this.result);
        this.hide(this.start);
        this.render(this.result, "");
        
    },
    teardown(){
        this.hide(this.question);
        this.hide(this.response);
        this.show(this.start);
        
    }, 
    buttons(array){
        return array.map(value => `<button>${value}</button`).join('');

    }
};

const game= {
    start(quiz){
        //this.score = 0;
        console.log("in start");
        this.temples = [...quiz];
        view.setup();
        this.ask();
    },
    ask(name){
        if(this.temples.length >2){
            shuffle(this.temples);
            this.question= this.temples.pop();
            const options = [this.temples[0].name, this.temples[1].name, this.question.name];
            shuffle(options);

            const questionImage = `<img src="${this.question.imageSrc}" alt="temple image">`;

            view.render(view.question,questionImage);
            view.render(view.response, view.buttons(options));

        }
        else {
            this.gameOver();
        }
    },
    check(event){
        const response=event.target.textContent;
        const answer = this.question.name;
        if(response === answer){
            console.log('correct');
            view.render(view.result, 'Correct!',{'class':'correct'});
            this.score++;
            view.render(view.score, this.score);
        } else {
            console.log('wrong');
            view.render(view.result,`Wrong! The correct answer was ${answer}`, {'class':'wrong'});

        }
        this.ask();
    },
    gameOver(){
        console.log('in gameOver');
        view.teardown();

    }
    
}