import React, {Component} from 'react';
import axios from 'axios';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homePlanet: '',
      details: 'Show Details'
    };
  }
  showDetails = () => {
    axios.get(this.props.homeWorld)
    .then((response) => {
      if(this.state.homePlanet === ''){
        this.setState({
          homePlanet: response.data.name,
          details: 'Hide Details'
        })
      }else{
        this.setState({
          homePlanet: '',
          details: 'Show Details'
        })
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  };
  render(){
    const name = this.props.name;
    const birthday = this.props.birthday;
    const home = this.state.homePlanet;
    return(
      <div key= {name} className = "card-container">
      <img className = "StarWarsImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/500px-Star_Wars_Logo.svg.png"/>
      <p>Name: {name}</p>
      <p>Birth Year: {birthday}</p>
      <p>{this.state.homePlanet}</p>
      <button className = 'add-favorites-button'> Add To Favorites</button>
      <button onClick = {this.showDetails} className = 'add-favorites-button'>{this.state.details}</button>
      </div>
    );
  }
}
