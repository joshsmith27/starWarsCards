import {ADD_FAVORITES, FETCH_FAVORITES, REMOVE_FAVORITES} from '../actions/index'
export default function(state = null, action){
  switch(action.type){
    case FETCH_FAVORITES:
    return action.card.data
  }
