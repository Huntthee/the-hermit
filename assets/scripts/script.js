'use strict';

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


document.querySelector('description').innerHTML = `${randEvent.info}`;