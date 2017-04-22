import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import StarWarsCards from '../containers/starwars_cards';

export default class App extends Component {
  render() {
    return (
      <div>
        <p className = "StarwarsTitle">Star</p>
        <p className = "cardsTitle">Cards</p>
        <p className = "StarwarsTitle">Wars</p>
        <SearchBar/>
        <StarWarsCards/>
      </div>
    );
  }
}
