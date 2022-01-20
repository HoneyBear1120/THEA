import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Forgotpassword extends Component {
    render() {

        return (
            <>
               
                    <div className="bg-cover h-100 min-vh-100">
                        <div className="container-fluid transform-center sign_form max-width-600 bg-white border-radius box-shadow">
                            <div className="row ">
                                <div className="col-12  align-self-center">
                                <h1 className="font-size-34 text-center mb-3 "> Forgot password? </h1>
                                  <p className="text-muted text-center mb-5 font-size-16"> Enter the email address you used when you created an account and we will send you instructions to reset your password.   </p> 
                                
                                    <form>
                                        <div className="form-group">
                                            <label>Your email</label>
                                            <input type="email" className="form-control form-control-lg"  placeholder="Enter your email address" />
                                         </div>
                                     
                                
                                        <Link to="/Otp" className="btn btn-lg btn-block btn-primary mt-5 font-size-18">
                                        Submit
                                        </Link>
                                        <Link to="/#" className="text-primary d-block text-center mt-4 font-size-16 mb-0"> <span class="fe fe-chevron-left mr-2 top-1 position-relative"></span><span className="text-primary">Back to Sign in</span> </Link>
                                    </form>
                                </div>
                            
                            </div> 
                        </div>
                </div>
            </>
        )
    }
}