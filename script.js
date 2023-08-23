const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "aqua",
  "yellow",
  "pink",
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "aqua",
  "yellow",
  "pink"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
let firstCard = null;
let secondCard = null;
let locked = false; // to prevent clicking when two cards are already flipped
let matchedPairs = 0;

function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  if (locked) return;
  console.log("you just clicked", event.target);
  const card = event.target
  card.style.backgroundColor = card.classList.value;
  if (!firstCard) {
    firstCard = card;
    return;
  }
  if (!secondCard) {
    secondCard = card;
  }
  if (firstCard.classList.value === secondCard.classList.value) {
    matchedPairs += 1;
    firstCard = null;
    secondCard = null;
    return;
  }
  locked = true;
  setTimeout(function() {
    firstCard.style.backgroundColor = '';
    secondCard.style.backgroundColor = '';
    firstCard = null;
    secondCard = null;
    locked = false;
  }, 1000);

}

// when the DOM loads
createDivsForColors(shuffledColors);

