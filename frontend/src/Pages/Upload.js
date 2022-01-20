import React, { Component } from 'react';
import Navbar from '../Pages/Header/Navbar';
import Header from '../Pages/Header/Header';
import AddNoteSidebar from '../Pages/Header/AddNoteSidebar'


export default class Upload extends Component {
    render() {
        return (
            <>
                <div>
                    <Header />
                    <Navbar />

                    <div className="main-content">
                      <AddNoteSidebar/>
                      </div>
                </div>
            </>
        )
    }

}