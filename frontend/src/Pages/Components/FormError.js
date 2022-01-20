import React from 'react'

function FormError(props) {
    return (
        <span className="text-danger font-italic ">
           {props.message}
        </span>
    )
}

export default FormError
