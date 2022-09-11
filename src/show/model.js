import React, { useEffect } from 'react'
const Model = ({modelContent,closeModel})=>{
    useEffect(()=>{
        setTimeout(()=>{
            closeModel()
        },3000)
    })
    return(
        <>
            <h3 className='bg-danger'>{modelContent}</h3>
        </>
    )
}
export default Model