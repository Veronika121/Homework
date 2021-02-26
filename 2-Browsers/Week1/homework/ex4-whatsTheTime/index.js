'use strict';
/*------------------------------------------------------------------------------
1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  function zeroFormat(value) {
    if (value < 10) {
      value = `0${value}`;
    }
    return value;
  }
  window.setInterval(() => {
    const date = new Date();
    const hours = zeroFormat(date.getHours());
    const minutes = zeroFormat(date.getMinutes());
    const seconds = zeroFormat(date.getSeconds());
    document.body.innerHTML = `${hours}:${minutes}:${seconds}`;
  }, 0);
}

window.addEventListener('DOMContentLoaded', addCurrentTime);
