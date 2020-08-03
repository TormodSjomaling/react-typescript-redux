export const GET_POKEMON = "GET_POKEMON";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";

export interface Pokemon {
    //name: string
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string
}

export interface PokemonData {
    data: Pokemon[]
}

export interface PokemonError {
    message: string;
}

export interface PokemonState {
    data: Pokemon[] | null;
    loading: boolean;
    error: string;
}

interface GetPokemonAction {
    type: typeof GET_POKEMON;
    payload: Pokemon[];
}

interface SetLoadingAction {
    type: typeof SET_LOADING
}

interface SetErrorAction {
    type: typeof SET_ERROR;
    payload: string;
}

export type PokemonAction = GetPokemonAction | SetLoadingAction | SetErrorAction