import React from 'react'
import ReactDom from 'react-dom'
import {useState} from 'react'

function App(){
    const [text,setText]=useState()
    return(
        <>
            <h1>{text||"hello Ashim"}</h1>
            {text&&<h1>You are my</h1>}
            {!text && <h1>Sunshine </h1>}
        </>
    )
}
ReactDom.render(<App></App>,document.getElementById('root'))