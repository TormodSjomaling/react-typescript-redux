import React, { FC, useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';

import { getPokemon, setLoading } from '../store/actions/pokemonActions';

interface SearchProps {
  title: string;
}

const Search: FC<SearchProps> = ({ title }) => {
  const dispatch = useDispatch();
  const [pokemon, setPokemon] = useState('');

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setPokemon(e.currentTarget.value);
  }

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(setLoading());
    dispatch(getPokemon(pokemon));
    setPokemon('');
  }

  return(
    <div className="hero is-light has-text-centered">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{title}</h1>
          <form className="py-5" onSubmit={submitHandler}>
            <input 
              type="text"
              className="input has-text-centered mb-2"
              placeholder="Enter pokemon name"
              style={{maxWidth: 300}}
              value={pokemon}
              onChange={changeHandler}
            />
            <button className="button is-primary is-fullwidth" style={{maxWidth: 300, margin: '0 auto'}}>Search</button>
          </form>
        </div>
      </div>
    </div>
  );  
}

export default Search;