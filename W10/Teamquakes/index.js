import { getJSON, getLocation } from './utilities.js';

let baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';
//example :https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-03-

getLocation().then(res => {
    console.log(res.coords.latitude, res.coords.longitude);
    baseUrl + `&latitude=${res.coords.latitude}&longitude=${res.coords.longitude}`

}).catch(err => {

})

getJSON(baseUrl). then(res => {

}).catch(err=>{

})