
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MovieRequest } from "../thunk/BooksRequest";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
export const Movie=(prop)=>{

    const {id}=useParams()
 const dispatch=useDispatch();
 const AllMovie=useSelector((state)=>state.ApiData.movie)

useEffect(()=>{
    dispatch(MovieRequest())
},[])
return(
    <>
    <div>
    <h1>Movie List</h1>
    
</div>
<div>

<Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Id</th>
      <th>Movie Name</th>
      <th>BudgetInMillions</th>
      <th>RuntimeInMinutes</th>
    </tr>
  </thead>
  <tbody>
  {AllMovie.map((movie)=>(
    <tr>
      <td>{movie._id}</td>
      <td>{movie.name}</td>
      <td>{movie.budgetInMillions}</td>
      <td>{movie.runtimeInMinutes}</td>
      <td> <Link className="btn btn-primary" to={`/MovieQuote/${movie._id}`}>MovieQuote</Link></td>
    </tr>
    ))}
    </tbody>
</Table>

</div>

</>
)
}