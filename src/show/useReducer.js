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



// // import { type } from '@testing-library/user-event/dist/type'
// import React from 'react'
// import {useState,useReducer} from 'react'
// import Model from './model'
// const reducer=(action,state)=>{
//     if(action.type="TESTING"){
        
//         const newPep =[state.map((p)=>{
//             return{p}
//         }),action.payload]
//         // console.log(state.people)
//         // const newPep =[{id:"1234",firstName:"ashim"},
// // {id:"4221",firstName:"Hari Bahadur"}]
//         // return{
//         //     ...state,
//         //     people:newPep,
//         //     isModel:true,
//         //     modelContent:"Changed model Content"
//         // };
//     throw new Error('No matching action type')
// }
// const initialState={
//     people:[],
//     isModel:false,
//     modelContent:"Initial model content",
// }
// const Redu=()=>{
//     const [name,setName]=useState()
//     const [state,dispatch]=useReducer(reducer,initialState)
//     const handelSubmit=(e)=>{
//         e.preventDefault()
//         if(name){
//             const newName = {firstName:name,id: new Date().getTime().toString()}
//            dispatch({type:"TESTING", payload:newName})
//         }
//         else{
//             dispatch({type:"Random"})
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
//             {state.isModel && <Model modelContent={state.modelContent} />}
//             {
//                 state.people.map((p)=>{
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


// import { useReducer } from "react";
// import ReactDOM from "react-dom/client";

// const initialTodos = [
//   {
//     id: 1,
//     title: "Todo 1",
//     complete: false,
//   },
//   {
//     id: 2,
//     title: "Todo 2",
//     complete: false,
//   },
// ];

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "COMPLETE":
//       return state.map((todo) => {
//         console.log(todo)
//         if (todo.id === action.id) {
//           return { ...todo, complete: !todo.complete };
//         } else {
//           return todo;
//         }
//       });
//     default:
//       return state;
//   }
// };

// function Redu() {
//   const [todos, dispatch] = useReducer(reducer, initialTodos);

//   const handleComplete = (todo) => {
//     dispatch({ type: "COMPLETE", id: todo.id });
//   };

//   return (
//     <>
//       {todos.map((todo) => (
//         <div key={todo.id}>
//           <label>
//             <input
//               type="checkbox"
//               checked={todo.complete}
//               onChange={() => handleComplete(todo)}
//             />
//             {todo.title}
//           </label>
//         </div>
//       ))}
//     </>
//   );
// }
