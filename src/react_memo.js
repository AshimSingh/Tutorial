import React from 'react'
import {useState,useEffect,useCallback,useMemo} from 'react'
import { useFetch } from './show/useFetch'
const url = "https://picsum.photos/v2/list"

const Memo=()=>{
    const [count,setCount]=useState(0)
    const {product,isLoading}=useFetch(url)
    const[cart,setCart]=useState(0)
    const addCart=useCallback(()=>{
        setCart(cart+1)
    },[cart])
    
    useEffect(()=>{
        console.log('List called')
    })
    return(
        <>
            <h4>
                Count: {count}
            </h4>
            <button onClick={()=>{setCount(count+1)}}>add count</button>
            <h1>Cart Item:{cart}</h1>
            {
                product.map((pro)=>{
                    return(
                        <SingleProduct key={pro.id} {...pro} addCart={addCart}></SingleProduct>
                    )
                })
            }
            
        </>
    )
}

const SingleProduct=React.memo(({id,author,addCart})=>{
    useEffect(()=>{
        console.count("Single Product called.")
    })
    return(
        <>
            <h1 className='m-4'>{author}</h1>
            <button className='btn btn-info' onClick={()=>addCart()}>Add to cart</button>
        </>
    )
})
export default Memo