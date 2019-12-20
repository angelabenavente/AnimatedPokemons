import React from 'react';
//import './App.css';
import Pokemon from './Pokemon';

const PokeList = props => {
  return (
    <React.Fragment>
      <h1 className="App__title">hazte con todos!</h1>
      <ul className="App__cardsList">
        {props.pokemons.map((pokemon, index) =>{
          return (
            <li key={index} className="App__cardsList__pokemon">
              <Pokemon
                srcImage={pokemon.url}
                PokeName={pokemon.name}
                PokeTypes={pokemon.types}
              />
            </li>
          )}
        )}
      </ul>
    </React.Fragment>
  )
}

export default PokeList;
