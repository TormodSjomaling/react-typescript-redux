import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './App.css';

import { RootState } from './store';
import Search from './components/Search';
import Alert from './components/Alert';
import Pokemon from './components/Pokemon';
import { setError } from './store/actions/pokemonActions';

const  App: FC = () => {
  const dispatch = useDispatch()
  const pokemonData = useSelector((state: RootState) => state.pokemon.data)
  const loading = useSelector((state: RootState) => state.pokemon.loading)
  const error = useSelector((state: RootState) => state.pokemon.error)

  return (
    <div className="App">
      <Search title="Enter something u filth" />
      {loading ? <h2 className="is-size-3 py-2">Loading...</h2> : pokemonData && <Pokemon data={pokemonData} />}

      {error && <Alert message={error} onClose={() => dispatch(setError())} />}
    </div>
  );
}

export default App;
