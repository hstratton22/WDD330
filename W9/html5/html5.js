//data-attributes examples
/*data-powers = 'flight superSpeed'
data-rating = '5' 
data-dropdown 
data-user = 'DAZ' 
data-max-length = '32'
*/
const superman = document.getElementById('hero');
const powers = superman.dataset.powers;
console.log(powers);
//If a data- attribute’s name contains hyphens, they are replaced with 
//camel-case notation, so data-max-length would be accessed using dataset.maxLength .
//older browsers
//const powers = superman.getAttribute('data-powers');

//the value of data-max-length will return a string, but can easily be converted into a number using the following code:
//const maxLength = Number(element.dataset.maxLength);

//localStorage.setItem('name', 'Walter White');
//localStorage.getItem('name'); 
//or can assign
localStorage.name = 'Heisenberg';
console.log(localStorage.name);
//to remove
localStorage.removeItem('name');
//or delete localStorage.name;

//remove all
//localStorage.clear();
//webstorage event listener

addEventListener('storage', (event) => {
    console.log(`The ${event.key} was updated from ${event.oldValue} to ${event.newValue} and saved in 
    ${event.storageArea}`)
}, false);

//save to string
//localStorage.setItem('superman', JSON.stringify(hero);
//parse
//superman = JSON.parse(localStorage.getItem('superman'));

//geolocation property of the navigator object
//getCurrentPosition() that will return a position object to a specified callback function, called youAreHere() in the example:
navigator.geolocation.getCurrentPosition(youAreHere);
//youAreHere() function has a coords property with a latitude and longitude property, which together give the coordinates of the device. 
function youAreHere(position) {
    console.log(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
}
//watchPosition() method that will call a callback function every time the position of the device is updated.
//const id = navigator.geolocation.watchPosition(youAreHere);
//clearWatch() method can be used to stop the callback being called, using the ID of the watch as an argument
//navigator.geolocation.clearWatch(id);

//web worker
//const worker = new Worker('task.js');
/*At the time of writing, the Chrome browser won't let you run workers from local files like this. 
A workaround is start Chrome using the --allow-file-access-from-files flag, or simply use a different browser for this example.

If you decide to use the --allow-file-access-from-files flag, make sure you only use this for development, 
rather than for regular browsing.*/
//post message to worker
//worker.postMessage('Hello');
//post from worker
//self.postMessage('Finished');
//message event is fired when message posted
/*
worker.addEventListener('message', (event) => {
    console.log(event.data);
}, false);
*/
//can be stopped
//worker.terminate();
//or from inside script
//self.close();

//permission for notifications request
if(window.Notification) {
    Notification.requestPermission();
}//
if(window.Notification) {
    Notification.requestPermission()
    .then((permission) => {
        if(Notification.permission === 'granted') {
        new Notification('Hello JavaScript!');
        }
    });
    
}
const notification = new Notification('JavaScript: Novice to Ninja',{
    body: 'The new book from SitePoint',
    icon: 'sitepointlogo.png'
});
//notification.close();
//open new window
/*
notification.addEventListener('click', () => {
    window.open('https://sitepoint.com')
    }, false);
    */

// audio insert
/*
<audio src='/song.mp3' controls>
Your browser does not support the audio element.
</audio>*/

//video insert
/*
<video src='http://movie.mp4' controls>
    Your browser does not support the video element.
</video>

const video = document.getElementsByTagName('video')[0];
video.play();
video.pause();
video.volume = 0.9;
video.muted = true;
video.currentTime += 10; // jumps forward 10 seconds
video.playbackRate = 8; // fast-forward at 8 times as fast; 1 is normal
video.loop = true;
video.duration;
//add event listener
video.addEventListener('loadedmetadata', () => { console.log(video.duration); });

video.addEventListener('pause', () => {
console.log('The video has been paused'); }, false)
*/
const canvasElement = document.getElementById('canvas');
const context = canvasElement.getContext('2d');
context.fillStyle = "#0000cc"; // a blue fill color 
context.strokeStyle = "#ccc"; // a gray stroke color
context.lineWidth = 4;
context.fillRect(10,10,100,50);
context.strokeRect(10,100,100,50);
//
context.beginPath();
context.moveTo(130, 50);
context.lineTo(180, 50);
context.moveTo(155, 50);
context.lineTo(155, 90);
context.strokeStyle = '#c00';
context.lineWidth = 15;
context.stroke();
//
context.beginPath();
context.arc(200, 200, 30, 0, Math.PI * 2, false);
context.strokeStyle = '#ff0';
context.lineWidth = 4;
context.stroke();
//
context.fillStyle = '#0c0'; // a blue fill color
context.font = 'bold 26px sans-serif';
context.fillText('Hello', 20, 200);
//



