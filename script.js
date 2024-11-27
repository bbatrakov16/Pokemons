// All Those Pokemon!
// Get text document changed to array
let pokemons;
fetch("pokemon.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (pokemons = strData.split(/\r?\n/)));

// Output sections
let randPokOutp = document.getElementById("span1");
let randTeamOutp = document.getElementById("span2");

let startLetterOutp = document.getElementById("div1");
let numOfLettersOutp = document.getElementById("div2");

// Buttons and Inputs
let randPokBtn = document.getElementById("btn1");
let randTeamBtn = document.getElementById("btn2");

let startLetterInp = document.getElementById("input1");
let numOfLettersInp = document.getElementById("input2");

// Event Listeners
randPokBtn.addEventListener("click", showRandPok);
randTeamBtn.addEventListener("click", showRandTeam);

startLetterInp.addEventListener("change", showWithStartLetter);
numOfLettersInp.addEventListener("change", showWithNumberOfLetters);

// Event Functions

function showRandPok() {
  let randNum = randomInt(0, pokemons.length);
  randPokOutp.innerHTML = `<p><img src="images/${pokemons[randNum]}" alt=""></p>
  <p>${pokemons[randNum].replace(".png", "")}</p>`;
}

function showRandTeam() {
  randTeamOutp.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    let randNum = randomInt(0, pokemons.length);
    randTeamOutp.innerHTML += `<p><img src="images/${pokemons[randNum]}" alt="">
    <p>${pokemons[randNum].replace(".png", "")}</p>`;
  }
}

function showWithStartLetter() {
  let letter = startLetterInp.value;
  letter = letter.toLowerCase();
  startLetterOutp.innerHTML = "";
  for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i].charAt(0) === letter) {
      startLetterOutp.innerHTML += `<p><img src="images/${pokemons[i]}" alt="">
    <p>${pokemons[i].replace(".png", "")}</p>`;
    }
  }
}

function showWithNumberOfLetters() {
  let count = 0;

  let numberOfLetters = numOfLettersInp.value;

  numOfLettersOutp.innerHTML = "";

  for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i].length - 4 == numberOfLetters) {
      count++;
      numOfLettersOutp.innerHTML += `<p><img src="images/${pokemons[i]}" alt="">
      <p>${pokemons[i].replace(".png", "")}</p>
      `;
    }
  }
  numOfLettersOutp.innerHTML += `<p>There are ${count} of pokemons with ${numberOfLetters} of letters in their names`;
}
