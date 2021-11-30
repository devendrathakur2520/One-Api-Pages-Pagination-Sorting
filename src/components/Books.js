import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BooksRequest } from "../thunk/BooksRequest";
export const Books=(prop)=>{
 const dispatch=useDispatch();
 const AllBooks=useSelector((state)=>state.ApiData.books)
 console.log(AllBooks)


useEffect(()=>{
    dispatch(BooksRequest())
    

},[])
return(
    <>
    <div>
    <h1>Books List</h1>
    {AllBooks.map((books)=>(
        <li>{books.name}</li>
    ))}
</div>
</>
)
}