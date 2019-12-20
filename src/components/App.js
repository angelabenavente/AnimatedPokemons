import React from 'react';
//import './App.css';
import data from '../data/data.json';
import PokeList from './PokeList'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state={
      PokeData: data
    }
  }

  render() {
    return (
      <div className="App">
        <PokeList pokemons={this.state.PokeData}/>
      </div>
    );
  }
}

export default App;
