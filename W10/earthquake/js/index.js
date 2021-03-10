import QuakesController from './QuakesController.js';

const myQuakesController = new QuakesController('#quakeList');
myQuakesController.init();


/*import QuakesController from './QuakesController.js';
import { getJSON, getLocation } from './utilities.js';


let baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';

getLocation().then(res => {
  console.log(res.coords.latitude, res.coords.longitude);
  baseUrl + `&latitude=${res.coords.latitude}&longitude=${res.coords.longitude}`
  //debugger;
}).catch (err => {
  //debugger;
})

getJSON(baseUrl).then(res =>{
  //debugger;
  //console.log(res.coords.latitude, res.coords.longitude);
}).catch(err=>{
  //debugger;
})

//should end up like this:
//https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-03-02&latitude=43.814540699999995&longitude=-111.78491029999999&maxradiuskm=100
//my current: Latitude: 39.058449499999995 °, Longitude: -76.9839593 °

let quakes= new QuakesController();
quakes.init();


/*
The two first methods to complete should be the initPos method from the controller, then the getEarthQuakesByRadius method from 
the model, test each method as you finish them.

After that work on the rest of the controller or View methods as it makes sense. I would recommend following the same order...finish a method, 
then test. It will keep your errors under control and make your code easier to troubleshoot.*/
