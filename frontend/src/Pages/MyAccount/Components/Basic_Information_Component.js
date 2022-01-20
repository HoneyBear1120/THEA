import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Select from 'react-select';
import { Element } from "react-scroll";
import { useState, useEffect } from 'react';
import { RequestCreator } from '../../../ApiController/baseUrl';
import { Basic_Information_Validation, Basic_Information_Values, UserValues } from '../utils';
import { useSelector } from 'react-redux';
import { useRef } from 'react';
import Spinner from '../../Components/Spinner';
import { useDispatch } from 'react-redux';
import Notification from '../../Components/Notification';
import FormError from '../../Components/FormError';
import {Formatter, FormatCity} from '../utils';


const customStyles = {
    dropdownIndicator: base => ({
        ...base,
        color: "#dee2ec"
    }),
        // For the select it self, not the options of the select
        control: (styles, { isDisabled}) => {
          return {
            ...styles,
            color : isDisabled?'black':'default',
            backgroundColor: isDisabled ? '#fff' : 'default',
            borderColor:  '#dddddd' ,
            // This is an example: backgroundColor: isDisabled ? 'rgba(206, 217, 224, 0.5)' : 'white'
          }
        },
};



export default function Basic_Information_Component() {

    const dispatcher = useDispatch();
    const [edit, setEdit] = useState(false)
    const user = useSelector(state => state.user)
    const userSelectedCountryCode = useRef(null)

    const [alert, setAlert] = useState(false)
    const [selectLoad,setLoad]=useState({
        city:true,
        country:true,
        state:true
    });

    const [country, setCountry] = useState([]);
    const [state, setState] = useState([]);
    const [cities, setCities] = useState([])

    const [buttonLoad,setButtonLoad] = useState(false)

    useEffect(() => {
        if (alert) {
            setTimeout(() => {
                setAlert(false)

            }, 3000)
        }
    }, [alert])


    useEffect(async() => {
        try{
        let country_response = await RequestCreator('GET', `/countries/allCountries`, '')

        country_response=Formatter(country_response.data.data)
        setCountry(country_response)

        if (user.userInfo.length > 0) {
                if(user.userInfo[0].country){
                    let countryObject = country_response.find(({label, value})=>label===user.userInfo[0].country);
                    let states =[];
                    if(countryObject){
                        userSelectedCountryCode.current = countryObject.value
                         states = await RequestCreator('GET', `/states/allState?countryCode=${countryObject.value}`);
                         states = Formatter(states.data.data);
                         setState(states)
                    }
                    if(user.userInfo[0].state){
                        let stateObject = states.find(({label, value})=>label===user.userInfo[0].state)
                        if(stateObject){
                            let cities = await RequestCreator('GET', `/cities/citiesByStates?stateCode=${stateObject.value}&countryCode=${countryObject.value}`)
                            cities = FormatCity(cities.data.data);
                            setCities(cities)
                        }
                    }
                }
            }
            setLoad({country:false,state:false,city:false})
        }
        catch(error){
                setLoad({country:false,state:false,city:false})
            }
        }, [])

    let handleCountryChange = async (values, formik) => {
        try {
           setLoad({...selectLoad,state:true})
           userSelectedCountryCode.current = values.value;

            formik.setFieldValue('country', values.label, true);
            formik.setFieldValue('state', '', false);
            formik.setFieldValue('city', '', true)
            let states = await RequestCreator('GET', `/states/allState?countryCode=${values.value}`, '');


            let formated_states = Formatter(states.data.data)

            setState(formated_states)

            setLoad({...selectLoad,state:false})

        } catch (error) {
            
            setLoad({...selectLoad,state:false})

        }
    }


    let handleStateChange = async (values, formik) => {
        try {
            formik.setFieldValue('state', values.label, false);
            formik.setFieldValue('city', '', true)

            setLoad({...selectLoad,city:true})
            let cities = await RequestCreator('GET', `/cities/citiesByStates?stateCode=${values.value}&countryCode=${userSelectedCountryCode.current}`, '');

            let cities_Formatted =FormatCity(cities.data.data)
            setCities(cities_Formatted)

            setLoad({...selectLoad,city:false})


        } catch (error) {
          setLoad({...selectLoad,city:false})
        }
    }


    let handleSubmit = (value) => {

          setButtonLoad(true)
        value.phone = value.phone.toString();
        let token = localStorage.getItem('token')
        let values=UserValues(user.userInfo[0].name,value.firstName,value.lastName,value.phone,value.street,value.state,value.city,value.zip,value.country,user.userInfo[0].joined,user.userInfo[0].emailID)


        RequestCreator('POST', `/users/userBasicInformation`, values, token).then(result => {

            return RequestCreator('GET', '/users/userInformation', '', localStorage.getItem('token'))

        }).then(response => {

            dispatcher({ type: 'LOGIN', payload: response.data.data })
            setAlert(true)
            setEdit(false)

        }).catch(error => {
            console.log(error)
            setButtonLoad(false)

        }).then(result => {
                 setButtonLoad(false)
        })
    }

    return (

        <Element className="cs_card_style element" id="basic_information_section">
            
            <div className="card-header card_header_padding">
                <div className="row align-items-top">
                    <div className="col">
                        <h4 className="font-weight-bold title_headers mb-0">Basic Information</h4>
                    </div>
                </div>
            </div>

            {user.isLoading ? <div className="d-flex justify-content-center"><Spinner color="text-dark mt-4 mb-3  spinner-border-sm" ></Spinner> </div> :
                <Formik   initialValues={user.userInfo.length > 0 ? user.userInfo[0] : Basic_Information_Values} validationSchema={Basic_Information_Validation} onSubmit={handleSubmit}  enableReinitialize>
                    {(formik) => (                      
                        <Form className={`card-body ${!edit?"cu-view1":''}`}>
                            {console.log("")}
                            <div className="form-group">
                                <div className="row align-items-center mob-mx-0">
                                    {(edit ||formik.values.firstName || formik.values.lastName) && <div className="col-sm-5 col-lg-5 col-md-4 col-xl-3 mob-px-0">
                                        <label className="label_title mb-0 mob-mb-10 ">Full name</label>
                                    </div>}

                                    <div className="col-lg-7 col-sm-7 col-md-8 col-xl-9">
                                        {<div className="row align-items-center">
                                            {!edit ? formik.values.firstName : <div className="col-sm-6 p-0">

                                                <Field disabled={!edit} name="firstName" type="text" className={`left_cs_input f_out mob-mb-10`} placeholder={"FirstName"} />
                                            </div>}
                                            {(!edit) ?  (formik.values.firstName ? " , " + formik.values.lastName : formik.values.lastName) : <div className="col-sm-6 p-0 pl-1">
                                                <Field type="text"  disabled={!edit} name="lastName" className="left_cs_input f_out"  placeholder={"LastName"} />
                                            </div>}
                                        </div>}
                                    </div>
                                </div>

                            </div>
                            <div className="form-group">
                                {(edit || formik.values.phone)  &&  <div className="row align-items-center mob-mx-0">
                                    <div className="col-sm-5 col-lg-5 col-md-4 col-xl-3  mob-px-0">
                                        <label className="label_title mob-mb-10">Phone <span className="text-muted">(optional)</span></label>
                                    </div>
                                     <div className="col-lg-7 col-sm-7 col-md-8 col-xl-9">
                                        <div className="row">
                                            {!edit ? formik.values.phone : <div className="col-sm-12 p-0">
                                                <Field type="number" disabled={!edit} id="phone" name="phone" className="left_cs_input f_out" placeholder="phone" />
                                                <ErrorMessage name="phone" render={msg => <FormError message={msg} ></FormError>} />
                                            </div>}
                                        </div>

                                    </div>
                                </div>}
                            </div>


                            <div className="form-group mb-0">
                                <div className="row align-items-top mob-mx-0">
                                    <div className="col-sm-5 col-lg-5 col-md-4 col-xl-3  mob-px-0">
                                        {(edit || formik.values.street || formik.values.country || formik.values.state || formik.values.city || formik.values.zip) && <label className="label_title mob-mb-10">Address</label>}
                                    </div>
                                    <div className="col-lg-7 col-sm-7 col-md-8 col-xl-9">
                                         <div className="row margin-bottom">
                                            {(!edit) ? (formik.values.street) :<div className="col-sm-12 p-0">
                                                <Field type="text" disabled={!edit} id="street" name="street" className="left_cs_input f_out" placeholder="street" />
                                            </div>}
                                        </div>

                                        <div className="row  margin-bottom gp_input">
                                            {(!edit) ? (formik.values.country) : <div className="col-sm-6 p-0">
                                                <Select className="cs_select border-radius-right selct_br"
                                                    value={formik.values.country?.length > 0 && {
                                                        label: formik.values.country, value: formik.values.country
                                                    }}
                                                    options={country}
                                                    onChange={(values) => handleCountryChange(values, formik)}
                                                    placeholder="Country"
                                                    styles={customStyles}
                                                    isDisabled={!edit}
                                                    isLoading={selectLoad.country}
                                                />

                                            </div> }
                                            
                                            {(!edit) ? (formik.values.country ?  " , " + formik.values.state : formik.values.state) : <div className="col-sm-6 p-0">                                               
                                                <Select className="cs_select border-radius-right selct_br pl-1"
                                                    value={formik.values.state?.length > 0 && {
                                                        label: formik.values.state, value: formik.values.state
                                                    }}
                                                    onChange={values => {
                                                        handleStateChange(values, formik)
                                                    }}
                                                    isLoading={selectLoad.state}
                                                    options={state}
                                                    placeholder="state"
                                                    styles={customStyles}
                                                    isDisabled={!edit}
                                                />
                                            </div>}
                                        </div>
                                        <div className="row gp_input">
                                            {(!edit) ? (formik.values.city) : <div className="col-sm-6 p-0 pl-1 ">
                                                <Field id="city" name="city" disabled={!edit} type="text" maxLength={10} className="left_cs_input f_out mob-mb-10 " placeholder="city" />
                                                    <p className="text-danger" style={{height:"16px"}}> {formik.touched.city&&formik.errors.city}</p>
                                            </div>}

                                            {(!edit) ? (formik.values.city ? " , " + formik.values.zip : formik.values.zip) : <div className="col-sm-6 p-0 pl-1 ">
                                                <Field id="zip" name="zip" disabled={!edit} type="text" maxLength={10} className="left_cs_input f_out mob-mb-10 " placeholder="zip" />
                                                    <p className="text-danger" style={{height:"16px"}}> {formik.touched.zip&&formik.errors.zip}</p>
                                            </div>}
                                        </div>
                                       
                                            <div className="row">
                                                <div className="col-sm-12 text-right pt_25 pr-0">
                                                    {edit?<div>
                                                    <button type="button" onClick={() => {
                                                        formik.handleReset()
                                                        setEdit(false)
                                                    }} class="btn btn-light cs_btn_size mr-3 p_35x">
                                                        Cancel
                                                    </button>                                                   
                                                    <button type="submit" 
                                                    // disabled={!(formik.isValid && formik.dirty)} 
                                                    className="btn btn-primary cs_btn_size p_35x" >
                                                        {buttonLoad ? <Spinner color="text-light  spinner-border-sm"></Spinner> : 'Save'}
                                                    </button>
                                                    </div>:<button onClick={() => setEdit(!edit)} type="button" className="btn btn-primary cs_btn_size p_35x" >Edit</button>
                                                    }
                                                </div>
                                            </div>
                                            
                                    </div>
                                </div>
                            </div>

                        </Form>
                    )
                    }
                </Formik>}
            <Notification type="bg-success err_msg_box_bottom " message={'Your profile has been successfully updated!'} active={alert} ></Notification>
        </Element>
    )
}
