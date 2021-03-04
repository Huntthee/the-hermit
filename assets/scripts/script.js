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
    info: "Working your way through the trees, you see a break of light, and step out into a large meadow. Tall wild grasses and flowering plants sway in the breeze."
  },

  {
    name: "opossum",
    info: "The bushes rustle! Suddenly, an opossum scuttles by in front of you, before quickly disappearing back into the bush."
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