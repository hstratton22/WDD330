const url = "matchGame.json"

export default function getJSON(url="matchGame.json") {

    return fetch(url)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        } else {
          //console.log(response.json());
          return response.json();
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }