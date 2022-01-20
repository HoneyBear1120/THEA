import React, { Component } from 'react';
import { NavLink, Link} from 'react-router-dom';
// import Header from '../Pages/Header/Header'
// import Navbar from '../Pages/Header/Navbar'



export default class AllItems extends Component {
    render() {
        return (
            <>


                <nav className="navbar navbar-vertical  navbar-expand-md navbar-light d-none d-xl-block">
                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#allitemsCollapse" aria-controls="allitemsCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse ipad-h-100" id="allitemsCollapse">
                    <ul className="navbar-nav all-item left">
                        <div className="nav-item ">
                            <NavLink className="nav-link font-14" to="/BankAccount"><i class="fe fe-dollar-sign"></i>Bank Account</NavLink>
                        </div>
                        <div className="nav-item">
                            <NavLink className="nav-link font-14" to="/contact"><i class="fe fe-user"></i>Contact</NavLink>
                        </div>
                        <div className="nav-item">
                            <NavLink className="nav-link font-14" to="/CreditCard"><i class="fe fe-credit-card"></i>Credit Card</NavLink>
                        </div>
                        <div className="nav-item">
                            <NavLink className="nav-link font-14" to="/AddDatabase"><i class="fe fe-database"></i>Database</NavLink>
                        </div>
                        <div className="nav-item">
                            <NavLink className="nav-link font-14" to="/DietaryPreferances"><i class="fal fa-concierge-bell"></i>Dietary Preferences</NavLink>
                        </div>
                        <div className="nav-item">
                            <NavLink className="nav-link font-14" to="/Document"><i class="fe fe-file"></i>Document</NavLink>
                        </div>
                        <div className="nav-item">
                            <NavLink className="nav-link font-14" to="/AddDriveLicense"><i class="fe fe-mail"></i>Driver License</NavLink>
                        </div>
                        <div className="nav-item">
                            <NavLink className="nav-link font-14" to="/EmailContact"><i class="fe fe-mail"></i>Email Account</NavLink>
                        </div>
                        <div className="nav-item">
                            <Link className="nav-link font-14" to="#"><i class="fal fa-hand-receiving"></i>Insurance</Link>
                        </div>
                        <div className="nav-item">
                            <NavLink className="nav-link font-14" to="/login"><i class="fe fe-log-in"></i>Login</NavLink>
                        </div>
                        <div className="nav-item">
                            <Link className="nav-link font-14" to="#"><i class="fe fe-plus-square"></i>Medical</Link>
                        </div>
                        <div className="nav-item">
                            <NavLink className="nav-link font-14" to="/Membership"><i class="fe fe-users"></i>Membership</NavLink>
                        </div>
                        <div className="nav-item">
                            <NavLink className="nav-link font-14" to="/AddNote"><i class="fe fe-book"></i>Note</NavLink>
                        </div>

                        <div className="nav-item">
                            <NavLink className="nav-link font-14" to="/AddOutdoorLicense"><i class="fal fa-fish"></i>Outdoor License</NavLink>
                        </div>

                    </ul>
                    <div className="mt-auto"></div>
                    {/* <div className="navbar-user d-none d-md-flex">
                        <form>
                            <div className="search-item ">
                                <input type="text" name="search" className="form-control border-0 pl-4 h-25" placeholder="Search" />
                                <span><i class="fal fa-search"></i></span>
                            </div>
                        </form>
                    </div> */}
                </div>
</nav>



            </>
        )
    }

}