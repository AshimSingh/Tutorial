import React from 'react'
import { useFetch } from './useFetch'
import Show from './showProp'
const url = "https://picsum.photos/v2/list"
const Prop=()=>{
    const {product,isLoading}=useFetch(url)
    return(
        <>
            {isLoading?<h1>Loading...</h1>:<h1>Prop</h1>}
            
            {
                product.map((m)=>{
                    return(
                        <>
                            <Show {...m}></Show>
                        </>
                    )
                })
               
            }
        </>
    )
}
export default Prop