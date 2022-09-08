import React, { FunctionComponent } from "react";

export interface PokemonType {
    name: string,
    height: number,
    weight: number,
    id: number,
    sprites: SpriteType,
    types: TypeType[],
}

interface SpriteType {
    front_default: string
}

interface TypeType {
    type: SubTypeType
}

interface SubTypeType {
    name: string
}

export interface PokemonLightType {
    name: string,
    url: string,
}

interface ResponseType {
    status: number
}

export interface ErrorType {
    response: ResponseType
}
