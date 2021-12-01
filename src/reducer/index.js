import { combineReducers } from 'redux';
import ApiData from './ApiData';
import Movies from './MovieFilter'
 const reducer = combineReducers({
   ApiData,
   Movies
});
export default reducer;