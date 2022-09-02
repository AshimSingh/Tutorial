import React, { useState } from 'react'
import './index.css'
const MyForm=()=>{
    // const [naam,setNaam]=useState('')
    // const [mail,setMail]=useState('')
    const [people,setPeople]=useState({firstName:'',email:'',age:''})
    const [person,setPerson]=useState([])
    const handelChange=(e)=>{
        const name = e.target.name
        const value = e.target.value
        setPeople({...people,[name]:value})
    }
    const handelForm =(e)=>{
        e.preventDefault()
        if(people.firstName && people.email && people.age){
            const newPerson = {...people,id:new Date().getTime().toString()}
            setPerson(
                [...person,newPerson]
            )
            setPeople({ firstName:'',email:"",age:'' })
        }
    }
    // const handelForm=(e)=>{
    //     e.preventDefault()
    //     if(naam && mail){
    //         const people = {id:new Date().getTime().toString(),firstName:naam,email:mail}
    //         setPerson((person)=>{
    //             return ([...person,people])
    //         })
    //         setNaam('')
    //         setMail('')
    //     }
        // console.log("hello Art")
    //     else{
    //         console.log("empty value inserted")
    //     }
    // }
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
                            value={people.firstName}
                            // onChange={(e)=>setNaam(e.target.value)}
                            onChange={handelChange}
                            ></input>
                        </label>
                    </div>
                    <div className="p-2">
                        <label htmlFor='email'> Email:  
                        <input 
                            type='text' 
                            id='email' 
                            name='email' 
                            placeholder='Enter Email'
                            value={people.mail}
                            // onChange={(e)=>setMail(e.target.value)}
                            onChange={handelChange}
                            ></input>
                        </label>
                    </div>
                    <div className="p-2">
                        <label htmlFor='age'> Age :   
                        <input 
                            type='text' 
                            id='age' 
                            name='age' 
                            placeholder='Enter Age'
                            value={people.age}
                            // onChange={(e)=>setMail(e.target.value)}
                            onChange={handelChange}
                            ></input>
                        </label>
                    </div>
                    <button  className="btn btn-info" type='submit'>Add Person</button>
            </form>
            {/* {naam && <h1>hello</h1>} */}
            <div className='d-flex flex-column justify-content-center'>
                {person.map((p)=>{
                const{id,firstName,email,age}=p
                return(
                    <>
                        <div key={id}>
                            <h1>{firstName}</h1>
                        <p>
                            {email}
                        </p>
                        <p>
                            {age}
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