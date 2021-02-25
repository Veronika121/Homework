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
const parentNickname = nickname.parentElement;
const newName = document.createTextNode('Veronika');
parentNickname.replaceChild(newName, nickname);

const favFood = document.getElementById('fav-food');
const parentFavFood = favFood.parentElement;
const newFood = document.createTextNode('Sushi');
parentFavFood.replaceChild(newFood, favFood);

const hometown = document.getElementById('hometown');
const parentHometown = hometown.parentElement;
const newTown = document.createTextNode('Moscow');
parentHometown.replaceChild(newTown, hometown);

const lis = document.getElementsByTagName('li');
for (let i = 0; i < lis.length; i++) {
  lis[i].className = 'list-item';
}
