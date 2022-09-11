export const reducer=(state,action)=>{
    if(action.type === "TESTING"){
        const newPeople =[...state.people,action.payload]
        return{
            ...state,
            people:newPeople,
    isModel:true,
    modelContent:"Item Added",
        }
        
    }
    if(action.type==="noVal"){
        return {...state,isModel:false}   
    }
    if(action.type==="closeModel"){
        return{...state,isModel:false}
    }
    if(action.type==='remove'){
        const newP= state.people.filter((p)=>(p.id!==action.payload))
        return{...state,people:newP}
    }
    else{
        return state
    }
    
}