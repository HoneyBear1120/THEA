import React from 'react';
import {Link} from 'react-scroll';

function Nav_Components() {
    return (
        <div className="col-12 col-md-12 col-lg-3 p-0 sm_menu_list_none">
        <div className="card sidebar position-sticky">
            <div className="card-body">
                <ul className="navbar-nav" id="side_liast">
                    <li className="nav-item">
                        <Link className="nav-link text-black font-weight-bold c_pointer" activeClass="active" to="basic_information_section" spy={true} smooth={true} offset={-70} duration={500}>
                            <i className="fe fe-user nav-icon" /> Basic information
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-black font-weight-bold c_pointer" activeClass="active" to="email_section" spy={true} smooth={true} offset={-70} duration={500}>
                            <i className="fe fe-mail nav-icon" /> Email
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-black font-weight-bold c_pointer" activeClass="active" to="change_password_section" spy={true} smooth={true} offset={-69} duration={500}>
                            <i className="fe fe-lock" /> Change your password
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-black font-weight-bold c_pointer" activeClass="active" to="delete_account_section" spy={true} smooth={true} offset={-69} duration={500}>
                            <i className="fe fe-trash-2 nav-icon" /> Delete account
                        </Link>
                    </li>
                </ul>

            </div>
        </div>
    </div>
    )
}

export default Nav_Components
