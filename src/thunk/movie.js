import React from 'react';
import axios from 'axios';
import { setMovieFields, setMovieFilters} from "../action/index.js";

const client = axios.create({
    baseURL: 'https://the-one-api.dev/v2',
  });
  
  client.defaults.headers.common['Authorization'] = 'Bearer 99w7BSDGDclQg4x-y65C';
  
  
    
  export const MovieRequest = (prevFilters) => async (dispatch) => {
    try {
        const params = {
            budgetInMillions: prevFilters.limit ,
            
            //budgetInMillions: prevFilters.budgetInMillions,
           
          };console.log("cgdyyd",params.budgetInMillions)

          const { data: { docs } } =  await client.get(`/movie?budgetInMillions<${params.budgetInMillions}`);
          dispatch(setMovieFields({ records: docs }));
          //dispatch(setMovieFilters(filters));
        } catch (err) {
      // logs the error whatever error occured in try block
      console.log(err);
    }
  }
  