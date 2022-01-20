import React from 'react';
import { Element } from "react-scroll";
import Spinner from '../../Components/Spinner';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useState } from 'react';
import { RequestCreator } from '../../../ApiController/baseUrl';
import { initial_values_for_Change_Password as initialValues } from '../utils';
import { validation_for_Change_Password as validationSchema } from '../utils';
import Notification from '../../Components/Notification';
import { useEffect } from 'react';
import zxcvbn from 'zxcvbn';
import FormError from '../../Components/FormError';
import {ErrorContainer} from '../../Components/errorContainer';

export default function Change_Password() {

    
    const [loading, setLoading] = useState(false);
    const [isInputDisbled,setInputDisabled ] = useState(true);
    const [save, setSave] = useState(false);
    const [alert, setAlert] = useState({
        type: '',
        message: ''
    })
    const [getPasswordToggle1, setPasswordToggle1] = useState(false);
    const [getPasswordToggle2, setPasswordToggle2] = useState(false)

   const [pass,setPass]=useState({
       type:'',
       score:0
   });


    useEffect(() => {
        if (alert.type.length > 0) {
            setTimeout(() => {
                setAlert({ type: '', message: '' })
            }, 4000)
        }
    }, [alert])

    const handleSubmit = (value, onSubmitProps) => {
        console.log(value)
        setLoading(true)

        RequestCreator('POST', '/users/changePassword', value, localStorage.getItem('token')).then(response => {
            if(response.data.status)
                setAlert({ type: 'bg-success', message: 'Password successfully updated! Please use this password the next time you sign in.' })
            setLoading(false)
        }).catch(error => {
            console.log(error);
            setLoading(false)
            setAlert({ type: 'bg-danger', message: `${error.response.data.msg}` })

        })
        setPass({ type:'bg-success',score:0})
        onSubmitProps.resetForm()
    }


    const handlePasswordFeild = (e, formik) => {
       const testResult=zxcvbn(e.target.value)
        const score=testResult.score*100/4;
        if(score>50){
            setPass({ type:'bg-success',score:score})
        }else if(score>25||score<50) setPass({ type:'bg-warning',score})
        else if(score>0||score<25) setPass({ type:'bg-danger',score})

       
      formik.handleChange(e)


  
    }

    return (
        <Element className="cs_card_style element" id="change_password_section">
            <div className="card-header card_header_padding">
                <h4 className="title_headers mb-0">Change your password</h4>
                <Notification type={alert.type} message={alert.message} active={alert.type.length > 0 && alert.message.length > 0} ></Notification>
            </div>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit} validateOnMount >
                {(formik => (
                    <Form>

                        <div className={`card-body ${isInputDisbled?'cu-view1':''}`}>
                           
                            <div className="row align-items-center margin-bottom">
                                <div className="col-sm-5 col-lg-5 col-md-12 col-xl-3">
                                    <label className="label_title mb-0">Current password</label>
                                </div>
                                <div className="col-lg-7 col-sm-7 col-md-12 col-xl-9">
                                    <div className="row">
                                        <div className="col-sm-12 p-0">
                                            <Field disabled={isInputDisbled} type="password" id="currentpassword" autoComplete="on" name="currentpassword" className="form-control inp_disc left_cs_input f_out" placeholder="" />
                                        </div>
                                    </div>
                                    <ErrorContainer>
                                                <ErrorMessage name="currentpassword" className="text-danger"  render={msg=><FormError message={msg} ></FormError> } />
                                            </ErrorContainer>
                                </div>
                            </div>
                            <div className="row align-items-top margin-bottom">
                                <div className="col-sm-5 col-lg-5 col-md-12 col-xl-3">
                                    <label className="label_title mb-0">New password</label>
                                </div>
                                <div className="col-lg-7 col-sm-7 col-md-12 col-xl-9">
                                    <div className="row">
                                        <div className="col-sm-12 p-0 margin-bottom input-group ">
                                            <input disabled={isInputDisbled} onChange={(e)=>handlePasswordFeild(e,formik)} onBlur={formik.handleBlur} value={formik.values.newpassword} type={getPasswordToggle1?'text':'password'} id="newpassword" name="newpassword" autoComplete="off" className="form-control left_cs_input f_out" placeholder="" />
                                         <div className="input-group-append">
                                            <span className="input-group-text">
                                                <i className={`fe ${getPasswordToggle1?'fe-eye eye-icon-color':'fe-eye-off eye-off-icon-color'} cursor-pointer`}  onClick={()=>{setPasswordToggle1(!getPasswordToggle1)}} />
                                            </span>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-12 p-0">
                                            <div className="progress progress-sm ">
                                                <div className={`progress-bar ${pass.type}   ` } role="progressbar" style={{ width:`${pass.score}%` }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                        <ErrorContainer>
                                            <ErrorMessage name="newpassword"   render={msg=><FormError message={msg} ></FormError> } />
                                        </ErrorContainer>


                                </div>
                               
                            </div>
                            <div className="row align-items-top">
                                <div className="col-sm-5 col-lg-5 col-md-12 col-xl-3">
                                    <label className="label_title mb-0">Confirm new password</label>
                                </div>
                                <div className="col-lg-7 col-sm-7 col-md-12 col-xl-9">
                                    <div className="row">
                                        <div className="col-sm-12 p-0 input-group">
                                            <input disabled={isInputDisbled} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmPass} type={getPasswordToggle2?'text':'password'} id="confirmPass" name="confirmPass" autoComplete="off" className="form-control left_cs_input f_out" placeholder="" />
                                            <div className="input-group-append">
                                            <span className="input-group-text">
                                                <i className={`fe ${getPasswordToggle2?'fe-eye eye-icon-color':'fe-eye-off eye-off-icon-color'} cursor-pointer`} onClick={()=>{setPasswordToggle2(!getPasswordToggle2)}} />
                                            </span>
                                        </div>
                                        </div>
                                    </div>
                                    <ErrorContainer>
                                        <ErrorMessage name="confirmPass"   render={msg=><FormError message={msg} ></FormError> } />
                                    </ErrorContainer>
                                        <div className="col-12 mt-4 p-0">

                                            <p className="mb-2 font-weight-bold  text-black">Password requirements </p>

                                            <p className=" mb-2 font-weight-bold  text-light-gray "> Ensure that these requirements are met: </p>
                                            <ul className="text-muted pl-4 mb-0">
                                                <li className="font-weight-bold  text-light-gray ">  Minimum 8 characters long</li>
                                                <li className="font-weight-bold  text-light-gray "> At least one lowercase character</li>
                                                <li className="font-weight-bold  text-light-gray "> At least one uppercase character </li>
                                                <li className="font-weight-bold  text-light-gray ">At least one number, symbol, or whitespace character </li>
                                            </ul>
                                        </div>
                                </div>
                            </div>
                            <div className="row sm_row">
                              { isInputDisbled?
                                <div className="col-sm-12 text-right pt_25 pr-0">
                                    <button type="button" className="btn btn-primary cs_btn_size p_35x" onClick={()=>{setInputDisabled(false)}} >
                                       Edit
                                    </button>
                                </div>
                              : <div className="col-sm-12 text-right pt_25 pr-0">
                                    <button type="button" onClick={() =>{ setPass({ type:'bg-danger',score:0})
                                    setInputDisabled(true);
                                     formik.handleReset();
                                }} className="btn btn-light cs_btn_size mr-3 p_35x">

                                        <span className="sr-only"></span>Cancel
                                    </button>
                                    <button type="submit" disabled={!formik.isValid} className="btn btn-primary cs_btn_size p_35x" >

                                        {loading ? <Spinner color="text-light  spinner-border-sm"  ></Spinner> : 'Save'}
                                    </button>
                                </div>}
                            </div>

                        </div>

                    </Form>
                ))}
            </Formik>

        </Element>
    )

}