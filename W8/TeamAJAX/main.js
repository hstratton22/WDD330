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

        div.innerHTML = "Name: " + data.results[i].name;
        outputDiv.appendChild(div);
    }
    let nextBtn = document.createElement('button');
    let prevBtn = document.createElement('button');
    prevBtn.innerText="previous";
    nextBtn.innerText = "next";
    let nextURL = data.next;
    let prevURL= data.previous;
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



