import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { initialValues_resetPassword as initialValues } from './utils';
import { validationSchema_resetPassword as validationSchema } from './utils';
import { useState } from 'react';
import FormError from '../Components/FormError';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { RequestCreator } from '../../ApiController/baseUrl';
import Spinner from '../Components/Spinner';
import Alert from '../Components/Alert';
import { useParams } from 'react-router';


export default function ResetPassword() {

    
    const [loader, setLoader] = useState(false);
    const params=useParams();
    let history = useHistory();
    const [error, setError] = useState({
        isMounted:false,
        message:''
    });

    useEffect(() => {
     console.log(params)
     if(!params?.id){
         history.push('/forgotPassword')
     }

    
    }, [])

    useEffect(()=>{
   
        if(error.isMounted)setTimeout(()=>{
             setError({...error,isMounted:false})
        },4000)



    },[error.isMounted])


    const [toggle, setToggle] = useState({
        field1: false,
        field2: false
    })

    let formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (value) => {

            // console.log(value, 'is here');
            setLoader(true);

            let data={
                newpassword:value.newpassword,
                token:params.id
            }

            RequestCreator('POST',`/users/ResetPassword`,data).then((response) => {

               console.log(response);
               history.push({
                   pathname:'/',
                   state:{
                   type:'alert-success',
                   message:'Password Reset was Successfull'
                   }
               })
               
               setLoader(false)

            }).catch((error) => {

                 console.log(error.response)
                 console.log(error.response.status)
                 history.push({
                    pathname:'/',
                    state:{
                    type:'alert-danger',
                    message:error.response?.data?.msg
                    }
                })
                  setLoader(false)
                
            })

        },
        validateOnMount:true
    })


    //handles OTP and chnages value from the formik side
    function handleOtpChange(value, formik) {
        console.log(value);
        formik.setFieldValue('otp', value, false)
    }



    return (


        <div className="bg-cover h-100 min-vh-100 flex-column d-flex justify-content-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6 col-xl-5">
                        <div className="card px-5 mb-0">
                            <div className="col-12 col-md-12 col-xl-12 my-5 bg-white">
                            {error.isMounted&&<Alert type="alert-danger p-3 mb-3 rounded" message={error.message}></Alert>}
                                <h1 className="display-4 text-center mb-3">
                                    Reset password
                                </h1>
                                <p class="text-muted text-center mb-3">
                                    Please enter a new password below.
                                </p>

                                 {console.log(formik.errors)}

                                <form  onSubmit={formik.handleSubmit}>
                                    {/* <div className=" p-3 mb-3 row">
                                        <div className="justify-content-center">


                                            <OtpInput
                                                numInputs={6}
                                                value={formik.values.otp}
                                                onChange={(value) => handleOtpChange(value, formik)}
                                                separator={<span>-</span>}
                                                shouldAutoFocus={true}
                                                inputStyle={otp_configration}
                                                focusStyle={{
                                                    border: `solid 1px #377dff`
                                                }}
                                                errorStyle={
                                                    { border: `solid 1px red` }
                                                }
                                                isInputNum={true}
                                            />
                                        </div>
                                    </div> */}
                                    <div className="form-group">
                                        <label>New password</label>
                                        <div className="input-group input-group-merge">
                                            <input onChange={formik.handleChange} onBlur={formik.handleBlur} autoComplete="off" value={formik.values.newpassword} id="newpassword" name="newpassword" type={toggle.field1 ? 'text' : 'password'} className="form-control form-control-appended" placeholder="8+ characters required" />
                                            <div className="input-group-append">
                                                <span className="input-group-text">
                                                    <i className="fe fe-eye" onClick={() => setToggle({ ...toggle, field1: !toggle.field1 })} />
                                                </span>
                                            </div>
                                        </div>
                                        {(formik.touched.newpassword && formik.errors.newpassword) ? <FormError message={formik.errors.newpassword}></FormError> : ''}
                                    </div>

                                    <div className="form-group">
                                        <label>Confirm new password</label>
                                        <div className="input-group input-group-merge">
                                            <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.cnfPassword} id="cnfPassword" autoComplete="off" name="cnfPassword" type={toggle.field2 ? 'text' : 'password'} className="form-control form-control-appended" placeholder="8+ characters required" />
                                            <div className="input-group-append">
                                                <span className="input-group-text">
                                                    <i className="fe fe-eye" onClick={() => setToggle({ ...toggle, field2: !toggle.field2 })} />
                                                </span>
                                            </div>
                                        </div>
                                        {(formik.touched.cnfPassword && formik.errors.cnfPassword) ? <FormError message={formik.errors.cnfPassword}></FormError> : ''}
                                    </div>

                                    <button type="submit" disabled={!formik.isValid}  className="btn btn-lg btn-block btn-primary mb-3">
                                        {loader?<Spinner color="text-light  spinner-border-sm "></Spinner>:'Reset'}
                                        
                                    </button>
                                    <p className="mb-0 text-center"><Link to="/"><span class="fe fe-chevron-left mr-2"></span>Back to Sign in</Link> </p>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
