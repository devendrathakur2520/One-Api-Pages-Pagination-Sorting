import { GET_BOOKS,GET_MOVIE,GET_MOVIE_QUOTE, GET_CHARACTER } from "../action";
const initialState = {
    books:[ ],
    movie:[ ],
    moviequote:[ ],
    character:[ ],
}
const ApiData =(state=initialState,action)=>{
    switch (action.type) {
        case GET_BOOKS:
            return {
                ...state,
                books: action.payload,
            };
            case GET_MOVIE:
            return {
                ...state,
                movie: action.payload,
            };
            case GET_MOVIE_QUOTE:
            return {
                ...state,
                moviequote: action.payload,
            };
            case GET_CHARACTER:
            return {
                ...state,
                character: action.payload,
            };
            default:
                return state;
        
    }
}
export default ApiData;