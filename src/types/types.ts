import React, { FunctionComponent } from "react";

export interface PokemonType {
    name: string,
    height: number,
    weight: number,
    id: number,
    sprites: SpriteType,
}

interface SpriteType {
    front_default: string
}

export interface PokemonLightType {
    name: string,
    url: string,
}
