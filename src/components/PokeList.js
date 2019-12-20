import React from 'react';
//import './App.css';
import Pokemon from './Pokemon';

const PokeList = props => {
  return <ul>
    {props.pokemons.map((pokemon, index) =>{
      return <li key={index} className="pokemons">
        <Pokemon
          srcImage={pokemon.url}
          PokeName={pokemon.name}
          PokeTypes={pokemon.types}
        />
        </li>
      })
    }
  </ul>
}

export default PokeList;
