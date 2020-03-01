import React from 'react'

const NodataFound = (props)=>{
    return(
        <div className='no-record-found'>
        <h1>{props.title}</h1>
        </div>
    )
}
export default NodataFound;