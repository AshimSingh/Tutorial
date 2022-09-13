import React from 'react'
import { useState,useEffect } from 'react'
export const useFetch=(url)=>{
    const [product,setProduct]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    const getProduct = async()=>{
        const resp = await fetch(url)
        const response = await resp.json()
        setProduct(response)
        setIsLoading(false)
    }
    useEffect(()=>{
        getProduct()
    },[url])
    return{ product,isLoading }
}
