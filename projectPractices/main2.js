function doSomething() {
    /*  let somePromise = new Promise ((resolve, reject)=>{
          setTimeout(() => {
              resolve('5 seconds later')
          }, 5000);
      })
      somePromise.then ((result)=>{
          console.log(result)
      })
      console.log('waiting...')
  */

    fetch('data2.json')
        //fetch("https://superheroapi.com/api/10224877589389880/70")
        .then(res => res.json())
        .then(data => {
            renderData(data);
            /*let name= document.querySelector('#name');
            let image = document.querySelector('#image');
            console.log(data.temples);
            for(let i = 0, i< ;i++){
      
            }*/

            // name.innerHTML=data.temples.name
            //image.innerHTML=`<img src="${data.imageSrc}"/>`
            //image.setAttribute("src", `${data.image-src}`) // src=`${data.image-src}`
            //image.innerHTML=`<img src= '
            //title.innerHTML=data.name
            //desc.innerHTML.data.id
        })

}
function renderData(data){
    let name = document.querySelector('#name');
    //name.innerHTML=data.name;
    let image = document.querySelector('#image');
    console.log(data.temples);
    data.temples.forEach(item => {
        //name=item.name;
        //image=item.imageSrc;
        //name.innerHTML=item.name;//sets <h2>
        const divItem = document.createElement('div');
        divItem.classList.add("indDisplay");
        divItem.innerHTML =
            `<span class="label-name">${item.name}</span>
            <img src="${item.imageSrc}">`
        image.appendChild(divItem);

    })
}