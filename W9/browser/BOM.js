x = 6;  // global variable created
//<< 6
window.x // same variable can be accessed as a property of the window object
//<< 6
// both variables are exactly the same
window.x === x;
//<< true

//objects of window (usually leave window. off and just use function)
window.parseInt(4.2);
//<< 4
window.isNaN(4.2);
//<< false
//ES6 made parseInt() and isNaN() methods of the Number object, 
//so they can be both be called using the following code:
Number.parseInt(4.2);
//<< 4
Number.isNaN(4.2);
//<< false

//window.alert('Hello');
//<< undefined
//will stop the execution of the program and display a confirmation 
//dialog that shows the message provided as an argument, and giving the 
//options of OK or Cancel. It returns the boolean values of true if the user 
//clicks OK, and false if the user clicks Cancel:

//window.confirm('Do you wish to continue?');
//<< undefined
//similar to alert

//window.prompt('Please enter your name:');
//userAgent deprecated but still used

//window.navigator.userAgent

//window.location.href 
//redirect to new page
//window.location.href = 'https://www.sitepoint.com/javascript/'

////window.location.protocol 
//<< "https:"

//a string describing the domain of the current URLandthe port number (this is often omitted if the default port 80 is used):
//window.location.host
//<< "www.sitepoint.com"

//window.location.hostname
//<< "www.sitepoint.com"
//returns a string describing the port number, although it will return an empty string if the port is not explicitly stated in the URL
////window.location.port

//window.location.pathname
//<< "/premium/books/javascript-novice-to-ninja"

//returns a string that starts with a “?” followed by the query string parameters. 
//It returns an empty string if there are no query string parameters.
////window.location.search
//<< "?q=javascript&limit=24&offset=0&page=1&
//content_types[]=All&slugs[]=all&states[]=available&order="

//returns a string that starts with a “#” followed by the fragment identifier. 
//It returns an empty string if there is no fragment identifier:
//window.location.hash

//window.location.origin

//window.location.assign('https://www.sitepoint.com/')

//window.history.length property shows how many pages have been visited before arriving at the current page.
//window.history.go() method can be used to go to a specific page, where 0 is the current page:
//window.history.go(1); // goes forward 1 page
//window.history.go(0); // reloads the current page
//window.history.go(-1); // goes back 1 page
//window.history.forward() and 

//const popup = window.open('https://sitepoint.com','SitePoint','width=400,height=400,resizable=yes');
//popup.close();
//window.moveTo(0,0); // will move the window to the top-left corner of the screen
//window.resizeTo(600,400);

//The Screen object has more uses for mobile devices. It also allows you to do things like turn off the device’s screen, 
//detect a change in its orientation or lock it in a specific orientation.
//window.screen.height
//<< 1024
//window.screen.width
//<< 1280
//window.screen.availWidth
//<< 1280
//window.screen.availHeight
//<< 995

//window.screen.colorDepth;

//document
//document.write('Hello, world!');