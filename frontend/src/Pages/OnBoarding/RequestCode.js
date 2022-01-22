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

export default function RequestCode() {

    const [status, toggleStatus] = useState(false);
    const [loader, setloader] = useState(false)
    const [error, setError] = useState('')
    const [alert, setAlert] = useState({
        isMounted: false,
        type: '',
        message: '',
        color: ""
    });
    const [signMail, setSignMail] = useState('');

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
            setSignMail(history.location.state.email);
            setAlert({ isMounted: true, type: history.location.state.type, message: history.location.state.message, color: history.location.state.color })
            setTimeout(() => {
                history.push({
                    state: {
                        message: "",
                        type: ""
                    }
                })
            }, 1000)
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

        Login(`/users/RequestCode`, value).then(result => {

            dispatcher({ type: 'CHANGE_PAGE', payload: 'Otp' })
            setloader(false)
            history.push({
                pathname: '/Otp',
                state: {
                    email: signMail
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
                            <h1 className="display-4 text-center mt-3 mb-3">Request a new verification code</h1>
                            <p className="text-muted text-center mb-5">
                                Please enter the email address where you'd like to <br /> receive the new verification code.
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

                                        <button
                                            disabled={!formik.isValid}
                                            type="submit"
                                            className="btn btn-lg btn-block btn-primary mb-3">
                                            {loader ? <Spinner color="text-light  spinner-border-sm " /> : 'Request'}
                                        </button>

                                        <p className="mb-0 text-center"> <Link to="/"> &#60; &nbsp;&nbsp; Back to Sign in</Link></p>
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
