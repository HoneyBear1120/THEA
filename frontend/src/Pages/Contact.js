import React, { Component } from 'react';
import upload_icon from '../Assets/images/user.png'
import InputBox from "./Components/InputBox"
import SelectInputBox from './Components/SelectInputBox'
import FileSelectBox from './Components/FileSelectBox'
import Button from './Components/Button';
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/airbnb.css";
import PinIcon from './Components/PinIcon'
import DownloadIcon from './Components/DownloadIcon'

const customStyles = {
    dropdownIndicator: base => ({
      ...base,
      color: "#dee2ec"
    })
  };

const options = [
    { value: 'Female', label: 'Female' },
    { value: 'Male', label: 'Male' },

];

const countryList = [
    { value: 'Afghanistan', label: 'Afghanistan' },
    { value: 'Albania', label: 'Albania' },
    { value: 'Algeria', label: 'Algeria' },
    { value: 'American Samoa', label: 'American Samoa' },
    { value: 'Andorra', label: 'Andorra' },
    { value: 'Angola', label: 'Angola' },
    { value: 'Anguilla', label: 'Anguilla' },
    { value: 'Antigua & Barbuda', label: 'Antigua & Barbuda' },
    { value: 'Argentina', label: 'Argentina' },
    { value: 'Armenia', label: 'Armenia' },

];
const country_state= [
    { value: 'Alabama', label: 'Alabama' },
    { value: 'Alaska', label: 'Alaska' },
    { value: 'Arizona', label: 'Arizona' },
    { value: 'Arkansas', label: 'Arkansas' },
    { value: 'California', label: 'California' },
    { value: 'Anguilla', label: 'Anguilla' },
    { value: 'Colorado', label: 'Colorado' },

]
export default class Contact extends Component {

    state = {
        selectedOption: null,
        date: new Date(),
        search: "Title"
        
    };
    handleChange = (e, type) => {
        this.setState({
            [type.name]: e
        })
    }
    
    render() {
        const { state, country, sex } = this.state;
        // const { date } = this.state;
        // const { search } = this.state;
        return (
            <>
                <div>                    
                    <div className="main-content">
                     
                        <div className="dash-content mob-ml-0">
                            <div className="header">
                                <div className="header-body">
                                    <template>
                                    <div className="container-fluid position-relative">
                                        <div className="row">
                                            <div className="cs_col ml-auto">
                                                <div className="wp_container d-flex flex_dir">
                                                    <div className="left_box d-flex w-100">
                                                        <div className="left_logo_box ">
                                                            <div className="upload_logo position-relative">
                                                                <img src={upload_icon} />
                                                                <span class="edit"><img src={require('../Assets/images/pencil.png').default} className="edit_icon"/></span>
                                                            </div>
                                                        </div>
                                                        <div className="right_input_box">
                                                            <form class="icon_export">
                                                                <InputBox type="text" name="search" className="input_title_header f_out" placeholder="Title" />
                                                                {/* <span class="fe fe-bookmark mr-3 ml-3 text-light-gray"></span> */}
                                                                    <span className="bookmark_icon">
                                                                        <i class="bi bi-bookmark text-light-gray mr-3 ml-3 hover_hide  c_pointer"></i>
                                                                        <i class="bi bi-bookmark-fill mr-3 ml-3 hover_show text_clr_prime c_pointer"></i>
                                                                    </span>
                                                    
                                                                <a href="#" className="dropdown-ellipses dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <span class="fe fe-download text-light-gray"></span>
                                                                </a>
                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                    <a href="#!" className="dropdown-item">CSV</a>
                                                                    <a href="#!" className="dropdown-item active">TXT</a>
                                                                    <a href="#!" className="dropdown-item">PDF</a>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div className="right_box text-right">
                                                        <Button type="button" className="btn btn-light font-13 mr-3 cs_btn_size" text={"Cancel"} onClick={""} />
                                                        <Button type="button" className="btn btn-primary font-13 cs_btn_size" text={"Save"} onClick={""} />
                                                    </div>
                                                </div>                                               
                                            </div>
                                        </div>
                                    </div>
                                    </template>
                                    <div className="container-fluid">
                                        <div className="row justify-content-lg-center position-relative">
                                            <div className="col-xl-9 padding-header">
                                                <div className="row">
                                                    <div className="col-auto">
                                                        <div className="upload_logo">
                                                            <img src={upload_icon} />
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                    <form class="icon_export">
                                                            <InputBox type="text" name="search" className="input_title_header f_out" placeholder="Title" />
                                                                <div className="d-flex">
                                                                    <PinIcon />
                                                                    {/* <DownloadIcon /> */}
                                                                </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="right_box right_side_block">
                                                <Button type="button" className="btn btn-light cs_btn_size mr-3">Cancel</Button>
                                                <Button type="button" className="btn btn-primary cs_btn_size">Save</Button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="container-fluid pb-5">
                                <div className="row justify-content-lg-center ">
                                    <div className="col-lg-12 col-xl-9 custom-field">
                                        <div className="cs_card_style">
                                            <div className="card-header">
                                                {/* <h2 className="font-size-20 font-weight-600 mb-0 title-border">Contact Information</h2> */}
                                                <InputBox type="text" className="form-control placeholder-black input_title" placeholder="Contact Information" />
                                            </div>
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-sm-5 col-lg-5  col-xl-4">
                                                            <InputBox type="text" className="input_cs f_out" placeholder="first name " />
                                                        </div>
                                                        <div className="col-lg-7 col-sm-7  col-xl-8">
                                                            <div className="position-relative">
                                                                <InputBox type="text" className="left_cs_input f_out" placeholder="new field" />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-sm-5 col-lg-5  col-xl-4">
                                                            <InputBox type="text" className="input_cs f_out" placeholder="middle name" />
                                                        </div>
                                                        <div className="col-lg-7 col-sm-7  col-xl-8">
                                                            <div className="position-relative">
                                                                <InputBox type="text" className="left_cs_input f_out" placeholder="new field" />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-sm-5 col-lg-5  col-xl-4">
                                                            <InputBox type="text" className="input_cs f_out" placeholder="last name" />
                                                        </div>
                                                        <div className="col-lg-7 col-sm-7  col-xl-8">
                                                            <div className="position-relative">
                                                                <InputBox type="text" className="left_cs_input f_out" placeholder="new field" />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-sm-5 col-lg-5  col-xl-4">
                                                            <InputBox type="text" className="input_cs f_out" placeholder="sex" />
                                                        </div>
                                                        <div className="col-lg-7 col-sm-7  col-xl-8">
                                                            <div className="position-relative">
                                                                <SelectInputBox
                                                                    name="sex"
                                                                    value={sex}
                                                                    placeholder="select"
                                                                    onChange={(e, type) => this.handleChange(e, type)}
                                                                    options={options}
                                                                    menuColor='#8c98a4'
                                                                    styles={customStyles}
                                                                    className="cs_select"
                                                                />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-sm-5 col-lg-5  col-xl-4">
                                                            <InputBox type="text" className="input_cs f_out" placeholder="birth date" />
                                                        </div>
                                                        <div className="col-lg-7 col-sm-7  col-xl-8">
                                                            <div className="position-relative">
                                                                <Flatpickr
                                                                    className="form-control date_cs f_out" placeholder="yyyy-mm-dd"

                                                                    // onChange={date => {
                                                                    //     this.setState({ date });
                                                                    // }}
                                                                />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-sm-5 col-lg-5  col-xl-4">
                                                            <InputBox type="text" className="input_cs f_out" placeholder="occupation" />
                                                        </div>
                                                        <div className="col-lg-7 col-sm-7  col-xl-8">
                                                            <div className="position-relative">
                                                                <InputBox type="text" className="left_cs_input f_out" placeholder="new field" />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-sm-5 col-lg-5  col-xl-4">
                                                            <InputBox type="text" className="input_cs f_out" placeholder="company" />
                                                        </div>
                                                        <div className="col-lg-7 col-sm-7  col-xl-8">
                                                            <div className="position-relative">
                                                                <InputBox type="text" className="left_cs_input f_out" placeholder="new field" />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-sm-5 col-lg-5  col-xl-4">
                                                            <InputBox type="text" className="input_cs f_out" placeholder="department" />
                                                        </div>
                                                        <div className="col-lg-7 col-sm-7  col-xl-8">
                                                            <div className="position-relative">
                                                                <InputBox type="text" className="left_cs_input f_out" placeholder="new field" />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-sm-5 col-lg-5  col-xl-4">
                                                            <InputBox type="text" className="input_cs f_out" placeholder="job title" />
                                                        </div>
                                                        <div className="col-lg-7 col-sm-7  col-xl-8">
                                                            <div className="position-relative">
                                                                <InputBox type="text" className="left_cs_input f_out" placeholder="new field" />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-sm-5 col-lg-5  col-xl-4">
                                                            <InputBox type="text" className="input_cs f_out" placeholder="relationship" />
                                                        </div>
                                                        <div className="col-lg-7 col-sm-7  col-xl-8">
                                                            <div className="position-relative">
                                                                <InputBox type="text" className="left_cs_input f_out" placeholder="new field" />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-sm-5 col-lg-5  col-xl-4">
                                                            <InputBox type="text" className="input_cs f_out text_light" placeholder="custom" />
                                                        </div>
                                                        <div className="col-lg-7 col-sm-7  col-xl-8">
                                                            <div className="position-relative">
                                                                <InputBox type="text" className="left_cs_input f_out text_light" placeholder="new field" />
                                                                <i className=" fe fe-plus-circle plus-circle " />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cs_card_style">
                                            <div className="card-header">
                                                {/* <h2 className="font-size-20 font-weight-600 mb-0 title-border">Address</h2> */}
                                                <InputBox type="text" className="form-control placeholder-black input_title" placeholder="Address" />
                                            </div>
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <div className="row align-items-top">
                                                        <div className="col-sm-5 col-lg-5  col-xl-4">
                                                           <InputBox type="text" className="input_cs f_out" placeholder="address" />
                                                        </div>
                                                        <div className="col-lg-7 col-sm-7  col-xl-8">
                                                            <div className="row margin-bottom">
                                                                <div className="col-sm-12">
                                                                    <InputBox type="text" className="left_cs_input f_out" placeholder="street" />
                                                                </div>
                                                            </div>
                                                            <div className="row  margin-bottom gp_input">
                                                                <div className="col-sm-6 pr-0 mob-pr-12">
                                                                    <InputBox type="text" className="left_cs_input f_out border-radius-right mob-mb-10 remove_border_radious" placeholder="city" />
                                                                </div>
                                                                <div className="col-sm-6 pl-0 mob-pl-12">
                                                                    {/* <input type="number" className="left_cs_input f_out border-radius-left border-left-0" placeholder="state" /> */}
                                                                    <SelectInputBox
                                                                        value={state}
                                                                        name="state"
                                                                        placeholder="state"
                                                                        onChange={this.handleChange}
                                                                        options={country_state}
                                                                        styles={customStyles}
                                                                        className="cs_select border-radius-right"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="row  margin-bottom address-select mob-mb-0 gp_input">
                                                                <div className="col-sm-6 pr-0 mob-pr-12">
                                                                    <InputBox type="text" className="left_cs_input f_out border-radius-right mob-mb-10 remove_border_radious" placeholder="zip" />
                                                                </div>
                                                                <div className="col-sm-6 pl-0 mob-pl-12">
                                                                    <SelectInputBox
                                                                        value={country}
                                                                        name="country"
                                                                        placeholder="country"
                                                                        onChange={this.handleChange}
                                                                        options={countryList}
                                                                        styles={customStyles}
                                                                        className="cs_select border-radius-right"
                                                                    />

                                                                </div>

                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-sm-5 col-lg-5  col-xl-4">
                                                            <InputBox type="text" className="input_cs f_out" placeholder="default phone" />
                                                        </div>
                                                        <div className="col-lg-7 col-sm-7  col-xl-8">
                                                            <div className="position-relative">
                                                                <InputBox type="text" className="left_cs_input f_out" placeholder="new field" />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-sm-5 col-lg-5  col-xl-4">
                                                            <InputBox type="text" className="input_cs f_out" placeholder="home" />
                                                        </div>
                                                        <div className="col-lg-7 col-sm-7  col-xl-8">
                                                            <div className="position-relative">
                                                                <InputBox type="text" className="left_cs_input f_out" placeholder="new field" />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-sm-5 col-lg-5  col-xl-4">
                                                            <InputBox type="text" className="input_cs f_out" placeholder="cell" />
                                                        </div>
                                                        <div className="col-lg-7 col-sm-7  col-xl-8">
                                                            <div className="position-relative">
                                                                <InputBox type="text" className="left_cs_input f_out" placeholder="new field" />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-sm-5 col-lg-5  col-xl-4">
                                                            <InputBox type="text" className="input_cs f_out" placeholder="business" />
                                                        </div>
                                                        <div className="col-lg-7 col-sm-7  col-xl-8">
                                                            <div className="position-relative">
                                                                <InputBox type="text" className="left_cs_input f_out" placeholder="new field" />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-sm-5 col-lg-5  col-xl-4">
                                                            <InputBox type="text" className="input_cs f_out text_light" placeholder="custom" />
                                                        </div>
                                                        <div className="col-lg-7 col-sm-7  col-xl-8">
                                                            <div className="position-relative">
                                                                <InputBox type="text" className="left_cs_input f_out" placeholder="new field" />
                                                                <i className=" fe fe-plus-circle plus-circle " />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cs_card_style">
                                            <div className="card-header">
                                                {/* <h2 className="font-size-20 font-weight-600 mb-0 title-border">Internet Details</h2> */}
                                                <InputBox type="text" className="form-control placeholder-black input_title" placeholder="Internet Details" />
                                            </div>
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-sm-5 col-lg-5  col-xl-4">
                                                            <InputBox type="text" className="input_cs f_out" placeholder="username" />
                                                        </div>
                                                        <div className="col-lg-7 col-sm-7  col-xl-8">
                                                            <div className="position-relative">
                                                                <InputBox type="text" className="left_cs_input f_out" placeholder="new field" />
                                                                <i className=" fe  fe-minus-circle plus-circle text-danger" />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-sm-5 col-lg-5  col-xl-4">
                                                            <InputBox type="text" className="input_cs f_out" placeholder="reminder question" />
                                                        </div>
                                                        <div className="col-lg-7 col-sm-7  col-xl-8">
                                                            <div className="position-relative">
                                                                <InputBox type="text" className="left_cs_input f_out" placeholder="new field" />
                                                                <i className=" fe  fe-minus-circle plus-circle text-danger" />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-sm-5 col-lg-5  col-xl-4">
                                                            <InputBox type="text" className="input_cs f_out" placeholder="reminder answer" />
                                                        </div>
                                                        <div className="col-lg-7 col-sm-7  col-xl-8">
                                                            <div className="position-relative">
                                                                <InputBox type="text" className="left_cs_input f_out" placeholder="new field" />
                                                                <i className=" fe  fe-minus-circle plus-circle text-danger" />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-sm-5 col-lg-5  col-xl-4">
                                                            <InputBox type="email" className="input_cs f_out" placeholder="email" />
                                                        </div>
                                                        <div className="col-lg-7 col-sm-7  col-xl-8">
                                                            <div className="position-relative">
                                                                <InputBox type="text" className="left_cs_input f_out" placeholder="new field" />
                                                                <i className=" fe  fe-minus-circle plus-circle text-danger" />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-sm-5 col-lg-5  col-xl-4">
                                                            <InputBox type="text" className="input_cs f_out" placeholder="website" />
                                                        </div>
                                                        <div className="col-lg-7 col-sm-7  col-xl-8">
                                                            <div className="position-relative">
                                                                <InputBox type="text" className="left_cs_input f_out" placeholder="new field" />
                                                                <i className=" fe  fe-minus-circle plus-circle text-danger" />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-sm-5 col-lg-5  col-xl-4">
                                                            <InputBox type="text" className="input_cs f_out" placeholder="ICQ" />
                                                        </div>
                                                        <div className="col-lg-7 col-sm-7  col-xl-8">
                                                            <div className="position-relative">
                                                                <InputBox type="text" className="left_cs_input f_out" placeholder="new field" />
                                                                <i className=" fe  fe-minus-circle plus-circle text-danger" />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-sm-5 col-lg-5  col-xl-4">
                                                            <InputBox type="text" className="input_cs f_out" placeholder="Skype" />
                                                        </div>
                                                        <div className="col-lg-7 col-sm-7  col-xl-8">
                                                            <div className="position-relative">
                                                                <InputBox type="text" className="left_cs_input f_out" placeholder="new field" />
                                                                <i className=" fe  fe-minus-circle plus-circle text-danger" />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-sm-5 col-lg-5  col-xl-4">
                                                            <InputBox type="text" className="input_cs f_out" placeholder="AOL/SIM" />
                                                        </div>
                                                        <div className="col-lg-7 col-sm-7  col-xl-8">
                                                            <div className="position-relative">
                                                                <InputBox type="text" className="left_cs_input f_out" placeholder="new field" />
                                                                <i className=" fe  fe-minus-circle plus-circle text-danger" />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-sm-5 col-lg-5  col-xl-4">
                                                            <InputBox type="text" className="input_cs f_out" placeholder="Yahoo" />
                                                        </div>
                                                        <div className="col-lg-7 col-sm-7  col-xl-8">
                                                            <div className="position-relative">
                                                                <InputBox type="text" className="left_cs_input f_out" placeholder="new field" />
                                                                <i className=" fe  fe-minus-circle plus-circle text-danger" />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-sm-5 col-lg-5  col-xl-4">
                                                            <InputBox type="text" className="input_cs f_out" placeholder="MSN" />
                                                        </div>
                                                        <div className="col-lg-7 col-sm-7  col-xl-8">
                                                            <div className="position-relative">
                                                                <InputBox type="text" className="left_cs_input f_out" placeholder="new field" />
                                                                <i className=" fe  fe-minus-circle plus-circle text-danger" />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-sm-5 col-lg-5  col-xl-4">
                                                            <InputBox type="text" className="input_cs f_out text_light" placeholder="custom" />
                                                        </div>
                                                        <div className="col-lg-7 col-sm-7  col-xl-8">
                                                            <div className="position-relative">
                                                                <InputBox type="text" className="left_cs_input f_out" placeholder="new field" />
                                                                <i className=" fe fe-plus-circle plus-circle " />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cs_card_style">
                                            <div className="card-header">
                                                {/* <h2 className="font-size-20 font-weight-600 mb-0 title-border">Attachment</h2> */}
                                                <InputBox type="text" className="form-control placeholder-black input_title" placeholder="Attachment" />
                                            </div>
                                            <div className="card-body">
                                            <div className="row">
                                                    {   // just mapping attachmemnts with demo array
                                                        [1,2,3,4,5].map(num => ( 
                                                            <div className="col-xl-3 col-sm-6 col-md-12 col-lg-6">
                                                                <div className="card_container">
                                                                    <div className="card_body_space">
                                                                        <div className="card_image">
                                                                            <img src={upload_icon} className="img-fluid" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="card_footer p-2">
                                                                        <div className="card_wp_border">
                                                                            <p className="mb-0" contentEditable="true">account statement-21345-45</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                                <FileSelectBox onChange={e => console.log(e.target.files)} />
                                            </div>
                                        </div>
                                        <div className="cs_card_style">
                                            <div className="card-header">
                                                {/* <h2 className="font-size-20 font-weight-600 mb-0 title-border">Section</h2> */}
                                                <InputBox type="text" className="form-control placeholder-black input_title" placeholder="Section" />
                                            </div>
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-sm-5 col-lg-5  col-xl-4">
                                                            <InputBox type="text" className="input_cs f_out text_light" placeholder="custom" />
                                                        </div>
                                                        <div className="col-lg-7 col-sm-7  col-xl-8">
                                                            <div className="position-relative">
                                                                <InputBox type="text" className="left_cs_input f_out" placeholder="new field" />
                                                                <i className=" fe fe-plus-circle plus-circle " />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="cs_card_style">
                                            <div className="card-header">
                                               <InputBox type="text" className="form-control placeholder-black input_title" placeholder="Section"/>
                                            </div>
                                            <div className="card-body label_cd">
                                                <div className="">
                                                    <div className="row">
                                                        <div className="col-sm-5 col-lg-5 col-xl-4 mb_spac_7r">
                                                            <label className="text-black font-weight-600  label_lr_12 mb-0">notes</label>
                                                        </div>
                                                        <div className="col-lg-7 col-sm-7 col-xl-8 mb_spac_7r"> 
                                                        <textarea className="text_area f_out min-height-100" placeholder="new field" id="Textarea1" row={10} cols={90} defaultValue={""} />
  
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <div className="row">
                                                        <div className="col-sm-5 col-lg-5  col-xl-4 mb_spac_7r">
                                                            <label className="text-black font-weight-600 label_lr_12 mb-0">tags</label>
                                                        </div>
                                                        <div className="col-lg-7 col-sm-7 col-xl-8 mb_spac_7r">
                                                            <div className="position-relative">
                                                                <InputBox type="text" className="left_cs_input f_out" placeholder="new field" placeholder="new field" />
                                                                {/* <i className=" fe fe-plus-circle plus-circle " /> */}
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-5 col-lg-5 col-xl-4 mb_spac_7r">
                                                        <label className="text-black font-weight-600 label_lr_12 mb-0 md_pd_top_0">last modified</label>
                                                    </div>
                                                    <div className="col-lg-7 col-sm-7 col-xl-8 mb_spac_7r">
                                                        <p className="label_sm mb-0 md_pd_top_0">December 18, 2020 4:13 PM</p>
                                                    </div>
                                                    <div className="col-sm-5 col-lg-5 col-xl-4 mb_spac_7r">
                                                        <label className="text-black font-weight-600 label_lr_12 label_sm mb-0 md_pd_top_0">created</label>
                                                    </div>
                                                    <div className="col-lg-7 col-sm-7 col-xl-8">
                                                        <p className="label_sm mb-0 md_pd_top_0">December 18, 2020 4:13 PM</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-12 text-xl-right text-center pr-0">
                                    <button type="button" class="btn btn-danger cs_btn_size" data-toggle="modal" data-target="#modaldelete"><i class="fe fe-trash mr-2"></i>Delete</button>
                                </div> */}
                                <div class="col-12 text-xl-right text-right pr_space_b">
                                    <button type="button" class="btn btn-danger cs_btn_size" data-toggle="modal" data-target="#modaldelete"><i class="fe fe-trash mr-2"></i>Delete</button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </>
        )
    }

}