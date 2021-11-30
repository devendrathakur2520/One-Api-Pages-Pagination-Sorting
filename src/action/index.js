
export const GET_BOOKS ="GET_BOOKS";
export const GET_MOVIE ="GET_MOVIE";
export const GET_MOVIE_QUOTE ="GET_MOVIE_QUOTE";
export const GET_CHARACTER ="GET_CHARACTER";






export const getBooks = (payload) =>({type: "GET_BOOKS",payload});
export const getMovie = (payload) =>({type: "GET_MOVIE",payload});
export const getMovieQuote = (payload) =>({type: "GET_MOVIE_QUOTE",payload});
export const getCharacter = (payload) =>({type: "GET_CHARACTER",payload});
