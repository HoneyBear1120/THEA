import React from 'react';
import Category from '../Components/Category';
// import {imgBaseUrl} from '../../ApiController/baseUrl';

function Categorydropdown(props) {
    return (
        <div className="dropdown-menu navbar-vertical-footer-dropdown hs-unfold-reverse-y collapse py-0 overflow-hidden sm_dropdown_transform" id="navbar-vertical-footer-dropdown">
        <div className="mx-height-600 pd_top_space custom-scroll drop_menu_text pop_up_block pb_0">
           {props.categories.length>0?props.categories.map((category,index)=>{
               return <Category   template_name={category.template_name} formId={category.categoryId}  icon={category.icon} name={category.name} key={index}></Category>

           }):''}

                
        </div>
        <div class="dropdown-divider my-0"></div>
        {/* <a className="dropdown-item align-items-center d-flex" href="#">
            <i className="fe fe-search" />
            <input type="search" className="js-form-search form-control border-0 pl-0" placeholder="Search" aria-label="Search " />
        </a> */}
    </div>
    )
}

export default Categorydropdown
