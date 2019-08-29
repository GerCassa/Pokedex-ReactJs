import React, {
  Component
} from 'react';
import './App.css';
import PokemonContainer from './containers/PokemonContainer';

class App extends Component {
  render() {
    return ( <div>
      <PokemonContainer/>
      </div>
    );
  }
}

export default App;
