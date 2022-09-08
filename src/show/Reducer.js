import React from "react";
import { useState,useReducer } from "react";
const reducer=(state,action)=>{
    if(action.type === "TESTING"){
        return{
            ...state,
            people:[{firstName:"Ashim",id:"123"},
        {firstName:"thapa",id:"456"},
    {firstName:"asdf",id:"4564"}],
    isModel:true,
    modelContent:"heyyyy",
        }
        
    }
    else{
        return state
    }
    
}
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
            dispatch({type:"TESTING"})
            setNaam('')
        }
        else{
            dispatch({dispatch:"hello"})
            console.log("Empty")
        }
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
             {
                state.people.map((m)=>{
                    return(
                        <>
                            <h1>{m.firstName}</h1>
                        </>
                    )
                })
             }
        </>
    )
}
export default Reduc




