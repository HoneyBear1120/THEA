import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {imgBaseUrl} from '../../ApiController/baseUrl';


function Category(props) {
    const activeIs = props.history?.location?.pathname === (`/create_form/${props.template_name}`)
    return (
        <Link className={`dropdown-item align-items-center d-flex ${activeIs ? "active-cate" : ''}`} to={{pathname:`/create_form/${props.template_name}`, icon:props.icon, preventCollectionReloading:true}} replace> 
            
            <img src={imgBaseUrl+props.icon} className="small_icon doller_icon" />
            {/* <span className="text-truncate pr-2" title="Bank Account">Bank Account</span> */}
            <span className="text-truncate pr-2 mid-laptop-none"> {props.name} </span>
            <span className="text-truncate pr-2 mid-laptop-block hidden">{props.name}</span>
        </Link>
    )
}

export default withRouter(Category)
