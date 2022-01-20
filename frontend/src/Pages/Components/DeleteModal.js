import React from 'react'
import Spinner from './Spinner';
import {useState,useEffect} from 'react';
import { RequestCreator2 } from '../../ApiController/baseUrl';
import confirm from '../../Assets/images/confirm.png';

const Deletemodal=(props)=>{

    const {onConfirm} = props;
    const [loader,setLoader]=useState(true);
    return (
        <div
          className="modal fade"
          id="modaldelete"
          aria-labelledby="modaldelete"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered max-width-450">
            <div className="modal-content">
              <div className="container-fluid  delete-form  bg-white border-radius box-shadow">
                <div className="otp-img text-center mb-4">
                <img src={confirm} />
                </div>
                <div className="col-12  align-self-center">
                  <h1 className="font-size-18 text-center mb-3 ">
                
                    Delete Item?
                  </h1>
                  <p className="text-muted text-center font-14 mb-0">
                
                    Are you sure you want to delete this item?
                  </p>
                </div>
                <div className="d-flex justify-content-between mt-5">
                  <button
                    class="btn btn_cancel font-13"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    Cancel
                  </button>
                  <button type="button" class="btn btn-primary font-13" data-dismiss="modal"  aria-label="Close"  onClick={onConfirm}>
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}


export default Deletemodal
