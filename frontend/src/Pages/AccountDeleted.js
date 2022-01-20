import React, { Component } from 'react';
import check_icon from '../Assets/images/check_icon.png'

export default class AccountDeleted extends Component {
    render() {

        return (
            <>
                <div className="bg-cover h-100 min-vh-100">
                    <div className="container-fluid transform-center sign_form max-width-450 bg-white border-radius box-shadow">
                    <div className="otp-img text-center mb-4">
                            <img src={check_icon} />
                        </div>
                        <div className="col-12  align-self-center">
                            <h1 className="font-size-18 text-center mb-3 font-weight-600"> Account Deleted </h1>
                            <p className="text-muted text-center font-14 mb-0"> This is a confirmation that your account has been deleted. You have 14 days to reactivate your account before your personal data is permanently deleted from our systems. If you would like to restore your account, email info@hellothea.io to submit the request.  </p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}