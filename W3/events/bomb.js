
//set Timeout
let bombTimer = setTimeout(() => {
    console.log("BOOM!");
  }, 500);
  
  if (Math.random() < 0.5) { // 50% chance
    console.log("Defused.");
    clearTimeout(bombTimer);
  }

  //setInterval
  let ticks = 0;
let clock = setInterval(() => {
  console.log("tick", ticks++);
  if (ticks == 5) {
    clearInterval(clock);
    console.log("stop.");
  }
}, 200);

let textarea = document.querySelector("textarea");
  let timeout;
  textarea.addEventListener("input", () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => console.log("Typed!"), 500);
  });
  //set interval for detecting mousemove
  /*

  let scheduled = null;
  window.addEventListener("mousemove", event => {
    if (!scheduled) {
      setTimeout(() => {
        document.body.textContent =
          `Mouse at ${scheduled.pageX}, ${scheduled.pageY}`;
        scheduled = null;
      }, 250);
    }
    scheduled = event;
  });
  */
 