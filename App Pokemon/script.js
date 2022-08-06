const BASE_URL_API = "https://pokeapi.co/api/v2/pokemon/";
const contenedorPokemones = document.getElementById("contenedor-pokemones");

async function getPokemon(id) {
  const respuesta = await fetch(BASE_URL_API + id);
  const pokemon = await respuesta.json();
  const nombrePokemon = pokemon.name;
  const imagen = pokemon.sprites.other.dream_world.front_default;
  renderPokemon(nombrePokemon, imagen);
}

function renderPokemon(nombre, img) {
    const card = `
  <div class="card">
    <figure>
        <img src="${img}" alt="${nombre}">
    </figure>
    <div class="contenido">
        <h2>${nombre}</h2>
    </div>
    </div>`;

    contenedorPokemones.innerHTML += card;
}

for(let i = 1; i < 49; i++) {
    getPokemon(i);
}
