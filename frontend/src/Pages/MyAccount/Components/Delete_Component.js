import React from 'react';
import { Element } from 'react-scroll';
import { useState } from 'react';
import { Formik, Form } from 'formik';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Spinner from '../../Components/Spinner';
import confirm from '../../../Assets/images/confirm.png';
import { RequestCreator } from '../../../ApiController/baseUrl';

let initialValues = {
    checkbox: []
}

function Delete_Component() {

    let [check, setcheck] = useState(false)

    let dispatcher = useDispatch();
    let history = useHistory();


    let [getAccountDeleted, setAccountDeleted] = useState(false);



    let [load, setLoad] = useState(false)
    let [modal, setModal] = useState(false)


    function handleSubmit(value) {

        setLoad(true)
        RequestCreator('PUT', '/users/DeleteUserProfile', { date: new Date() }, localStorage.getItem('token')).then(response => {
            if(response.data.status){
            setLoad(false)
            setAccountDeleted(true)
            setTimeout(() => {
            document.getElementById("cancelModal").click();
            localStorage.removeItem('token');
            dispatcher({ type: 'LOGOUT'});
             history.push('/')}, 5000);
            }

        }).catch(error => {
            setLoad(false)
        })

    }

    const AccountDeletedMessage = ()=>{
        return(
                    <div className="container-fluid  delete-form  bg-white border-radius box-shadow" >
                        <div className="otp-img text-center mb-4">
                            <i className="fe fe-check-circle" style={{fontSize:"80px", color:'green'}}/>
                         </div>
                        <div className="col-12  align-self-center">
                            <h1 className="font-size-18 text-center mb-3 ">Account Deleted </h1>
                            <p className="text-muted text-center font-14 mb-0"> This is the confirmation that your account has been deleted. You have 14 days to reactivate your account before your personal data is permanently deleted from our system. If you like to restore you account, email info@hellothea.io to submit the request.
                            </p>
                        </div>
                    <button class="btn btn_cancel font-13" style={{display:'none'}} data-dismiss="modal" id="cancelModal" aria-label="Close"></button>
                    </div>
                    )
    }

    const AskToDeleteAccount = ()=>{
        return(
            <div className="container-fluid  delete-form  bg-white border-radius box-shadow">
                <div className="otp-img text-center mb-4">
                    <img src={confirm} />
                </div>
            <div className="col-12  align-self-center">
                <h1 className="font-size-18 text-center mb-3 "> Delete account? </h1>
                <p className="text-muted text-center font-14 mb-0"> Are you sure you want to delete your account? We will permanently delete your data from our database; this action cannot be reversed.
                </p>
            </div>
            <div className="d-flex justify-content-between mt-5">
                <button class="btn btn_cancel font-13" data-dismiss="modal"  aria-label="Close">Cancel</button>
                <button type="button"  onClick={() => handleSubmit()} className="btn btn-primary font-13" >Confirm</button>
            </div>
        </div>
        )
    
    }

    return (
        <div>
            <Formik initialValues={initialValues}  >
                {(formik) => (
                    <Form>
                        <Element style={{ marginBottom: 400 }} className="cs_card_style element sm_cs_card_style" id="delete_account_section">
                            <div className="card-header card_header_padding">
                                <h4 className="title_headers mb-0">Delete your account</h4>
                            </div>
                            <div className="card-body">
                                <p className="text-light-gray">
                                    When you delete your account, you lose access to Thea's services, and we permanently delete your personal data. You can cancel your deletion within 14 days of the request.
                                </p>
                                <div className="custom-control custom-checkbox ml-10" tabIndex={0}>
                                    <input onChange={(e) => setcheck(!check)} value={check} name="checkbox" id="checkbox" className="custom-control-input" id="checklistone" type="checkbox" />
                                    <label className="custom-control-label" htmlFor="checklistone" />
                                    <p className="text-light-gray">Confirm that I want to delete my account</p>
                                </div>
                                <div className="row">
                                    <div className="col-12 p-0 text-right mt-3">
                                        <button type="button" disabled={!check} data-toggle="modal" data-target="#modaldeleteaccount" className="btn btn-danger cs_btn_size" > {load ? <Spinner color="text-light  spinner-border-sm"></Spinner> : 'Delete'}  </button>
                                    </div>
                                </div>
                            </div>
                        </Element>

                        <div className="modal fade" id="modaldeleteaccount" aria-labelledby="modaldelete" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered max-width-450">
                                <div className="modal-content">
                                    {getAccountDeleted?<AccountDeletedMessage/>:<AskToDeleteAccount/>}
                                </div>

                            </div>
                        </div>
                    </Form>
                )

                }
            </Formik>
        </div>


    )
}

export default Delete_Component
