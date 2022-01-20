import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { imgBaseUrl } from '../../ApiController/baseUrl';
import { CATEGORY_TO_ELLIPSIZE } from '../FormTemplates/utils';


function Usercategory(props) {

  const ellipsize = CATEGORY_TO_ELLIPSIZE.findIndex((name)=>name===props.template_name.toLowerCase())===-1?false:true
   const activeIs = props.history.location.pathname === (`/view_form/${props.userCategoryId}`)
    return (
      <Link to={{pathname:`/view_form/${props.userCategoryId}`, preventCollectionReloading:true}} replace>
        <li className={`nav-item ${activeIs ? "active-cate ": ""}`}>
        <div className="list-group-item text-reset border-0">
          <div className="row align-items-center ty-2">
            <div className="col-auto curent-fill">
              {/* <i class="fe fe-user"></i> */}
              <div className="img_icon_box">
                <img
                  src={activeIs ? `/${props.icon}` : `${imgBaseUrl+props.icon}`
                  }
                  className="img-fluid"
                />              
              </div>
            </div>
            <div className="col ml-n2">
              <h5 className="mb-0 no-break"> {props?.title}</h5>
             {ellipsize? 
              <p className="mb-0 text-light-gray font-10"> {props.subTitle!=null&& `${props.subTitle.slice(0,2)}`} <span className="dot">.</span><span className="dot px-1">....</span> <span className="dot pr-1">....</span> <span className="dot">..</span>{props.subTitle!=null&&`${props.subTitle.slice(2,4)}`}  </p>
              :
              <p className="mb-0 text-light-gray font-10">{props.subTitle}</p>
             
            }</div>
          </div>
          </div>
      </li>
      </Link>
    )
}

export default withRouter(Usercategory) 



