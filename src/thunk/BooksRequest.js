import React from 'react';
import axios from 'axios';
import { getBooks, getCharacter, getMovie, getMovieQuote} from "../action/index.js";

const client = axios.create({
    baseURL: 'https://the-one-api.dev/v2',
  });
  
  client.defaults.headers.common['Authorization'] = 'Bearer 99w7BSDGDclQg4x-y65C';
  
  export const BooksRequest = () => async (dispatch) => {
    try {
      const response = await client.get('/book');
      dispatch(getBooks(response.data.docs));
    } catch (err) {
      // logs the error whatever error occured in try block
      console.log(err);
    }
  }


  export const MovieRequest = () => async (dispatch) => {
    try {
      const response = await client.get('/movie');
      dispatch(getMovie(response.data.docs));
    } catch (err) {
      // logs the error whatever error occured in try block
      console.log(err);
    }
  }


  export const CharacterRequest = () => async (dispatch) => {
    try {
      const response = await client.get('/character');
      dispatch(getCharacter(response.data.docs));
    } catch (err) {
      // logs the error whatever error occured in try block
      console.log(err);
    }
  }



  export const MovieQuoteRequest = (id) => async (dispatch) => {
    console.log(id)
    try {
      const response = await client.get(`/movie/${id}/quote`);
      dispatch(getMovieQuote(response.data.docs));
    } catch (err) {
      // logs the error whatever error occured in try block
      console.log(err);
    }
  }
