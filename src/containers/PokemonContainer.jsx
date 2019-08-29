import React from 'react';
import AllPokemon from '../components/AllPokemon';
import Pokemon from '../components/Pokemon';

class PokemonContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      selectedPokemonAPI: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const datalimit = JSON.parse(jsonString);
      const data = datalimit.results.slice(0, 151);
      this.setState({ pokemon: data })
    });

    request.send();
  }

  handleClick(event) {
    const url = event;
    const request = new XMLHttpRequest();
    request.open('GET', url);
    window.scroll(0, 0);


    request.addEventListener("load", () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({ selectedPokemonAPI: data })
      console.log(data);
    });
    request.send();
  }

  render() {
    return (
      <div>
        <div>
          <h1 className="title">Pokemon Library</h1>
        </div>

        <div className="pokemon">
          <Pokemon
            data={this.state.selectedPokemonAPI}
          />
        </div>


        <div className='grid-view'>
          <AllPokemon data={this.state.pokemon}
            handleClick={this.handleClick}
          />
        </div>

      </div>

    )
  }
}
export default PokemonContainer;