
export const GET_BOOKS ="GET_BOOKS";
export const GET_MOVIE ="GET_MOVIE";
export const GET_MOVIE_QUOTE ="GET_MOVIE_QUOTE";
export const GET_CHARACTER ="GET_CHARACTER";
export const SET_MOVIE_FIELDS = 'SET_MOVIE_FIELDS';
export const SET_MOVIE_FILTERS = 'SET_MOVIE_FILTERS';






export const getBooks = (payload) =>({type: "GET_BOOKS",payload});
export const getMovie = (payload) =>({type: "GET_MOVIE",payload});
export const getMovieQuote = (payload) =>({type: "GET_MOVIE_QUOTE",payload});
export const getCharacter = (payload) =>({type: "GET_CHARACTER",payload});
export const setMovieFields = (payload) => ({ type: SET_MOVIE_FIELDS, payload });
export const setMovieFilters = (payload) => ({ type: SET_MOVIE_FILTERS, payload });
