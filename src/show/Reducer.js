import React from "react";
import { useState,useReducer } from "react";
import Model from "./model";
import {reducer} from './reduce'
// const reducer=(state,action)=>{
//     if(action.type === "TESTING"){
//         const newPeople =[...state.people,action.payload]
//         return{
//             ...state,
//             people:newPeople,
//     isModel:true,
//     modelContent:"Item Added",
//         }
        
//     }
//     if(action.type==="noVal"){
//         return {...state,isModel:false}   
//     }
//     if(action.type==="closeModel"){
//         return{...state,isModel:false}
//     }
//     if(action.type==='remove'){
//         const newP= state.people.filter((p)=>(p.id!==action.payload))
//         return{...state,people:newP}
//     }
//     else{
//         return state
//     }
    
// }
const initialState ={
        people:[],
        isModel:false,
        modelContent:""
}
const Reduc=()=>{
    const [naam,setNaam]=useState('')
    // const [people,setPeople]=useState([{firstName:"Ahim",id:"123135"},{
    //     firstName:"pagel",id:"1515"
    // }])
    const [state,dispatch]=useReducer(reducer,initialState)
    const handelSubmit=(e)=>{
        e.preventDefault()
        if(naam){
            const newP={firstName:naam,id: new Date().getTime().toString()}
            dispatch({type:"TESTING",payload:newP})
            setNaam('')
        }
        else{
            dispatch({dispatch:"noVal"})
            console.log("Empty")
        }
    }
    const closeModel=()=>{
        dispatch({type:"closeModel"})
    }
    return(
        <>
             <form onSubmit={handelSubmit}>
                <div>
                    <label>Name:
                        <input
                            type='text'
                            value={naam}
                            onChange={(e)=>setNaam(e.target.value)}
                        >
                        </input>
                    </label>
                </div>
                <button type="submit">Submit</button>
             </form>
             {state.isModel && <Model closeModel={closeModel} modelContent={state.modelContent}></Model>}
             {
                state.people.map((m)=>{
                    return(
                        <>
                            <div className="d-flex" key={m.id}>
                                <h1>{m.firstName}</h1>
                                <button className="btn btn-info m-3" onClick={()=>{dispatch({type:"remove",payload:m.id})}}>Remove</button>
                            </div>
                            
                        </>
                    )
                })
             }
        </>
    )
}
export default Reduc
