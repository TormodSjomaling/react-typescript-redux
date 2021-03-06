import { ThunkAction } from 'redux-thunk'
import { RootState } from '..'
import { PokemonAction, Pokemon, PokemonError, GET_POKEMON, SET_LOADING, SET_ERROR } from '../types'

export const getPokemon = (pokemon: string): ThunkAction<void, RootState, null, PokemonAction> => {
    return async dispatch => {
        try {
            const res = await fetch('https://fakestoreapi.com/products')

            if (!res.ok) {
                const resData: PokemonError = await res.json()
                throw new Error(resData.message)
            }

            const resData: Pokemon[] = await res.json()
            dispatch({
                type: GET_POKEMON,
                payload: resData
            })
        }catch(err){
            dispatch({
                type: SET_ERROR,
                payload: err.message
            })
        }
    }
}

export const setLoading = (): PokemonAction => {
    return {
        type: SET_LOADING
    }
}

export const setError = (): PokemonAction => {
    return {
        type: SET_ERROR,
        payload: ''
    }
}