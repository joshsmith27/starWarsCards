import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPlanets } from '../actions/index';
import Card from '../components/card';


class StarWarsCards extends Component{
  constructor(props) {
    super(props);
  }
    render(){
      if(!this.props.people){
        return <div> loading... </div>
      }
        return(
          <div>
          {this.props.people.results.map(
            (card) =>{
              return(
                <Card
                key = {card.name}
                card = {card}
                name = {card.name}
                birthday = {card.birthday}
                homeWorld = {card.homeworld}
                 />
               );
            }
          )};
          </div>
        );
      }
}

function mapStateToProps(state){
  return {people: state.people};
}

export default connect (mapStateToProps, {fetchPlanets})(StarWarsCards);


//   renderCard(person){
//   const name = person.name;
//   const birthday = person.birth_year;
//   return(
//     <div key= {name} className = "card-container">
//       <img className = "StarWarsImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/500px-Star_Wars_Logo.svg.png"/>
//       <p>Name: {name}</p>
//       <p>Birth Year: {birthday}</p>
//       <button className = 'add-favorites-button'> Add To Favorites</button>
//       <button className = 'add-favorites-button'> Show Details</button>
//     </div>
//   );
// }
