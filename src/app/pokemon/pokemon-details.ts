export interface PokemonDetails {
    name: string;
    height: number;
    weight: number;
    baseExperience: number;
    abilities: Abilities[];
}

export interface Abilities {
    ability: Ability;
}

export interface Ability {
    name: string;
    url: string;
}