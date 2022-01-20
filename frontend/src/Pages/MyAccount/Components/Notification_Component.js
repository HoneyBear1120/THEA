import React from 'react'
import {Element} from 'react-scroll';

function Notification_Component() {
    return (
        <Element className="cs_card_style element" id="notifications_section">
        <div className="card-header card_header_padding">
            <h4 className="title_headers mb-0">Notifications</h4>
        </div>
        <div className="table-responsive">
            <table className="table  table-small table-hover top-border-none table-border-none head-gry card-table">
                <thead>
                    <tr>
                        <th>TYPE</th>
                        <th>EMAIL</th>
                        <th> IN-APP</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>New for you</td>
                        <td>
                            <div className="custom-control custom-checkbox ml-10" tabIndex={0}>
                                <input className="custom-control-input" id="checklistFive" type="checkbox" defaultChecked />
                                <label className="custom-control-label" htmlFor="checklistFive" />
                            </div>
                        </td>
                        <td>
                            <div className="custom-control custom-checkbox ml-10" tabIndex={0}>
                                <input className="custom-control-input" id="checklistSix" type="checkbox" defaultChecked />
                                <label className="custom-control-label" htmlFor="checklistSix" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Account activity</td>
                        <td>
                            <div className="custom-control custom-checkbox ml-10" tabIndex={0}>
                                <input className="custom-control-input" id="checklistFive" type="checkbox" defaultChecked />
                                <label className="custom-control-label" htmlFor="checklistFive" />

                            </div>
                        </td>
                        <td>
                            <div className="custom-control custom-checkbox ml-10" tabIndex={0}>
                                <input className="custom-control-input" id="checklistSix" type="checkbox" defaultChecked />
                                <label className="custom-control-label" htmlFor="checklistSix" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>A new browser used to sign in</td>
                        <td>
                            <div className="custom-control custom-checkbox ml-10" tabIndex={0}>
                                <input className="custom-control-input" id="checklistFive" type="checkbox" defaultChecked />
                                <label className="custom-control-label" htmlFor="checklistFive" />
                            </div>
                        </td>
                        <td>
                            <div className="custom-control custom-checkbox ml-10" tabIndex={0}>
                                <input className="custom-control-input" id="checklistSix" type="checkbox" defaultChecked />
                                <label className="custom-control-label" htmlFor="checklistSix" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>A new device is linked	</td>
                        <td>
                            <div className="custom-control custom-checkbox ml-10" tabIndex={0}>
                                <input className="custom-control-input" id="checklistFive" type="checkbox" defaultChecked />
                                <label className="custom-control-label" htmlFor="checklistFive" />
                            </div>
                        </td>
                        <td>
                            <div className="custom-control custom-checkbox ml-10" tabIndex={0}>
                                <input className="custom-control-input" id="checklistSix" type="checkbox" defaultChecked />
                                <label className="custom-control-label" htmlFor="checklistSix" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>A new device connected</td>
                        <td>
                            <div className="custom-control custom-checkbox ml-10" tabIndex={0}>
                                <input className="custom-control-input" id="checklistFive" type="checkbox" defaultChecked />
                                <label className="custom-control-label" htmlFor="checklistFive" />
                            </div>
                        </td>
                        <td> <div className="custom-control custom-checkbox ml-10" tabIndex={0}>
                            <input className="custom-control-input" id="checklistSix" type="checkbox" defaultChecked />
                            <label className="custom-control-label" htmlFor="checklistSix" />

                        </div></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="">
            <div className="col-sm-12">
                <div className="ex_padding text-right">
                    <button className="btn btn-light cs_btn_size mr-3 p_35x" >
                       <div className="spinner-border spinner-border-sm mr-2" role="status">
                            <span className="sr-only"></span>
                        </div> Cancel
                    </button>
                    <button to="#" type="button" className="btn btn-primary cs_btn_size p_35x">
                         <div className="spinner-border spinner-border-sm mr-2" role="status">
                            <span className="sr-only"></span>
                        </div>Save
                    </button>
                </div>
            </div>
        </div>
    </Element>
    )
}

export default Notification_Component;
