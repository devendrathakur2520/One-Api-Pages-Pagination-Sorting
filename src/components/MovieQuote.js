import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { MovieQuoteRequest } from "../thunk/BooksRequest";
export const MovieQuote=(prop)=>{
 const dispatch=useDispatch();
 const AllMovieQuote=useSelector((state)=>state.ApiData.moviequote)
 console.log("hello",AllMovieQuote)

const {id}=useParams();

useEffect(()=>{
    dispatch(MovieQuoteRequest(id))
    

},[])
return(
    <>
    <div>
    <h1>MovieQuote List</h1>
    {AllMovieQuote.map((quote)=>(
        <li>{quote.movie}</li>
    ))}
</div>
</>
)
}