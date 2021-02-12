/*
fetch('https://example.com/data')
.then( // code that handles the response )
.catch( // code that runs if the server returns an error )
//As you can see, the fetch() method returns a promise that resolves to the 
response returned from the URL that was provided as an argument. In the example above, 
the promise will be resolved when a response is received from the URL 'https:example.com/data'. 
Because it’s a promise, we can also use a catch statement at the end to deal with any errors that may occur.
*/
/*

const url = 'https:example.com/data';
fetch(url)
    .then((response) => {
        if (response.ok) {
            return response;
        }
        throw Error(response.statusText);
    })
    .then(response => )// do something with response 
        
.catch(error => console.log('There was an error!'))*/

//redirect
//not supported in any browser
/*
fetch(url)
.then( response => response.redirect(newURL)); // redirects to another URL
.then( // do something else )
.catch( error => console.log('There was an error: ', error))
*/

//text response
/*
fetch(url)
.then( response => response.text() ); // transforms the text stream into a JavaScript string
.then( text => console.log(text) )
.catch( error => console.log('There was an error: ', error))
*/
//file Responses
//blob()
/*
fetch(url)
.then( response => response.blob() ); // transforms the data into a blob object
.then( blob => console.log(blob.type) )
.catch( error => console.log('There was an error: ', error))
*/

//JSON response
/*
fetch(url)
.then( response => response.json() ); // transforms the JSON data into a JavaScript object
.then( data => console.log(Object.entries(data)) )
.catch( error => console.log('There was an error: ', error))
*/
//creating reponse objects
/*The first argument is the data that is to be returned (for example a text stream, file or JSON data). 
The second argument is an object that can be used to provide values for any of the properties listed above.
*/
/*
const response = new Response( 'Hello!', {
    ok: true,
    status: 200,
    statusText: 'OK',
    type: 'cors',
    url: '/api'
});
*/
//Request interface
/*
const request = new Request('https://example.com/data', {
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
    cache: 'no-cache'
});
*/
//Once the Request object is assigned to a variable, it can then be 
//used as the parameter of the fetch() method:
/*
fetch(request)
.then( // do something with the response )
.catch( // handle any errors)
*/

//or write like this
/*
fetch('https://example.com/data', {
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
    cache: 'no-cache'
})
.then( // do something with the response )
.catch( // handle any errors)*/


//headers
//const headers = new Headers();
//or
//const headers = new Headers({ 'Content-Type': 'text/plain', 'Accept-Charset' : 'utf-8', 'Accept-Encoding':'gzip,deflate' })

//has() used to check if contains
//headers.has('Content-Type');//true

//get() returns value of header provided 
//headers.get("Content-Type")//'text/plain'

//set() used to set value of existing header or create new header wtih value provided if it does not already exist
//headers.set('Content-Type', 'application/json');

//append() adds new header to header object
//headers.append('Accept-Encoding','gzip,deflate');

//delete() removes header provided as argument
//headers.delte('Accept-Encoding')

//keys() , values() and entries() – Iterators that can be used to iterate over the 
//headers key, values or entries (key and value pairs).

/*
for(const entry of headers.entries(){
console.log(entry);
}*/

/*
const url = 'https:example.com/data';
const headers = new Headers({ 'Content-Type': 'text/plain', 'Accept-Charset' : 'utf-8', 'Accept-Encoding':'gzip,deflate' })
const request = (url,{
    headers: headers
})
fetch(request)
.then( function(response) {
    if(response.ok) {
        return response;
    }
    throw Error(response.statusText);
})
.then( response => // do something with response )
.catch( error => console.log('There was an error!') )
*/
/*
//form action attribute
const request = new Request(form.action,
{
    method: form.method,
    header: headers,
    body: data
}
)*/
//formData
//const data = new FormData();
/*
const form = document.forms['todo'];
form.addEventListener('submit', addTask, false);
function addTask(event) {
    event.preventDefault();
    const task = new FormData(form);
    const url = `http://echo.jsontest.com/id/1/title/${form.task.value}`;
    const headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    });
    const request = new Request(url,
    {
        method: 'POST',
        mode: 'cors',
        header: headers,
        body: JSON.stringify(task)
    }
    )
    fetch(request)
    .then( response => response.json() )
    .then( data => console.log(`${data.title} saved with an id of ${data.id}`) )
    .catch( error => console.log('There was an error:', error))
}

//or
//data = new FormData(); // no form provided as an argument creates an empty form data instance
//data.append('height', 75);
//jQJuery library
/*
$.ajax('http://numbersapi.com/random')
.done(text => outputDiv.innerHTML = text );
*/
