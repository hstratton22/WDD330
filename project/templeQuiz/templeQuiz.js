const url="templeQuiz.json";

fetch(url)
.then(result => result.json())
.then(quiz => {
    view.start.addEventListener('click', () => game.start(quiz.questions), false);
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
        this.show(this.respons);
        this.show(this.result);
        this.hide(this.start);
        this.render(this.result, "");
        
    },
    teardown(){
        this.hide(this.question);
        this.hide(this.response);
        this.show(this.start);
        
    }, buttons(array){
        return array.map(value => `<button>${value}</button`).join('');

    }
};

const game= {
    start(quiz){
        this.score = 0;
        this.questions = [...quiz];
        view.setup();
        this.ask();
    },
    ask(name){
        if(this.questions.length >2){
            shuffle(this.question);
            this.question= this.quesiton.pop();
           // const options = [this.questions[0].name, this.temples[1].name, this.temples.name];
        }
    }
    
}