import axios from "axios";

export const fetchPokemon = (name: string) =>
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    .then(({ data }) => data);

export const fetchPokemons = () =>
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then(({ data }) => data);