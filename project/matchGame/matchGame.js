const url = "matchGame.json"
fetch(url)
    .then(res => res.json())
    .then(data => {
        renderData(data);

    });

const game=document.getElementById("game");
const grid=document.createElement("section");
grid.setAttribute("class","grid");
let gameGrid;
//game.appendChild(grid);

function renderData(data) {
    
    data.temples.forEach((item) => {
        
        let card = document.createElement('div');
        card.classList.add("card");
        let label = document.createElement('div');
        label.classList.add("card");
        label.classList.add("center");

        //card.dataset.name = item.name;
        let round=9;
        if(item.id < round) {console.log(item.id);
        card.dataset.id=item.id;
        //card.dataset.name = item.name;
        card.name=item.name;
        label.name= item.name;
        //card.innerHTML = `<img src="${item.imageSrc}" alt="temple image">`;
        card.style.backgroundImage = `url(${item.imageSrc})`;
        label.innerText=label.name;
        grid.appendChild(card);
        grid.appendChild(label);
        game.appendChild(grid);

        }

    })
}

grid.addEventListener("click", function(event){
    let clicked = event.target;
    if (clicked.nodeName ==="SECTION"){
        return;
    
    }
    clicked.classList.add("selected");
})
let count=0;
if (count < 2){
    count++;
    clicked.classList.add("selected");
}
