import {FETCH_PLANETS} from '../actions/index'

export default function(state = null, action){
  switch(action.type){
    case FETCH_PLANETS:
    return action.payload.data.name;
  }

  return state;
}
