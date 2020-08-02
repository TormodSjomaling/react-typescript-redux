export const GET_POKEMON = "GET_POKEMON";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";

export interface Pokemon {
    name: string;
    url: string;
}

export interface PokemonData {
    results: Pokemon[]
}

export interface PokemonError {
    message: string;
}

export interface PokemonState {
    data: PokemonData | null;
    loading: boolean;
    error: string;
}

interface GetPokemonAction {
    type: typeof GET_POKEMON;
    payload: PokemonData;
}

interface SetLoadingAction {
    type: typeof SET_LOADING
}

interface SetErrorAction {
    type: typeof SET_ERROR;
    payload: string;
}

export type PokemonAction = GetPokemonAction | SetLoadingAction | SetErrorAction