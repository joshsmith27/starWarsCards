import { combineReducers } from 'redux';
import PeopleReducer from './reducer_people';
import PlanetsReducer from './reducer_Planets';

const rootReducer = combineReducers({
  people: PeopleReducer,
  planets: PlanetsReducer
});

export default rootReducer;
