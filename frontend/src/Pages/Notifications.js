import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Pages/Header/Header';
import Navbar from '../Pages/Header/Navbar';
import bgcover from '../Assets/images/bg-cover.png'
import avatar from '../Assets/images/avatar-1.jpg'
import crome from '../Assets/images/crome.png'
import markicon from '../Assets/images/mark-icon.png'

export default class Notifications extends Component {
    render() {
        return (
            <>
                <div className="">
                    <Header />
                    <Navbar />
                    <div className="main-content d-none">
                        <div className="content container-fluid">
                            <div class="row">
                                <div className="col-12 col-md-12 col-lg-5 col-xl-4 ">
                                    <div className="card sidebar position-sticky">
                                        <ul class="list-group">
                                            <li class="list-group-item font-14 active"><p className="max-w-200 notification_list">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p></li>
                                            <li class="list-group-item font-14 active"> <p className="max-w-200 notification_list">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p></li>
                                            <li class="list-group-item font-14 active"><p className="max-w-200 notification_list">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p></li>
                                            <li class="list-group-item font-14"><p className="max-w-200 notification_list">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p></li>
                                            <li class="list-group-item font-14"><p className="max-w-200 notification_list">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p></li>
                                            <li class="list-group-item font-14"><p className="max-w-200 notification_list">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p></li>
                                            <li class="list-group-item font-14"><p className="max-w-200 notification_list">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12 col-md-12 col-lg-7 col-xl-8  laptop-pl-15">
                                    <div className="cs_card_style">
                                        <div className="card_header">
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="d-flex align-items-center">
                                                        <h4 className="mb-0 notification_title">Notification Title</h4>
                                                        <button type="button" class="btn btn-primary font-13 ml-auto">Mark as read</button>
                                                    </div>
                                                </div>
                                                
                                            </div>

                                        </div>
                                        <form className="card-body">
                                         <p></p>
                                            
                                        </form>
                                    </div>
                                    <div className="cs_card_style">
                                        <div className="card_header">
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="d-flex align-items-center">
                                                        <h4 className="mb-0 notification_title">Notification Title</h4>
                                                        <button type="button" class="btn btn-light font-13 ml-auto">Unmark as read</button>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="row align-items-top">
                                                <div className="col"><h4 className="font-weight-600 mb-0">Notification Title</h4></div>
                                                <div className="auto mob-pr-15"></div>
                                            </div> */}
                                        </div>
                                        <form className="card-body">
                                          <p className="position-relative">
                                          <img src={markicon} className="mark-icon"/>
                                          </p>
                                          
                                        </form>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </>
        )
    }
}