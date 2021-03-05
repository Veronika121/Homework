'use strict';
/*------------------------------------------------------------------------------
1. Using JavaScript, change the body tag's style so it has a font-family of 
   "Arial, sans-serif".
2. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
3. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
------------------------------------------------------------------------------*/

document.body.style.fontFamily = 'Arial, sans-serif';

const nickname = document.getElementById('nickname');
nickname.innerText = 'Veronika';

const favFood = document.getElementById('fav-food');
favFood.innerText = 'Sushi';

const hometown = document.getElementById('hometown');
hometown.innerText = 'Moscow';

const list = document.getElementsByTagName('li');
for (let i = 0; i < list.length; i++) {
  list[i].className = 'list-item';
}
