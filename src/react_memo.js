import React from 'react'
import {useState,useEffect,useCallback,useMemo} from 'react'
import { useFetch } from './show/useFetch'
const url = "https://picsum.photos/v2/list"

const Memo=()=>{
    const [count,setCount]=useState(0)
    const {product,isLoading}=useFetch(url)
    useEffect(()=>{
        console.log('List called')
    })
    return(
        <>
            <h4>
                Count: {count}
            </h4>
            <button onClick={()=>{setCount(count+1)}}>add count</button>
            {
                product.map((pro)=>{
                    return(
                        <SingleProduct {...pro}></SingleProduct>
                    )
                })
            }
            
        </>
    )
}

function SingleProduct({id,author}){
    useEffect(()=>{
        console.count("Single Product called.")
    })
    return(
        <>
            <h1 className='m-4'>{author}</h1>
        </>
    )
}
export default Memo