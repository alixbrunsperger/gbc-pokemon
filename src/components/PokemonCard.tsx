import React, { FunctionComponent } from "react";
import { PokemonType } from "../types/types";
import Image from "next/image";
import Link from "next/link";

interface PokemonCardProps {
  pokemon: PokemonType;
}
const PokemonCard: FunctionComponent<PokemonCardProps> = ({ pokemon }) => {
  return (
    <div className="card-main">
      <div
        className="card-img"
        style={{
          backgroundImage: `url(${pokemon.sprites.front_default})`,
        }}
      >
        <div className="card-id">
          N° {pokemon.id.toString().padStart(3, "0")}
        </div>
      </div>
      <div className="card-data">
        <span>{pokemon.name}</span>
        <span>{pokemon.types.map((t) => t.type.name).join(", ")}</span>
        <span>{`HT    ${pokemon.height} '`}</span>
        <span>{`WT    ${pokemon.weight} lb`}</span>
      </div>
      <div className="card-text">
        This pokemon is very cool. You need to catch one !
      </div>
      <div className="card-link">
        <Link href="/">Back to list</Link>
      </div>
    </div>
  );
};

export default PokemonCard;
