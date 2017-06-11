import axios from 'axios';

const ROOT_URL = 'http://swapi.co/api/people/';

export const FETCH_PEOPLE = 'FETCH_PEOPLE';

export const FETCH_FAVORITES = 'FETCH_FAVORITES';

export const ADD_FAVORITES = 'ADD_FAVORITES';

export const REMOVE_FAVORITES = 'REMOVE_FAVORITES';

export function fetchPeople(person, page){
    const url = `${ROOT_URL}?page=${page}&search=${person}`
    const request = axios.get(url);
    return{
      type: FETCH_PEOPLE,
      payload: request
    };
}
export function addFavorite(card){
  return{
    type: ADD_FAVORITES,
    favoriteCard: card
  };
}
export function removeFavorite(card){
  return{
    type: REMOVE_FAVORITES,
    favoriteCard: card
  };
}
export function fetchFavorite(card){
  return{
    type: FETCH_FAVORITES,
    favoriteCard: card
  };
}
