//need a way to store the pokemon in local storage to save collection of pokemon
// function to display Pokémon sprite on the page
//initialize an empty array if there are no cuaght pokemon yet
let caughtPokemon = JSON.parse(localStorage.getItem("caughtPokemon")) || [];

//did you complete workout
//need button response for complete
//need button response for incomplete
let completeBtn = document.getElementById("completed-btn");
let incompleteBtn = document.getElementById("incomplete-btn");
let messageContainer = document.getElementById("afterworkout");

completeBtn.addEventListener("click", function () {
  //clear message container
  messageContainer.innerHTML = "";
  const congrats = document.createElement("p");
  congrats.innerHTML = " Way to go! Lets go catch a pokemon";
  document.getElementById("afterworkout").appendChild(congrats);

  //show the fetch pokemon
  document.getElementById("fetchContainer").style.display = "block";
});

incompleteBtn.addEventListener("click", function () {
  //clear message container
  messageContainer.innerHTML = "";
  const nextTime = document.createElement("p");
  nextTime.innerHTML = "That's okay try again!";
  document.getElementById("afterworkout").appendChild(nextTime);
});

const fetchRandomPokemon = async () => {
  const randomPokemonId = Math.floor(Math.random() * 151) + 1; // There are currently 898 Pokémon
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`
  );
  const data = await response.json();
  return data;
};

const displayPokemonSprite = (pokemon) => {
  const pokemonSpriteContainer = document.getElementById(
    "pokemonSpriteContainer"
  );
  const pokemonSpriteImg = document.createElement("img");
  const pokemonName = document.createElement("p");
  pokemonSpriteImg.src = pokemon.sprites.front_default;
  pokemonSpriteImg.alt = pokemon.name;
  pokemonName.textContent = `#${pokemon.id} ${pokemon.name}`;
  pokemonSpriteContainer.innerHTML = "";
  pokemonSpriteContainer.appendChild(pokemonSpriteImg);
  pokemonSpriteContainer.appendChild(pokemonName);

  console.log("Pokemon Data:", pokemon);
};

// event listener for the fetch Pokemon button
document
  .getElementById("fetchPokemonButton")
  .addEventListener("click", async () => {
    try {
      // fetch a random Pokémon
      const randomPokemon = await fetchRandomPokemon();

      //create a new pokemon obj
      const newPokemon = {
        name: randomPokemon.name,
        id: randomPokemon.id,
        sprite: randomPokemon.sprites.front_default,
      };

      //add the new pokemon to  the caught pokemon array
      caughtPokemon.push(newPokemon);
      localStorage.setItem("caughtPokemon", JSON.stringify(caughtPokemon));

      // display the Pokémon sprite on the page
      displayPokemonSprite(randomPokemon);
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
    }
  });

//close button for modal
// get the close button inside the modal
const closeButton = document.querySelector(".pcmodal .close-button");

// add click event listener to the close button
closeButton.addEventListener("click", function () {
  // hide the modal
  document.getElementById("fetchContainer").style.display = "none";
});

//need function to loop through local storage to populate pokemon sprites from local storage
//retrieve local storage pokemon
const getCaughtPokemonFromLocalStorage = function () {
  return JSON.parse(localStorage.getItem("caughtPokemon")) || [];
};

const pokemonCollectionBtn = document.getElementById("pokemonCollection-btn");

//create a display for pokemon in div
const displayCaughtPokemon = function () {
  const caughtPokemon = getCaughtPokemonFromLocalStorage();

  //sort the caughtPokemon array by id in ascending order
  caughtPokemon.sort((a, b) => a.id - b.id);

  const caughtPokemonContainer = document.getElementById("pokemonCollection");

  //clear the container
  caughtPokemonContainer.innerHTML = "";

  //iterate over each caught pokemon and display it in the container
  caughtPokemon.forEach(function (pokemon) {
    let pokemonDiv = document.createElement("div");
    let pokemonImg = document.createElement("img");
    let pokemonId = document.createElement("p");

    pokemonImg.src = pokemon.sprite;
    pokemonId.textContent = `#${pokemon.id} ${pokemon.name}`;

    //append the pokemon imgs
    pokemonDiv.appendChild(pokemonImg);
    pokemonDiv.appendChild(pokemonId);
    caughtPokemonContainer.appendChild(pokemonDiv);
  });
};

pokemonCollectionBtn.addEventListener("click", function () {
  displayCaughtPokemon();
});

//add a button that will close out the pokemon collection
let closeBtn = document.querySelector("#closePokemonCollection");
let collectionContainer = document.getElementById("pokemonCollection");
closeBtn.addEventListener("click", function () {
  // hide the Pokémon collection container
  collectionContainer.innerHTML = "";
});
