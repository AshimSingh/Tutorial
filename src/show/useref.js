import React from "react";
import { useRef,useState,useEffect } from "react";

const Ref=()=>{
    const refContainer =useRef(null)
    const [people,setPeople]=useState('')
    const handelSubmit=(e)=>{
        e.preventDefault();
        
        setPeople(
            refContainer.current.value
        )
        console.log(people)
    }
    useEffect(()=>{
        refContainer.current.focus()
    })

    return(
        <>  
        <h1>Use Ref</h1>
            <form>
                <div>
                    <label>Name:
                        <input type='text' ref={refContainer}></input>
                    </label>   
                    <button onClick={handelSubmit} >Submit</button>
                </div>
            </form>
        </>
    )
}
export default Ref