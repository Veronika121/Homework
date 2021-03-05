'use strict';
/*------------------------------------------------------------------------------
1. Create a variable to store a reference to the `<img>` element.
2. Change the style of the `<img>` to have a `left` of `0px`, so that it starts 
   at the left hand of the screen.
3. Complete the function called catWalk() to move the cat 10 pixels to the right
   of where it started, by changing the `left` style property.
4. Call that function every 50 milliseconds. Your cat should now be moving 
   across the screen from left to right. Hurrah!
5. When the cat reaches the right-hand of the screen, restart them at the left 
   hand side (`0px`). So they should keep walking from left to right across the 
   screen, forever and ever.
6. When the cat reaches the middle of the screen, replace the img with an image 
   of a cat dancing (use this URL: https://tenor.com/StFI.gif), keep it dancing 
   for 5 seconds, and then replace the img with the original image and have it 
   continue the walk.
   The width of my window is 1366px. The middle of the window is 683px. The cat moves 10 px every 50 milliseconds. 
   It means 200px every 1 second. It means the cat moves 1000px after 5 seconds. It's more than a half of my 
   window (683px).
   1366/2=683
   1000/50=20 в сек. это 200пх в сек. это 1000 пх за 5 сек
-----------------------------------------------------------------------------*/
const img = document.getElementsByTagName('img')[0];
img.style.left = '0px';
img.width = '200';
let startTime = 0;
function catWalk() {
  window.setInterval(() => {
    const curTime = new Date().getSeconds() + new Date().getMinutes() * 60;
    if ((curTime - startTime < 10) & (startTime > 0)) {
      if (
        img.src !==
        'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif'
      ) {
        img.src =
          'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
      }
    } else {
      console.log('time out' + (curTime - startTime));
      if (
        img.src !== 'http://www.anniemation.com/clip_art/images/cat-walk.gif'
      ) {
        img.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
      }
    }
    if (parseFloat(img.style.left) + 200 > parseFloat(window.outerWidth)) {
      img.style.left = '0px';
    } else {
      img.style.left = parseFloat(img.style.left) + 10 + 'px';
    }
    if (
      (parseFloat(img.style.left) + 100 > parseFloat(window.outerWidth) / 2) &
      (curTime - startTime > 10 || startTime === 0)
    ) {
      startTime = new Date().getSeconds() + new Date().getMinutes() * 60;

      img.src =
        'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
    }
  }, 100);
}

window.addEventListener('DOMContentLoaded', catWalk);
