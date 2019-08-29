import React from 'react';
import PokemonSelect from './PokemonSelect';


const AllPokemon = (props) => {

  const pokeNodes = props.data.map(({ name, url }, index) => {
    return (
      <PokemonSelect
        key={index}
        number={index + 1}
        name={name}
        url={url}
        handleClick={props.handleClick}
      />
    )
  })


  return (
    <div className="flex-container">
      {pokeNodes}
    </div>
  )

}


export default AllPokemon;