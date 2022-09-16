import React from 'react';
import { useState } from 'react';
import {data} from "./data"
const Props=()=>{
    const [name,setName]=useState(data)
    const removePeople=(id)=>{
        const newPep = name.filter((p)=>p.id!==id)
        setName(newPep)
    }
    return (
        <div>
            <List people={name} remove={removePeople}></List>
        </div>
    )
}
const List=({people,remove})=>{
    return(
       <>
        <h1>Prop Drilling</h1>
        {
             people.map((pep)=>{
            return(
                <SinglePerson {...pep} remove={remove}></SinglePerson>
            )
        })
    }
       </>
    )
}
const SinglePerson=({id,firstName,remove})=>{
    return(
        <div className='d-flex' key={id}>
            <h4>{firstName}</h4>
            <button className='m-2 mt-0 btn btn-info' onClick={()=>remove(id)}>Remove</button>
        </div>
        
    )
}
export default Props