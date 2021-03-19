'use strict';
/*------------------------------------------------------------------------------
- Run the unmodified program and confirm that problem described occurs.
- Refactor the `rollBack()` function from callback-based to returning a
  promise.
- Change the calls to `callback()` to calls to `resolve()` and `reject()`.
- Refactor the code that call `rollDice()` to use the promise it returns.
- Does the problem described above still occur? If not, what would be your
  explanation? Add your answer as a comment to be bottom of the file.
------------------------------------------------------------------------------*/

function rollDice() {
  const rollPromise = new Promise((resolve, reject) => {
    // Compute a random number of rolls (3-10) that the dice MUST complete
    const randomRollsToDo = Math.floor(Math.random() * 8) + 3;

    console.log(`Dice scheduled for ${randomRollsToDo} rolls...`);
    const rollOnce = (roll) => {
      // Compute a random dice value for the current roll
      const value = Math.floor(Math.random() * 6) + 1;
      console.log(`Dice value is now: ${value}`);

      if (roll > 6) {
        reject('Oops... Dice rolled off the table.');
      } else if (roll < randomRollsToDo) {
        setTimeout(() => rollOnce(roll + 1), 500);
      } else {
        resolve(`Success! Dice settled on ${value}.`);
      }
      /* Or like this. I don't know what is better.
       
      if (roll > 6) {
        reject(new Error('Oops... Dice rolled off the table.'));
        return;
      }
      if (roll === randomRollsToDo) {
        resolve(`Success! Dice settled on ${value}.`);
        return;
      }
      if (roll < randomRollsToDo) {
        setTimeout(() => rollOnce(roll + 1), 500);
      }*/
    };
    // Start the initial roll
    rollOnce(1);
  });
  return rollPromise;
}

rollDice()
  .then((resolveValue) => console.log(resolveValue))
  .catch((rejectValue) => console.log(rejectValue.message));

// ! Do not change or remove the code below
module.exports = rollDice;

//Explanation: it doesn't occur because now we call rollOnce(roll + 1) only if roll<=6
//Actually it was possible to fix it in the code with callback if to change if-statements.
