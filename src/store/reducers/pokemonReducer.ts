import { PokemonState, PokemonAction, SET_LOADING, SET_ERROR, GET_POKEMON } from "../types"

const initialState: PokemonState = {
    data: null,
    loading: false,
    error: ''
}

export default (state = initialState, action: PokemonAction): PokemonState => {
    switch (action.type) {
        case GET_POKEMON:
            return {
                data: action.payload,
                loading: false,
                error: ''
            }

        case SET_LOADING:
            return {
                ...state,
                loading: true,
            }

        case SET_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }

        default:
          return state
      }
}