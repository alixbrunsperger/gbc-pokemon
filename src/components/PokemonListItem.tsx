import React, { FunctionComponent } from "react";
import Link from "next/link";
import { PokemonLightType } from "../types/types";

interface PokemonListItemProps {
  pokemonLight: PokemonLightType;
  index: number;
}
const PokemonListItem: FunctionComponent<PokemonListItemProps> = ({
  pokemonLight,
  index,
}) => {
  return (
    <div className="pokemon-list-item">
      <span className="list-item-number">
        {index.toString().padStart(3, "0")}
      </span>
      <Link href="/pokemon/[name]" as={`/pokemon/${pokemonLight.name}`}>
        <a className="list-item-name">{pokemonLight.name}</a>
      </Link>
    </div>
  );
};

export default PokemonListItem;
