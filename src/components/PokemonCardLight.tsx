import React, { FunctionComponent } from "react";
import Link from "next/link";
import { PokemonLightType } from "../types/types";

interface PokemonCardLightProps {
  pokemonLight: PokemonLightType;
  index: number;
}
const PokemonCardLight: FunctionComponent<PokemonCardLightProps> = ({
  pokemonLight,
  index,
}) => {
  return (
    <div className="pokemon-light-card">
      <span className="light-card-number">{index}</span>
      <Link
        className="light-card-name"
        href="/pokemon/[name]"
        as={`/pokemon/${pokemonLight.name}`}
      >
        {pokemonLight.name}
      </Link>
    </div>
  );
};

export default PokemonCardLight;
