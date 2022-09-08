import React, { FunctionComponent } from "react";
import { PokemonLightType } from "../types/types";
import PokemonListItem from "./PokemonListItem";

interface PokemonListContentProps {
  pokemons: PokemonLightType[];
}
const PokemonListContent: FunctionComponent<PokemonListContentProps> = ({
  pokemons
}) => {
  return (
    <div className="list-content">
        <h1>CONTENTS</h1>
        {pokemons.map((item: PokemonLightType, index: number) => (
            <PokemonListItem
              key={index}
              pokemonLight={item}
              index={index + 1}
            />
          ))}
      </div>
  );
};

export default PokemonListContent;
