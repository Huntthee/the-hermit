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
  },

  {
    name: "The Hermit",
    info: "You come across a lone cottage, a wisp of smoke escaping the stone chimney. At the door stands a gnarled old man, living alone in the woods. He invites you inside to rest and perhaps help you find your way home."
  }
];

/* Okay! got the random descriptions to show up, just need to split it out to fire on button click instead of page refresh!

   Victory! put the function into the eventlistener and out of the global scope.
   Next thing, gotta figure out how to make sure the shuffle happen every time the button is clicked, not just the first time.
*/

const button = document.querySelector('.randEvent');
const message = `${randEvent[Math.floor(Math.random() * randEvent.length)].info}`;

button.addEventListener('click', function shuffle(){
  document.querySelector('.description').innerHTML = message;
});