import {
    SET_MOVIE_FIELDS,
    SET_MOVIE_FILTERS,
  } from '../action';
  
  const initialState = {
    movie: {
      records: [],
      filters: { limit:100 },
    },
  }
  
  export default function Movies (state = initialState, action) {
    switch (action.type) {
      case SET_MOVIE_FIELDS:
        return {
          ...state,
          movie: {
            ...state.movie,
            ...action.payload,
          },
        };
      case SET_MOVIE_FILTERS:
        return {
          ...state,
          movie: {
            ...state.movie,
            filters: {
              ...state.movie.filters,
              ...action.payload,
            }
          },
        };
      default:
        return state;
    }
  }