'use strict';
/*------------------------------------------------------------------------------
Rewrite this function, but replace the callback syntax with the Promise syntax:
- Have the `getAnonName` function return a `new Promise`.
- If the Promise `resolves`, pass the full name as an argument to resolve with.
- If the Promise `rejects`, pass an error as the argument to reject with: "You 
  didn't pass in a first name!"
------------------------------------------------------------------------------*/

const getAnonName = (firstName) => {
  const anonName = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (firstName) {
        resolve(`${firstName} Doe`);
      } else {
        reject(new Error("You didn't pass in a first name!"));
      }
    }, 1000);
  });
  return anonName;
};

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};
const handleFailure = (rejectValue) => {
  console.log(rejectValue);
};

getAnonName('John').then(handleSuccess).catch(handleFailure);

// ! Do not change or remove the code below
module.exports = getAnonName;
