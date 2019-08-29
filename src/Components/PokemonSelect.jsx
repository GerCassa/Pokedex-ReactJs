import React from 'react';

const PokemonSelect = (props) => {
  let name = props.name;
  let imgurl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + props.number + '.png';

  return (

    <button className="button">
      <img className="list-img"
        alt={props.name}
        src={imgurl}
        onClick={() => { props.handleClick(props.url) }}
      />
      <h3>{name.charAt(0).toUpperCase() + name.substr(1)}</h3>
    </button>
  )

}

export default PokemonSelect;