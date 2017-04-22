import {FETCH_PEOPLE} from '../actions/index'

export default function(state = null, action){
  switch(action.type){
    case FETCH_PEOPLE:
    return action.payload.data
  }

  return state;
}
