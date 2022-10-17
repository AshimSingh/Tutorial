import React from 'react'
import ReactDom from 'react-dom'
// import {useState} from 'react'
import './show/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Display from './show/hide';
// import MyForm from './show/form';
// import Ref from './show/useref';
// import Reduc from './show/Reducer';
// import Prop from './show/propDrilling';
// import Prop from './show/prop'
// import Homepage from './show/homepage';
// import Hook from './show/customhooks'
// import ReactRouteras from './show/router';
// 
import Restapi from './restap';
function App(){
    // const [text,setText]=useState()
    // const [isError,setIsError] =useState(false)
    return(
        <>
            {/* And Or operator
             <h1>{text||"hello Ashim"}</h1>
            {text&&<h1>You are my</h1>}
            {!text && <h1>Sunshine </h1>} */}


            {/* Ternnary operator */}
            {/* <div class="w-50  d-flex  flex-column" style={{margin:"20%"}}>
            <button type="button" class="btn btn-info" onClick={()=>{setIsError(!isError)}}>{isError ? "Fix Error":"Find Error"}</button>
            {isError?<h1>Error...</h1>:<h1>Every Thing  all okay</h1>}
            </div> */}
            {/* <Display></Display> */}
            {/* <MyForm></MyForm> */}
            {/* <Ref></Ref> */}
            {/* <Reduc></Reduc> */}
            {/* <Prop></Prop> */}
            {/* <Hook></Hook> */}
            {/* <Prop></Prop> */}
            {/* <Homepage/> */}
            {/* <ReactRouteras/> */}
            {/* <Memo></Memo> */}
            <Restapi></Restapi>
        </>
    )
}
ReactDom.render(<App></App>,document.getElementById('root'))