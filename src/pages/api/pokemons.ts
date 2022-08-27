export async function fetchPokemons() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=15");
    return res.json();
}