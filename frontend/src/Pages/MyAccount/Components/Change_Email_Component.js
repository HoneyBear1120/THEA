import React from 'react';
import Spinner from '../../Components/Spinner';
import Notification from '../../Components/Notification';
import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import * as yup from 'yup';
import { RequestCreator } from '../../../ApiController/baseUrl';
import { useState, useEffect } from 'react';

let initialValues = {
    email: ''
}

let validationSchema = yup.object().shape({
    email: yup.string().email('You must enter a valid email address').max(50, 'Email must be less than 80 characters').required('You must enter a valid email address')
})

function Change_Email_Component() {
    const [isInputDisbled,setInputDisabled ] = useState(true);
    const [loading, setLoading] = useState(false)
    const dispatcher = useDispatch();
    const [alert, setAlert] = useState(false)
    const inputEmail = React.useRef('');

    useEffect(() => {
        if (alert) setTimeout(() => {
            setAlert(false)
        }, 5000)
    }, [alert])


    const handleSubmit = (value, onSubmitProps) => {
        setLoading(true)
        inputEmail.current = value.email;
        RequestCreator('POST', '/users/EmailChange', value, localStorage.getItem('token')).then((response) => {
            if(response.data.status){
                let values = Object.assign({}, user[0]);
                values.emailID = value.email
                setAlert(true)
                //  dispatcher({ type: 'LOGIN', payload: values })
                //console.log(response)
    
                setLoading(false)
                onSubmitProps.resetForm()
                setInputDisabled(true)
            }
            else{
                alert('Error occured, try later!')
            }
        }).catch(error => {
            setLoading(false)
        })
    }

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: handleSubmit,
        validationSchema: validationSchema

    })

    let user = useSelector(state => state.user.userInfo)


    return (

        <div className="cs_card_style element" id="email_section">
            <div className="card-header card_header_padding">

                <div className="row align-items-top">
                    <div className="col">
                        <h4 className="title_headers mb-0">Email</h4>
                    </div>
                </div>


            </div>

            <form onSubmit={formik.handleSubmit}>
                <div className={`card-body ${isInputDisbled?'cu-view1':''}`}>
                    <p className="text-muted  mb-0">Your current email address is <strong>  {user.length > 0 ? user[0].emailID : 'wendy123@gmail.com'} </strong></p>
                    <div className="row align-items-center mt-3 mob-mx-0">
                        <div className="col-sm-5 col-lg-5 col-md-4 col-xl-3 mob-px-0">
                            <label className="label_title mb-0 mob-mb-10">New email address</label>
                        </div>
                        <div className="col-lg-7 col-sm-7 col-md-8 col-xl-9">
                            <div className="row">
                                <div className="col-sm-12 p-0">
                                    <input disabled={isInputDisbled} onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} type="text" id="email" name="email" className={`${formik.errors.email && formik.touched.email ? 'border border-danger' : ''} left_cs_input f_out`} placeholder="Email" />
                                    <p className="text-danger" style={{height:"16px"}}>{formik.errors.email}</p>
                                </div>
                            </div>

                        </div>
                       { isInputDisbled ?
                       <div className="col-sm-12 text-right pt_25 pr-0">
                            <button type="button" onClick={()=>{setInputDisabled(false)}} className="btn btn-primary cs_btn_size p_35x">
                            Edit
                            </button>
                        </div>

                       :<div className="col-sm-12 text-right pt_25 pr-0">
                            <button className="btn btn-light cs_btn_size mr-3 p_35x" type="button" onClick={()=>{ setInputDisabled(true);formik.handleReset();}}>
                                <span className="sr-only"></span>
                                Cancel
                            </button>

                            <button type="submit" disabled={!(formik.dirty && formik.isValid) || loading} className="btn btn-primary cs_btn_size p_35x">
                                {loading ? <Spinner color="text-light  spinner-border-sm"></Spinner> : 'Save'}
                            </button>
                        </div>}
                    </div>
                </div>
            </form>

            <Notification type="bg-success" message={`Your email has been successfully updated! Please use this email ${inputEmail.current} next time you sign in.`} active={alert} ></Notification>

        </div>


    )
}

export default Change_Email_Component
