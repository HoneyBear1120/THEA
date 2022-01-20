import React from "react"

const PinIcon = (props) => {
    return (<>
     {props.pinned?
     <span className="bookmark_icon ml-3 mr-3" onClick={props.onClick}>
     <img src={require('../../Assets/images/pinned_hpng.png').default} className="temp_icon c_pointer" />
     </span>
     :
        <span className="bookmark_icon ml-3 mr-3" onClick={props.onClick}>
            <img src={require('../../Assets/images/pnned.png').default} className="temp_icon hover_hide  c_pointer" />
            <img src={require('../../Assets/images/pinned_hpng.png').default} className="temp_icon hover_show c_pointer" />
        </span>
        }
    </>
       
    )
}

export default PinIcon