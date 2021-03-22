// Challenge: throw five dices in sequence
const rollDice = require('../../helpers/pokerDiceRoller');
function rollTheDices() {
  const results = [];

  const pushAndRoll = (dice) => (value) => {
    results.push(value);
    return rollDice(dice);
  };

  rollDice(1)
    .then(pushAndRoll(2))
    .then(pushAndRoll(3))
    .then(pushAndRoll(4))
    .then(pushAndRoll(5))
    .then((value) => {
      results.push(value);
      console.log('Resolved!', results);
    })
    .catch((error) => console.log('Rejected!', error.message));
}

rollTheDices();
// ! Do not change or remove the code below
module.exports = rollTheDices;
