//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
//example fetch
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
  

  // Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData('https://example.com/answer', { answer: 42 })
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  });

//To cause browsers to send a request with credentials included on both same-origin 
//and cross-origin calls, add credentials: 'include' to the init object you pass to the fetch() method.
fetch('https://example.com', {
  credentials: 'include'
});

//If you only want to send credentials if the request URL is on the same origin as the calling script, 
//add credentials: 'same-origin'.
// The calling script is on the origin 'https://example.com'

fetch('https://example.com', {
  credentials: 'same-origin'
});
//To instead ensure browsers don’t include credentials in the request, use credentials: 'omit'.

fetch('https://example.com', {
    credentials: 'omit'
  })
  //Use fetch() to POST JSON-encoded data.
  const data = { username: 'example' };

fetch('https://example.com/profile', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});

//Files can be uploaded using an HTML <input type="file" /> input element, FormData() and fetch().

const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');

formData.append('username', 'abc123');
formData.append('avatar', fileField.files[0]);

fetch('https://example.com/profile/avatar', {
  method: 'PUT',
  body: formData
})
.then(response => response.json())
.then(result => {
  console.log('Success:', result);
})
.catch(error => {
  console.error('Error:', error);
});
//multiple files: Files can be uploaded using an HTML <input type="file" multiple /> input element, FormData() and fetch().

const formData = new FormData();
const photos = document.querySelector('input[type="file"][multiple]');

formData.append('title', 'My Vegas Vacation');
for (let i = 0; i < photos.files.length; i++) {
  formData.append('photos', photos.files[i]);
}

fetch('https://example.com/posts', {
  method: 'POST',
  body: formData,
})
.then(response => response.json())
.then(result => {
  console.log('Success:', result);
})
.catch(error => {
  console.error('Error:', error);
});
//text file line-by-line
//The chunks that are read from a response are not broken neatly at line boundaries and are Uint8Arrays, 
//not strings. If you want to fetch a text file and process it line by line, it is up to you to handle 
//these complications. The following example shows one way to do this by creating a line iterator (for simplicity, 
//it assumes the text is UTF-8, and doesn't handle fetch errors).

async function* makeTextFileLineIterator(fileURL) {
    const utf8Decoder = new TextDecoder('utf-8');
    const response = await fetch(fileURL);
    const reader = response.body.getReader();
    let { value: chunk, done: readerDone } = await reader.read();
    chunk = chunk ? utf8Decoder.decode(chunk) : '';
  
    const re = /\n|\r|\r\n/gm;
    let startIndex = 0;
    let result;
  
    for (;;) {
      let result = re.exec(chunk);
      if (!result) {
        if (readerDone) {
          break;
        }
        let remainder = chunk.substr(startIndex);
        ({ value: chunk, done: readerDone } = await reader.read());
        chunk = remainder + (chunk ? utf8Decoder.decode(chunk) : '');
        startIndex = re.lastIndex = 0;
        continue;
      }
      yield chunk.substring(startIndex, result.index);
      startIndex = re.lastIndex;
    }
    if (startIndex < chunk.length) {
      // last line didn't end in a newline char
      yield chunk.substr(startIndex);
    }
  }
  
  async function run() {
    for await (let line of makeTextFileLineIterator(urlOfFile)) {
      processLine(line);
    }
  }
  
  run();
  //check for successful:
  //A fetch() promise will reject with a TypeError when a network error is encountered or CORS 
  //is misconfigured on the server-side, although this usually means permission issues or similar 
  //— a 404 does not constitute a network error, for example. An accurate check for a successful fetch() 
  //would include checking that the promise resolved, then checking that the Response.ok property has a 
  //value of true. The code would look something like this:

fetch('flowers.jpg')
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.blob();
})
.then(myBlob => {
  myImage.src = URL.createObjectURL(myBlob);
})
.catch(error => {
  console.error('There has been a problem with your fetch operation:', error);
});
//supplying own request
//Instead of passing a path to the resource you want to request into the fetch() call, 
//you can create a request object using the Request() constructor, and pass that in as a 
//fetch() method argument:

const myHeaders = new Headers();

const myRequest = new Request('flowers.jpg', {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default',
});

fetch(myRequest)
  .then(response => response.blob())
  .then(myBlob => {
    myImage.src = URL.createObjectURL(myBlob);
  });
  //Request() accepts exactly the same parameters as the fetch() method. 
  //You can even pass in an existing request object to create a copy of it:

const anotherRequest = new Request(myRequest, myInit);
//This is pretty useful, as request and response bodies are one use only. Making a copy 
//like this allows you to make use of the request/response again while varying the init options 
//if desired. The copy must be made before the body is read, and reading the body in the copy will 
//also mark it as read in the original request.

//Headers
const content = 'Hello World';
const myHeaders = new Headers();
myHeaders.append('Content-Type', 'text/plain');
myHeaders.append('Content-Length', content.length.toString());
myHeaders.append('X-Custom-Header', 'ProcessThisImmediately');
//OR
const myHeaders = new Headers({
    'Content-Type': 'text/plain',
    'Content-Length': content.length.toString(),
    'X-Custom-Header': 'ProcessThisImmediately'
  });
  //can be queried
  console.log(myHeaders.has('Content-Type')); // true
console.log(myHeaders.has('Set-Cookie')); // false
myHeaders.set('Content-Type', 'text/html');
myHeaders.append('X-Custom-Header', 'AnotherValue');

console.log(myHeaders.get('Content-Length')); // 11
console.log(myHeaders.get('X-Custom-Header')); // ['ProcessThisImmediately', 'AnotherValue']

myHeaders.delete('X-Custom-Header');
console.log(myHeaders.get('X-Custom-Header')); // [ ]

//TypeError
const myResponse = Response.error();
try {
  myResponse.headers.set('Origin', 'http://mybank.com');
} catch (e) {
  console.log('Cannot pretend to be a bank!');
}
//A good use case for headers is checking whether the content 
//type is correct before you process it further.
fetch(myRequest)
  .then(response => {
     const contentType = response.headers.get('content-type');
     if (!contentType || !contentType.includes('application/json')) {
       throw new TypeError("Oops, we haven't got JSON!");
     }
     return response.json();
  })
  .then(data => {
      /* process your data further */
  })
  .catch(error => console.error(error));
  //ServiceWorkers respondWith()
  const myBody = new Blob();

addEventListener('fetch', function(event) {
  // ServiceWorker intercepting a fetch
  event.respondWith(
    new Response(myBody, {
      headers: { 'Content-Type': 'text/plain' }
    })
  );
});
//The Response() constructor takes two optional arguments — 
//a body for the response, and an init object (similar to the one that Request() accepts.)

//Request bodies can be set by passing body parameters:

const form = new FormData(document.getElementById('login-form'));
fetch('/login', {
  method: 'POST',
  body: form
});
//feature detection
if (window.fetch) {
    // run my fetch request here
  } else {
    // do something with XMLHttpRequest?
  }