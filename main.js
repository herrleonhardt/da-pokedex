/**
 * dictionary of all cached PokemonObjects
 * Key-Value-Pairs
 * {name : {pkmObject}, ..}
 * access: cachedPokemon[pkmName] = {name : name, id : id, types : {type1,type2}, evolutesTo : name, imgPath : path};
 * let currentPkm = cachedPokemon[pkmName];
 */
let cachedPokemon = {};

/**
 * holds current to be shown pokemon
 * source of renderfuntion
 * makes filtering possible
 */
let renderedPokemon = [];

/*
pokemonObject


{   
    name : name,
    id : id,    
    types : {type1,type2},
    evolutesTo : name,
    imgPath : path
}


*/

async function init() {
  await loadPokemon(35, 0);
  filterPokemon();
  console.log(renderedPokemon);

  setTimeout(() => {
    renderPokemon();
  }, 1500);
}

/**
 * filtering function...
 * filters cached pkm into renderd pkm
 */
function filterPokemon() {
  renderedPokemon = [];
  for (let key in cachedPokemon) {
    renderedPokemon.push(cachedPokemon[key]);
  }
}

function renderPokemon() {
  const cardsContainer = document.getElementById("cards-container");
  cardsContainer.innerHTML = "";
  let cardsContainerContent = "";
  renderedPokemon.forEach((pokemon) => {
    cardsContainerContent += getHtmlCardTemplate(pokemon);
  });

  cardsContainer.innerHTML = cardsContainerContent;
}

async function showPokeModal(name){
  await loadPokemonCardDetails(name);
  const pokemnon = cachedPokemon[name];

  console.log(`show modla for ${name}`);
  
}

/**
 * creates an Pokemon Object for the dictionary
 * @param {int} id
 * @param {string} name
 * @returns
 */
function createPokemonObject(id = "", name = "") {
  return new Object({
    name: name,
    id: id,
    types: [],
    evolutesTo: "",
    imgPath: "",
    weight: 0,
  });
}

/**
 * fetches pokemnon and returns an arrauy of pokemon-opbject
 * @param {int} limit count of pokemon to fetch
 * @param {int} offset where the fetch should start
 
 */
async function loadPokemon(limit, offset) {
  let result = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
  );
  let resultJson = await result.json();

  //TODO: only write Pokemnon, not yet set
  resultJson.results.forEach(async (pokemon) => {
    let urlArray = pokemon.url.split("/");
    cachedPokemon[pokemon.name] = createPokemonObject(
      urlArray[urlArray.length - 2],
      pokemon.name,
    );
    await loadPokemonListDetails(pokemon.name);
  });
}

/**
 *
 * @param {string} name of Pokemon as unique identifier
 * @returns an Array of all Pokemon-IDs in the evochain
 */
async function getPokemonEvochain(name) {
  let returnValue = [];

  return returnValue;
}

/**
 * updates the list-details (weight, types, imageUrl) of a specific pokemon in the cachedPokemon-dictionary
 * @param {string} name of Pokemon as unique identifier
 */
async function loadPokemonListDetails(name) {
  let result = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
  let pokemon = await result.json();

  cachedPokemon[name].weight = pokemon.weight;
  cachedPokemon[name].height = pokemon.height;
  let types = [];
  pokemon.types.forEach((typeSlot) => types.push(typeSlot.type.name));
  cachedPokemon[name].types = types;
  cachedPokemon[name].imgPath = pokemon.sprites.front_default;
}

/**
 * updates the card-details (abilitiey, evochain, stats) of a specific pokemon in the cachedPokemon-dictionary
 * @param {string} name of Pokemon as unique identifier
 */
async function loadPokemonCardDetails(name) {}
