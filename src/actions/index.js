import axios from 'axios';

const ROOT_URL = 'http://swapi.co/api/people/';

export const FETCH_PEOPLE = 'FETCH_PEOPLE';

export const FETCH_PLANETS = 'FETCH_PLANETS';

export function fetchPeople(person){
    const url = `${ROOT_URL}?search=${person}`
    const request = axios.get(url);
    return{
      type: FETCH_PEOPLE,
      payload: request
    };
}
export function fetchPlanets(url){
  const request = axios.get(url);
  return{
    type: FETCH_PLANETS,
    payload: request
  };
}
