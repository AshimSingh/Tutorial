import React from 'react'
import Prop from './prop'
import Props from './propDrilling'
import Homepage from './homepage'
import {useState,useEffect} from 'react'
import {BrowserRouter as Router,Route,Routes,Link, useParams} from 'react-router-dom'
import {data} from './data' 
import { Button } from 'bootstrap'
const ReactRouteras=()=>{
   return(
    <>
         {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/props">Props</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/prop">Prop Drilling</a>
            </li>
    </ul>
  </div>
</nav> */}
        <Router>
             <div>
            <ul className='d-flex align-item-center m-4 '>
                    <Link className='navItem' to="/">Home</Link>
                    <Link className='navItem' to="/prop">Prop</Link>
                    <Link className='navItem' to="/props">Prop Drilling</Link>
            </ul>
        </div>
        <Routes>
            <Route exact path="/" element={<Homepage/>}/>
            <Route path="/prop" element={<Prop></Prop>}/>
            <Route path="/props" element={<Props/>}/>
            <Route path='/person/:id' element={<Person></Person>}/>
            <Route path='*' element={<Err></Err>}></Route>
        </Routes>
    </Router>
    </>
   )
    //     <Router>
    //     <Route path='/'>
    //             <Homepage/>
    //     </Route>
    //     {/* <Route path='/prop'>
    //             <Prop/>
    //     </Route>
    //     <Route path='/props'>
    //             <Props/>
    //     </Route>
    //     <Route path='/reduc'>
    //             <Reduc/>
    //     </Route> */}
    // </Router>
    
}
function Err(){
    return(
        <>
            <div className='box'>
                <h1>Err... Page Not found!!!</h1>
                <Link to="/"><button type="button" class="btn btn-info mt-3">Go Back</button></Link>
            </div>
        </>
    )
}
function Person(){
    // const[dat,setdata]=useState(data)
    const [name,setName]=useState([])
    const {id}=useParams()
    useEffect(()=>{
        // const obj =dat.find((pep)=>pep.id==id)
        // const obj = dat.filter((pep)=>pep.id===id)
        const obj = data.filter((pep)=>pep.id===id)
        setName(
            obj
        )
    },[id])
    
    return(
        
        <>
            <div className='box'>
                   {/* <h1>{name.firstName}</h1>
                   <h3>ID number: {name.id}</h3> */}
                   {
                        name.map((m)=>{
                            return(
                                <>
                                    <h1>{m.firstName}</h1>
                                    <h3>ID number: {m.id}</h3>
                                    <Link to='/propsn'><button className='m-2 mt-0 btn btn-info'>Go back to People</button></Link>
                                </>
                            )
                        })
                   }
                   
            </div>
        </>
    )
}
export default ReactRouteras
