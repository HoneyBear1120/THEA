import React from 'react'

function Notification(props) {
    return (
        <div style={{ display: 'none' }} className={`err_msg_box  ${props.type} ${props.active === true ? 'd-block' : 'd-none'}`}>
        <div className="d-flex align-items-center justify-content-between">
            <p className="mb-0 text-white"> {props.message} </p>
            <div className="text-white ml-auto" aria-hidden="true">&times;</div>
        </div>
    </div>
    )
}

export default Notification
