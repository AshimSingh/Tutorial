import React, { useState } from 'react'
import './index.css'
const MyForm=()=>{
    const [naam,setNaam]=useState('')
    const [mail,setMail]=useState('')
    const [person,setPerson]=useState([])
    const handelForm=(e)=>{
        e.preventDefault()
        if(naam && mail){
            const people = {id:new Date().getTime().toString(),firstName:naam,email:mail}
            setPerson((person)=>{
                return ([...person,people])
            })
            setNaam('')
            setMail('')
        }
        // console.log("hello Art")
        else{
            console.log("empty value inserted")
        }
    }
    return(
        <>
                <form className="tForn w-50  d-flex  flex-column" style={{margin:"20%", height:"50px"}} onSubmit={handelForm}>
                    <div className="p-2">
                        <label htmlFor='firstName'> Name:  
                        <input 
                            type='text' 
                            id='firstName' 
                            name='firstName' 
                            placeholder='Enter your Name'
                            value={naam}
                            onChange={(e)=>setNaam(e.target.value)}
                            ></input>
                        </label>
                    </div>
                    <div className="p-2">
                        <label htmlFor='email'> Email:  
                        <input 
                            type='text' 
                            id='email' 
                            name='firstName' 
                            placeholder='Enter your Name'
                            value={mail}
                            onChange={(e)=>setMail(e.target.value)}
                            ></input>
                        </label>
                    </div>
                    <button  className="btn btn-info" type='submit'>Add Person</button>
            </form>
            {/* {naam && <h1>hello</h1>} */}
            <div className='d-flex flex-column justify-content-center'>
                {person.map((p)=>{
                const{id,firstName,email}=p
                return(
                    <>
                        <div key={id}>
                            <h1>{p.firstName}</h1>
                        <p>
                            {p.email}
                        </p>
                        </div>
                    </>
                )
            })}
            </div>
        </>
    )
}
export default MyForm