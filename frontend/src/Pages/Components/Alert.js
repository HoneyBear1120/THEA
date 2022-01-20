import React from 'react'

function Alert(props) {
    return (
        <div className={`${props.type} alert text-center  mt-5`} role="alert" style={{backgroundColor : props.color}}>
         <h5 className="text-light p-1 mb-0" >{props.message}</h5> 

      </div>
    )
}

export default Alert
