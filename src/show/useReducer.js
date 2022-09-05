// import React from 'react'
// import {useState} from 'react'
// import Model from './model'
// const Redu=()=>{
//     const [name,setName]=useState('')
//     const[people,setPeople]=useState([{firstName:"ashim",id:"123"},
// {firstName:"Car",id:"456"}])
//     const[showModel,setModel]=useState(false)
//     const handelSubmit=(e)=>{
//         e.preventDefault()
//         if(name){
//             setModel(false)
//             const newName={firstName:name,id:new Date().getTime.toString()}
//             setPeople((p)=>{
//                 return([...p,newName])
//             }
//             )
//             setName('')
            
//         }
//         else{
//             setModel(true)
//         }
//     }
//     return(
        
//         <>
//             <form onSubmit={handelSubmit}>
//                 <div className='d-flex m-4 mb-0 flex-column '>
//                     <label>Name:
//                         <input 
//                         type='text'
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}>
//                         </input>
//                     </label>
                    
//                 </div>
//                 <button  className="btn btn-info m-5 mt-1" type='submit'>Add Person</button>
//             </form>
//             {showModel && <Model/>}
//             {
//                 people.map((p)=>{
//                     const {id,firstName}=p
//                     return(
//                         <>
//                             <div className="d-flex m-3" key={id}>
//                                 <h1>{firstName}</h1>
//                             </div>
//                         </>
//                     )
//                 })
//             }
//         </>
//     )
// }
// export default Redu



import React from 'react'
import {useState,useReducer} from 'react'
import Model from './model'
const reducer=(action,state)=>{}
const initialState={
    people:[],
    isModel:false,
    modalContent:"Hey Ashim"
}
const Redu=()=>{
    const [name,setName]=useState('')
    // const[people,setPeople]=useState([{firstName:"ashim",id:"123"},
    //             {firstName:"Car",id:"456"}])
    // const[showModel,setModel]=useState(false)
    const [state,dispatch]=useReducer(reducer,initialState)
    const handelSubmit=(e)=>{
        e.preventDefault()
        if(name){
           
        }
        else{
            
        }
    }
    return(
        
        <>
            <form onSubmit={handelSubmit}>
                <div className='d-flex m-4 mb-0 flex-column '>
                    <label>Name:
                        <input 
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}>
                        </input>
                    </label>
                    
                </div>
                <button  className="btn btn-info m-5 mt-1" type='submit'>Add Person</button>
            </form>
            {state.isModel && <Model/>}
            {
                state.people.map((p)=>{
                    const {id,firstName}=p
                    return(
                        <>
                            <div className="d-flex m-3" key={id}>
                                <h1>{firstName}</h1>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}
export default Redu