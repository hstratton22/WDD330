//const url="https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02";

export function getJSON(url){
    return fetch(url)
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        } else {
          return response.json();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  //getJSON(url);

  export const getLocation = function(options) {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
};
     
/*The activity has you returning a Promise so you can call .then()on the getLocation() function. The documented use of the getCurrentPostion function is taking callbacks that will be called in the case of success or error. Instead of using the callbacks the author is Promise-ifying this call by giving it the Promise resolve and reject callbacks used in the Promise declaration. These are what get called when you do a .then() */

//getLocation(options).then(response => // do something with the response) 