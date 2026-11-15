
let cachedPokemon = [];

let renderedPokemon = [];





async function init(){

    loadPokemenon(0, 30);

}

async function loadPokemenon(limit, offset){
    let returnValue = [];
    let result = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    let resultJson = await result.json();

}