/*------------------------------------------------------------------------------
For this exercise you should do the following:
  - Refactor the rollTheDices() function to throw five dices in one go, making use of the dices array and Promise.all().
  - A successful (i.e. resolved) throw should output a message similar to: 
      Resolved! [ 'JACK', 'QUEEN', 'QUEEN', 'NINE', 'JACK' ]
  - An unsuccessful (i.e. rejected) throw should output a message similar to:
      Rejected! Dice 3 rolled off the table.

The provided rollDice() function logs the value of a dice as it rolls, time-stamped with the time of day (with millisecond accuracy) to the console. 
Once you have successfully completed this exercise you will notice that the intermediate messages are output in bursts of up to five at a time as the dices finish rolling asynchronously.

You may also notice that, in the case of a rejected promise, dices that have not yet finished their roll continue to do so. 
Can you explain why? Please add your answer as a comment to the end of the exercise file.
------------------------------------------------------------------------------*/

// The line below makes the rollDice() function available to this file.
// Do not change or remove it.
const rollDice = require('../../helpers/pokerDiceRoller');

function rollTheDices() {
  const dices = [1, 2, 3, 4, 5];
  const resultPromises = dices.map((dice) => rollDice(dice));
  return Promise.all(resultPromises);
}

rollTheDices()
  .then((results) => console.log('Resolved!', results))
  .catch((error) => console.log('Rejected!', error.message));

//1. Dices that have not yet finished their roll continue to do so because  reject() doesn't mean 'return'.
//2. There only a single call to either .then() or .catch() despite resolve() and/or reject() being called more than once
//because .then() or .catch() can be called only ones. But I'm not sure :)
//3. We get "Rejected! Dice ... rolled off the table." only once even if several dices rolled off the table
//because if one of the promises is rejected the promise returned by Promise.all() is rejected.
// ! Do not change or remove the code below
module.export = rollTheDices;
