const apiButton = document.getElementById('ships');
const outputDiv = document.getElementById('output');
const apiURL = "https://swapi.dev/api/starships/";

apiButton.addEventListener('click', () => {
    fetch(apiURL)
        .then(response => {
            outputDiv.innerHTML = 'Waiting for response...';
            if (response.ok) {
                return response;
            }
            throw Error(response.statusText);
        })
        .then(response => response.json())
        //.then( data => outputDiv.innerText = data.value )
        //.then(data => console.log(data))
        .then(function (data) {
            appendData(data);
        })
        .catch(error => console.log('There was an error:', error))
}, false);

function appendData(data) {
    
    //console.log("inside function");
    for (let i = 0; i < data.results.length; i++) {
        let div = document.createElement("div");
        div.classList.add("detailShip");

        div.innerHTML = "Name: " + data.results[i].name;
        const detailBtn = document.createElement('button');
        detailBtn.innerText="Details";
        detailBtn.classList.add("detailBtn");

        //detailBtn.onclick=getDetails(data.results);
        detailBtn.onclick=()=>{
            div.innerHTML+=`<li>model: ${data.results[i].model}`;
            div.innerHTML+=`<li>manufacturer: ${data.results[i].manufacturer}`;
            div.innerHTML+=`<li>cost in credits: ${data.results[i].cost_in_credits}`;
            div.innerHTML+=`<li>length: ${data.results[i].length}`;
            div.innerHTML+=`<li>hyperdrive: ${data.results[i].hyperdrive_rating}`;
            div.innerHTML+=`<li>starship class: ${data.results[i].starship_class}`;
        }
        outputDiv.appendChild(div);
        outputDiv.appendChild(detailBtn);
    }
    let nextBtn = document.createElement('button');
    let prevBtn = document.createElement('button');
    prevBtn.innerText="previous";
    nextBtn.innerText = "next";
    
    let nextURL = data.next;
    console.log("next: " +nextURL)

    let prevURL= data.previous;
    console.log("prev: "+ prevURL);

    outputDiv.appendChild(prevBtn);
    outputDiv.appendChild(nextBtn);

    prevBtn.addEventListener('click', () => {
        fetch(prevURL)
            .then(response => {
                outputDiv.innerHTML = 'Waiting for response...';
                if (response.ok) {
                    return response;
                }
                throw Error(response.statusText);
            })
            .then(response => response.json())
            //.then( data => outputDiv.innerText = data.value )
            //.then(data => console.log(data))
            .then(function (data) {
                appendData(data);
            })
            .catch(error => console.log('There was an error:', error))
    }, false);

    nextBtn.addEventListener('click', () => {

        //}


        fetch(nextURL)
            .then(response => {
                outputDiv.innerHTML = 'Waiting for response...';
                if (response.ok) {
                    return response;
                }
                throw Error(response.statusText);
            })
            .then(response => response.json())
            //.then( data => outputDiv.innerText = data.value )
            //.then(data => console.log(data))
            .then(function (data) {
                appendData(data);
            })
            .catch(error => console.log('There was an error:', error))
    }, false);

}
function getDetails(list){
    console.log(list.model);
}

//or async
/*
async function getData()
        {
            //await the response of the fetch call
           let response = await fetch('https://swapi.dev/api/starships/');
            //proceed once the first promise is resolved.
           let data = await response.json()
            //proceed only when the second promise is resolved
            return data;
        }
//call getData function
getData()
.then(data => console.log(data));//log the data
*/



