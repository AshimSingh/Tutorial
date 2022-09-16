import React from 'react'
import PropTypes from 'prop-types'
const Show=({id,author,download_url})=>{
    return(
        <>  
            <div className='d-flex flex-column m-4 justify-content-center'>
                <img src={download_url} alt={author} style={{width:'400px'} }></img>
                <h3 >{author}</h3>
                <h5>${id}</h5>
            </div>
        </>
    )
}
Show.propTypes={
    id:PropTypes.number.isRequired,
    download_url:PropTypes.string.isRequired,
}
Show.defaultProps={
    id:new Date().getTime().toString,
    download_url:""
}
export default Show