import React from "react"
import img from "../../"

const DownloadIcon = (props) => {
    return (
        <span className="bookmark_icon" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={props.onClick}>
            <img src={require('../../Assets/images/drop_logo.png').default} className="temp_icon hover_hide c_pointer"/>
            <img src={require('../../Assets/images/drop_hover.png').default} className="temp_icon hover_show c_pointer"/>
        </span>
    )
}

export default DownloadIcon