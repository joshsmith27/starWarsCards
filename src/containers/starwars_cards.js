import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPlanets } from '../actions/index';

class StarWarsCards extends Component{
    renderCard(person){

    const name = person.name;
    const birthday = person.birth_year;
    const homePlanet = person.home_planet;
    return(
      <div key= {name} className = "card-container">
        <img className = "StarWarsImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/500px-Star_Wars_Logo.svg.png"/>
        <p>Name: {name}</p>
        <p>Birth Year: {birthday}</p>
        <p>{homePlanet}</p>
      </div>
    );
  }
    render(){
      if(!this.props.people){
        return <div> loading... </div>
      }
        return(
          <div>
          {this.props.people.results.map((card) =>{
            this.props.fetchPlanets(card.homeworld).then((results) =>{
              card.home_planet = results.payload.data.name;});
            return this.renderCard(card);
          })}
          </div>
        );
      }
}

function mapStateToProps(state){
  return {people: state.people};
}
export default connect (mapStateToProps, {fetchPlanets})(StarWarsCards);