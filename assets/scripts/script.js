// The all important!
'use strict';


// The random event array! full of good and bad surprises for our players. Surely there will be more to add!
const randEvent = [
  {
    name: "bear",
    info: "As you make your way through the forest, you hear a low gutteral growl. A bear has found you!"
  },

  {
    name: "deer",
    info: "You hear a twig snap somewher ahead of you, and as you peer through the woods, a deer takes off! Startled by your presence."
  },

  {
    name: "clearing",
    info: ""
  }
];

// Lets see if it works.
// console.log(randEvent[0].info);
// And it does!

// Now attempting to get the phrases to output to the HTML, however it seems to always trigger the function, rather than on event.

// document.querySelector('.randEvent').addEventListener('click', encounter());

// function encounter() {
//   document.querySelector('.description').innerHTML = `${randEvent[0].info}`;
// };