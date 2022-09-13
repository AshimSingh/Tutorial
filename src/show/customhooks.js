import React from 'react'
import {useState,useEffect} from 'react'
import {useFetch} from './useFetch'
const url = "https://picsum.photos/v2/list"
const Hook=()=>{
    const{product,isLoading}=useFetch(url)
    console.log(product)
    return(
        <>
            {isLoading?<h2>Loading...</h2>:<h2>Data</h2>}
        </>
    )
}
export default Hook