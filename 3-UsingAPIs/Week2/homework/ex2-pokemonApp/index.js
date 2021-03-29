'use strict';

/*------------------------------------------------------------------------------
Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populates the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Try and avoid using global variables. Instead, use function parameters and 
return values to pass data back and forth.
------------------------------------------------------------------------------*/
function fetchData(url) {
  return fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed');
  });
}

function fetchAndPopulatePokemons(data) {
  const listOfPokemons = data.results;
  const body = document.querySelector('body');
  const buttonGetPokemon = document.createElement('button');
  buttonGetPokemon.textContent = 'Get Pokemon!';
  body.appendChild(buttonGetPokemon);
  const select = document.createElement('select');
  body.appendChild(select);
  const showListOfPokemons = () => {
    listOfPokemons.forEach((pokemon) => {
      const option = document.createElement('option');
      option.textContent = pokemon.name;
      select.appendChild(option);
    });
    select.addEventListener('change', (event) =>
      fetchImage(event.target, listOfPokemons)
    );

    buttonGetPokemon.removeEventListener('click', showListOfPokemons);
  };
  buttonGetPokemon.addEventListener('click', showListOfPokemons);
}

function fetchImage(target, listOfPokemons) {
  const currentPokemon = listOfPokemons.find((el) => el.name === target.value);

  let imgSrc = '';
  fetchData(currentPokemon.url)
    .then((data) => {
      imgSrc = data.sprites.front_default;
      renderImg(imgSrc);
    })
    .catch((error) => console.log(error));
  function renderImg(src) {
    const body = document.querySelector('body');
    let img = body.querySelector('img');
    if (!img) {
      img = document.createElement('img');
      body.appendChild(img);
    }
    img.src = src;
    img.alt = target.value;
  }
}

async function main() {
  try {
    const response = await fetchData('https://pokeapi.co/api/v2/pokemon/');
    fetchAndPopulatePokemons(response);
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener('load', main);
