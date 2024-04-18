//did you complete workout
//need button response for complete
//need button response for incomplete

let completeBtn = document.getElementById("completed-btn");
completeBtn.addEventListener("click", function () {
  const congrats = document.createElement("p");
  congrats.innerHTML = " Way to go! Lets go catch a pokemon";
  document.getElementById("afterworkout").appendChild(congrats);
  //show the fetch pokemon
  document.getElementById("fetchContainer").style.display = "block";
});

let incompleteBtn = document.getElementById("incomplete-btn");
incompleteBtn.addEventListener("click", function () {
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

// Function to display Pokémon sprite on the page
const displayPokemonSprite = (pokemon) => {
  const pokemonSpriteContainer = document.getElementById(
    "pokemonSpriteContainer"
  );
  const pokemonSpriteImg = document.createElement("img");
  const pokemonName = document.createElement("p");
  pokemonSpriteImg.src = pokemon.sprites.front_default;
  pokemonSpriteImg.alt = pokemon.name;
  pokemonName.textContent = `${pokemon.name} #${pokemon.id}`;
  pokemonSpriteContainer.innerHTML = ""; // Clear previous content
  pokemonSpriteContainer.appendChild(pokemonSpriteImg);
  pokemonSpriteContainer.appendChild(pokemonName);

  console.log("Pokemon Data:", pokemon);
};

// Event listener for the fetch Pokemon button
document
  .getElementById("fetchPokemonButton")
  .addEventListener("click", async () => {
    try {
      // Fetch a random Pokémon
      const randomPokemon = await fetchRandomPokemon();

      // Display the Pokémon sprite on the page
      displayPokemonSprite(randomPokemon);
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
    }
  });
