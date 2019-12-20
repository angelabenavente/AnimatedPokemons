import React from 'react';
//import './App.css';


const Pokemon = (props) => {
  return <div className="container">
    <section className="imageSection">
      <img className="image"src={props.srcImage} alt=""></img>
    </section>
    <section className="nameSection">
    <h1 className="title">{props.PokeName}</h1>
    </section>
    <section className="typeSection">
    {props.PokeTypes.map((type, index)=>{
      return <div><li key={index} className="membersList">
          <span>{type}</span>
        </li></div>
      })
    }
    </section>
  </div>
}

export default Pokemon;
