import React from "react";
import { Link } from "react-router-dom";
import { Form, Field, Formik, ErrorMessage } from "formik";
import { Login } from '../../ApiController/baseUrl';
import { useHistory } from "react-router-dom";
import { useState, useEffect } from 'react'
import { initialValues, validationSchema } from './utils';
import Spinner from '../Components/Spinner';
import Alert from '../Components/Alert';
import { useDispatch } from 'react-redux';
import { ErrorContainer } from '../Components/errorContainer'
import FormError from '../Components/FormError';

export default function SignIn() {

  const [status, toggleStatus] = useState(false);
  const [loader, setloader] = useState(false)
  const [error, setError] = useState('')
  const [alert, setAlert] = useState({
    isMounted: false,
    type: '',
    message: '',
    color: ""
  });

  const dispatcher = useDispatch();
  let history = useHistory();


  let handleToggle = () => {
    toggleStatus(!status)
  };


  useEffect(() => {
    //here the get the local storage function.
    const userToken = localStorage.getItem('token');
    if (userToken) {
      history.replace('/dashboard');
      return;
    }

    if (history.location.state) {
      setAlert({ isMounted: true, type: history.location.state.type, message: history.location.state.message, color: history.location.state.color })
      setTimeout(() => {
        history.push({
          state: {
            message: "",
            type: ""
          }
        })
      }, 1000)
      console.log("history", history)
    }

  }, [])


  useEffect(() => {
    if (alert.isMounted) {
      setTimeout(() => {
        setAlert({ isMounted: false })
      }, 3000)
    }
  }, [alert])



  let handleSubmit = (value, onSubmitProps) => {

    setloader(true)

    Login(`/users/SignIn`, value).then(result => {

      dispatcher({ type: 'CHANGE_PAGE', payload: 'Otp' })
      setloader(false)
      history.push({
        pathname: '/Otp',
        state: {
          email: value.email
        }
      })
    }).catch(errors => {
      if (errors.response ?.status == 403) setAlert({ isMounted: true, type: 'alert-danger', message: errors.response.data.msg })
      else setAlert({ isMounted: true, type: 'alert-danger', message: `${errors.message}` })

      setloader(false)
    })
  }


  return (

    <div className="bg-cover d_grid h_100">
      <div className="center_login_container">
        <div className="w-100 mb-">
          {/* <div className="card px-5 mb-0"> */}
          <div className="px-5 mb-0">
            <div className="col-12 col-md-12 col-xl-12 my-5 bg-white">
              <h1 className="display-4 text-center mt-3 mb-3">Sign In</h1>
              <p className="text-muted text-center mb-5">
                Don't have an account yet?{" "}
                <Link to="CreateAccount">Sign up here</Link>
              </p>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                validateOnMount
                onSubmit={handleSubmit}>
                {(formik) => (


                  <Form>

                    <div className="form-group">
                      <label className={` ${formik.touched.email && formik.errors.email ? 'text-danger' : ''}`}>Your email</label>
                      <Field
                        name="email"
                        id="email"
                        type="email"
                        className={`form-control font-weight-400 border_input input_kit ${formik.touched.email && formik.errors.email ? 'border border-danger' : ''}`}
                        // placeholder={formik.touched.email && formik.errors.email ? formik.errors.email : 'email@address.com'}
                        placeholder="email@address.com"
                        autoComplete="true"
                      />
                      <ErrorContainer>
                        <ErrorMessage name="email" className="text-danger" render={msg => <FormError message={msg} ></FormError>} />
                      </ErrorContainer>
                    </div>
                    {/* <div className="form-group">
                      <div className="row">
                        <div className="col">
                          <label>Password</label>
                        </div>
                        <div className="col-auto">
                          <Link
                            to="ForgetPassword"
                            className="form-text small">
                            Forgot password?
                          </Link>
                        </div>
                      </div>
                      <div className="input-group input-group-merge">
                        <Field
                          name="password"
                          id="password"
                          type={status ? 'text' : 'password'}
                          className={`form-control ${formik.touched.password && formik.errors.password ? 'border border-danger' : ''} form-control-appended font-weight-400 border_input border_r-0 input_kit`
                          }
                          placeholder="password"
                          autoComplete="true"

                        />


                        <div className="input-group-append">
                          <span
                            className="input-group-text border__clr"
                            onClick={handleToggle}>
                            <i className="fe fe-eye cursor-pointer" />
                          </span>
                        </div>
                      </div>
                    </div> */}
                    <div className="form-group">
                      <div className="custom-control custom-checkbox checklist-control my-4 form-check">
                        {/* <input type="text" id="remberme" /> */}
                        <Field
                          className="custom-control-input"
                          name="remberme"
                          id="remberme"
                          type="checkbox"
                          value="true"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="remberme">
                          <span className="text-muted ml-2">Remember me</span>
                        </label>
                      </div>
                    </div>
                    <button
                      disabled={!formik.isValid}
                      type="submit"
                      className="btn btn-lg btn-block btn-primary mb-3">
                      {loader ? <Spinner color="text-light  spinner-border-sm " /> : 'Sign In'}
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
        <Alert type={`  ${alert.type} `} color={alert.color} message={alert.message}>  </Alert>
      </div>
    </div>
  )


}
