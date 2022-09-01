import React from 'react'
import {useState,useEffect} from 'react'

const Display= ()=>{
    const [show,setShow] = useState(false)
    return(
        <>
        <div class="w-50  d-flex  flex-column" style={{margin:"20%"}}>
            <button type="button" class="btn btn-info" onClick={()=>setShow(!show)}>Show/Hide</button>
            {show && <Win></Win>}
        </div>
        </>
    )
}
const Win=()=>{
    const [size,setSize]=useState(window.innerWidth)
    const winSize=()=>{
        setSize(window.innerWidth)
    }
    useEffect(()=>{
        window.addEventListener('resize',winSize)
        return()=>{
            window.removeEventListener('resize',winSize)
        }
    },[])
    return(
        <>
            <div class='ml-4 mt-3' >
                <h1>window</h1>
                <h2>Size: {size} px</h2>
            </div>
        </>
    )
}
export default Display