
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CharacterRequest } from "../thunk/BooksRequest";
export const Character=(prop)=>{
 const dispatch=useDispatch();
 const AllCharacter=useSelector((state)=>state.ApiData.character)
 console.log(AllCharacter)


useEffect(()=>{
    dispatch(CharacterRequest())
},[])
return(
    <>
    <div>
    <h1>Character List</h1>
    {AllCharacter.map((char)=>(
        <li>{char.name}</li>
    ))}
</div>
</>
)
}