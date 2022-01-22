import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, ErrorMessage, Form } from 'formik'
import { withRouter } from 'react-router-dom';
import Spinner from '../Components/Spinner';
import { Create } from '../../ApiController/baseUrl';
import { initialValues_CreateAccount, validationSchema_CreateAccount } from './utils'
import Alert from '../Components/Alert';
import FormError from '../Components/FormError';
import {ErrorContainer} from '../Components/errorContainer'


class CreateAccount extends Component {

    state = {
        loader: false,
        // password_toggle_1: false,
        // password_toggle_2: false,
        error:{
            isMounted:false,
            type:'',
            message:'',
            color: ""
        }
    }

    componentDidUpdate(){
        if(this.state.error.isMounted){
            setTimeout(() => {
                this.setState({ error: {
                    isMounted:false,
                    type:'',
                    message:'',
                    color : ""
                } })

            },3000)
        }
    }

    // passwordToggle1 = () => {
    //     this.setState({ password_toggle_1: !this.state.password_toggle_1 })
    // }

    // passwordToggle2 = () => {
    //     this.setState({ password_toggle_2: !this.state.password_toggle_2 })
    // }



     onSubmit = (value) => {
        this.setState({ loader: true })
          let obj={
            firstName:value.firstName,
            lastName:value.lastName,
            email: value.email,
            // password: value.password
          }
          
        //  console.log(obj);
    
        Create(`/users/CreateAccount`, obj).then(result => {
            
            console.log(result);

            this.props.history.push({
                pathname:'/',
                state:{
                    type:'alert-success',
                    message:'Account Created Successfully! Please check your email for a code to verify your account.',
                    // color: "#00c9a8"
                }
            })
    
        }).catch(error => {
    

            // console.log(error);

            this.setState({ error: {
                isMounted:true,
                type:'alert-danger',
                message:error.response.data.message
            } })


        }).then(result => {
            this.setState({ loader: false })
    
        })
    
    
    }
    render() {

        return (

            <div className="bg-cover h_100 d_grid input_kit" >
                <div className="center_signin_container">
              
                    <div className="w-100">
                         
                        {/* <div className="card px-5 mb-0"> */}
                        <div className="px-5 mb-0">
                            <div className="col-12 col-md-12 col-xl-12 my-5 bg-white">  
                        
                                <h1 className="display-4 text-center mb-3">
                                    Create your account
                                </h1>
                                
                                <p className="text-muted text-center mb-5">
                                    Already have an account with Thea? <Link to="/">Sign In</Link>
                                </p>
                                <Formik initialValues={initialValues_CreateAccount} validationSchema={validationSchema_CreateAccount} onSubmit={this.onSubmit} validateOnMount >
                                    {(formik) => (
                                        <Form>


                                            <div className="form-group">
                                                <label>Full name</label>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <Field id="firstName" name="firstName" type="text" className={`form-control font-weight-400 input_kit ${formik.touched.firstName && formik.errors.firstName ? 'border border-danger' : ''} `} placeholder="Wendy" />
                                                        <ErrorContainer>
                                                            <ErrorMessage name="firstName" className="text-danger" render={msg=><FormError message={msg} ></FormError>}/>
                                                        </ErrorContainer>
                                                    </div>
                                                    <div className="col-6">
                                                        <Field id="lastName" name="lastName" type="text" className={`form-control font-weight-400 input_kit ${formik.touched.lastName && formik.errors.lastName ? 'border border-danger' : ''} `} placeholder="Appleseed" />
                                                        <ErrorContainer>
                                                        <ErrorMessage name="lastName" className="text-danger" render={msg=><FormError message={msg} ></FormError>}/>
                                                        </ErrorContainer>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="form-group">
                                                <label className='label-font'>Your email</label>
                                                <Field id="email" name="email" type="email" className={`form-control font-weight-400 input_kit ${formik.touched.email && formik.errors.email ? 'border border-danger' : ''} `} placeholder="wendy@example.com" />
                                                <ErrorContainer>
                                                <ErrorMessage name="email" className="text-danger" render={msg=><FormError message={msg} ></FormError>}/>
                                                </ErrorContainer>
                                            </div>
                                            {/* <div className="form-group">
                                                <label className='label-font'>Password</label>
                                                <div className="input-group input-group-merge">
                                                    <Field name="password" id="password" type={this.state.password_toggle_1 ? 'text' : 'password'} className={`form-control form-control-appended font-weight-400 input_kit ${formik.touched.password && formik.errors.password ? 'border border-danger' : ''}`} placeholder="8+ characters required" />
                                                    <div className="input-group-append">
                                                        <span className="input-group-text">
                                                            <i className={`fe ${this.state.password_toggle_1?'fe-eye eye-icon-color':'fe-eye-off eye-off-icon-color'} cursor-pointer`} onClick={this.passwordToggle1} />
                                                        </span>
                                                        
                                                    </div> 
                                                </div>
                                                <ErrorContainer>
                                                    <ErrorMessage name="password" className="text-danger"   render={msg=><FormError message={msg} ></FormError> } />
                                                </ErrorContainer>
                                            </div>
                                           
                                            <div className="form-group">
                                                <label className='label-font'>Confirm Password</label>
                                                <div className="input-group input-group-merge">
                                                    <Field type={this.state.password_toggle_2?'text':'password'} id="cnfpassword" name="cnfpassword"  className={`form-control form-control-appended font-weight-400 input_kit ${formik.touched.cnfpassword && formik.errors.cnfpassword ? 'border border-danger' : ''}`} placeholder="8+ characters required" />
                                                    <div className="input-group-append">
                                                        <span className="input-group-text">
                                                            <i className={`fe ${this.state.password_toggle_2?'fe-eye eye-icon-color':'fe-eye-off eye-off-icon-color'} cursor-pointer`} onClick={this.passwordToggle2} />
                                                        </span>
                                                    </div>
                                                </div>
                                                <ErrorContainer>
                                                <ErrorMessage name="cnfpassword" render={msg=><FormError message={msg} ></FormError> } />
                                                </ErrorContainer>
                                            </div> */}
                                           
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox cs_check_input checklist-control my-4">
                                                    <Field className="custom-control-input " id="agree" name="agree" type="checkbox" value="true" />
                                                    <label className="custom-control-label" htmlFor="agree" >
                                                        <span className="text-muted ml-2 text-red">
                                                        I agree to the <a href="https://theadev-app-assets.s3.amazonaws.com/attachments/file-1638508839319c0cb5a70-53f8-11ec-bad7-4ddcbe67c069.pdf" target="_blank">Terms of Use</a> &  <a href="https://theadev-app-assets.s3.amazonaws.com/attachments/file-1638508839319c0cb5a70-53f8-11ec-bad7-4ddcbe67c069.pdf" target="_blank">Privacy Policy</a>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                            <button type="submit" disabled={formik.isValid ? false : true} className="btn btn-lg btn-block btn-primary">
                                                {this.state.loader ? <Spinner color="text-light  spinner-border-sm "></Spinner> : 'Create Account'}
                                            </button>
                                        </Form>
                                    )

                                    }


                                </Formik>
                                <div className="mt-2" style = {{height:"8vh",}}> 
                                {this.state.error.isMounted&&
                              <Alert type="alert-danger p-3 rounded" message={this.state.error.message}></Alert>  }
                        </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>

        )
    }
}


export default withRouter(CreateAccount);