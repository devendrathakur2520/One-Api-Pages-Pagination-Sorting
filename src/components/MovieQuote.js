import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { MovieQuoteRequest } from "../thunk/BooksRequest";
import { Table } from "react-bootstrap";

export const MovieQuote=(prop)=>{
 const dispatch=useDispatch();
 const AllMovieQuote=useSelector((state)=>state.ApiData.moviequote)
const {id}=useParams();

useEffect(()=>{
    dispatch(MovieQuoteRequest(id))
    
},[])
return(
    <>
    <div>
    <h1>MovieQuote List</h1>
<Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Id</th>
      <th>MovieQuote</th>
     
    </tr>
  </thead>
  <tbody>
  {AllMovieQuote.map((quote)=>(
    <tr>
      <td>{quote._id}</td>
      <td>{quote.dialog}</td>
    </tr>
    ))}
    </tbody>
</Table>
</div>
</>
)
}