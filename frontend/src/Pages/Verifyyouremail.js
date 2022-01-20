import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import email_img from '../Assets/images/email_icon.svg'
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default class Verifyyouremail extends Component {


    state = {
        active: false,
    }

    onClickHandle = () => {
        this.setState({ active: true }, () => {
            setTimeout(() => this.setState({ active: false }), 2000);
        })
    }


    render() {
        const notify = () => toast.success("New code has been sent!",{
            position:"top-center",
            progress: undefined,
        });
        const { active } = this.state
        return (
            <>
                <div className="bg-cover h_100 h_100 d_grid input_kit" >
                    {/* <template> */}
                    <div className="center_login_container">
                        <div className="w-100">
                            <div className="card px-5 mb-0">
                                <div className="col-12 col-md-12 col-xl-12 my-5 bg-white">
                                <div className="text-center mb-5"><img src={email_img} /></div>
                                    <h1 class="display-4 text-center mb-3">Verify your email</h1>
                                    <p class="text-muted text-center mb-5">
                                        <Link to="dashboard" className="text-muted">We've sent a link to your email address:<br/>
                                        <strong>mark@gmail.com</strong><br/>
                                        Please follow the link inside to continue.</Link>
                                        </p>
                                    <form>
                                        <p className="text-center mb-0">Didn't receive an email? <span className="text_clr_prime c_pointer "  onClick={e => this.onClickHandle()}>Resend</span> </p>
                                        <p style={{display:'none'}} className={`text-success text-success text-center mb-0 mt-2 ${active === true ? 'd-block' : 'd-none'}`}>A new link has been sent!</p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </template> */}
                    {/* <div className="container py-5 py-sm-7">
                        <div className="max-width-600">
                            <div className="card card-lg">
                                <div className="card-body">
                                    <div className="text-center">
                                        <div className="mb-5">
                                            <img src={email_img} />
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <div className="mb-5">
                                        <h1 className="display-4"> Verify your email </h1>
                                          <p className="mb-1"> We've sent a link to your email address:</p>
                                          <span class="d-block text-dark font-weight-bold mb-1">mark@gmail.com</span>
                                          <p> <a href="dashboard" className="text-color">Please follow the link inside to continue. </a></p>
                                        </div>
                                        <div class="mt-4 mb-3">
                                      <a class="btn btn-primary btn-wide" href="dashboard">Skip now</a>
                                    </div>
                                    <p>Didn't receive an email? <a href="Verifyyouremail">Resend</a></p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <template>
                    <div className="container">
                        {/* <div className={ this.state.active? "alert_msg_resend": "alert_msg_resend active_msg" }>
                            alert error msg
                        </div> */}

                        <div className="row justify-content-center">
                            <div className="col-12 col-md-6 col-xl-5">
                                <div className="card px-5 mb-0">
                                    <div className="col-12 col-md-12 col-xl-12 my-5 bg-white">
                                       <div className="text-center mb-5"><img src={email_img} /></div>
                                       <h1 class="display-4 text-center mb-3">
                                           Verify your email
                                        </h1>
                                            <p class="text-muted text-center mb-5">
                                            <Link to="dashboard" className="text-muted">We've sent a link to your email address:<br/>
                                            <strong>mark@gmail.com</strong><br/>
                                            Please follow the link inside to continue.</Link>
                                            </p>
                                        <form>
                                       
                                        {/* <a href="dashboard" className="btn btn-lg btn-block btn-primary mb-3">
                                        Skip now
                                        </a> */}
                                        <p className="text-center mb-0">Didn't receive an email? <span className="text_clr_prime c_pointer "  onClick={e => this.onClickHandle()}>Resend</span> </p>
                                        <p style={{display:'none'}} className={`text-success text-success text-center mb-0 mt-2 ${active === true ? 'd-block' : 'd-none'}`}>New code has been sent!</p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                          
                        </div> 
                    </div>
                    </template>
                </div>
            <template>




            <div className="bg-cover h_100 d-flex align-items-center">
                    <div className="center_login_container sm_width_100">
                        <div className="card mb-0 bg-white shadow-none" >
                            <div className="login_card_wrapper">
                                <div className="text-center mb-5"><img src={email_img} /></div>
                                       <h1 class="display-4 text-center mb-3">Verify your email</h1>
                                            <p class="text-muted text-center mb-5">
                                            <Link to="dashboard" className="text-muted">We've sent a link to your email address:<br/>
                                            <strong>mark@gmail.com</strong><br/>
                                            Please follow the link inside to continue.</Link>
                                            </p>
                                        <form>
                                       
                                        {/* <a href="dashboard" className="btn btn-lg btn-block btn-primary mb-3">
                                        Skip now
                                        </a> */}
                                        <p className="text-center mb-0">Didn't receive an email? <span className="text_clr_prime c_pointer " onClick={notify}>Resend</span> </p>
                                        
                                        </form>
                            </div>
                        </div>
                    </div>
                </div>

                </template>
            </>
        )
    }
}