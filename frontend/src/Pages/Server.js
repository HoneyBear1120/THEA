import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Pages/Header/Header'
import Navbar from '../Pages/Header/Navbar'
import AddNoteSidebar from '../Pages/Header/AddNoteSidebar';
import upload_icon from '../Assets/images/server.png'

export default class Server extends Component {
    state = {
        search: "Title"
    }
    handleChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        const { search } = this.state;
        return (
            <>
                <div>
                    <Header />
                    <Navbar />

                    <div className="main-content">
                        <AddNoteSidebar />

                        <div className="dash-content mob-ml-0">
                            <div className="header">
                                <div className="header-body">
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
                                                            <input type="text" name="search" className="input_title_header f_out" placeholder="Title" />
                                                            <div className="d-flex">
                                                                <span className="bookmark_icon ml-3 mr-3">
                                                                    <img src={require('../Assets/images/pnned.png').default} className="temp_icon hover_hide  c_pointer" />
                                                                    <img src={require('../Assets/images/pinned_hpng.png').default} className="temp_icon hover_show c_pointer" />
                                                                </span>
                                                           
                                                                <a href="#" className="bookmark_icon" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <img src={require('../Assets/images/drop_logo.png').default} className="temp_icon hover_hide c_pointer"/>
                                                                    <img src={require('../Assets/images/drop_hover.png').default} className="temp_icon hover_show c_pointer"/>
                                                                </a>
                                                                {/* <div className="dropdown-menu dropdown-menu-right">
                                                                    <a href="#!" className="dropdown-item"> CSV</a>
                                                                    <a href="#!" className="dropdown-item active">TXT</a>
                                                                    <a href="#!" className="dropdown-item">PDF</a>
                                                                </div> */}
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="right_box right_side_block">
                                                <button type="button" class="btn btn-light cs_btn_size mr-3">Cancel</button>
                                                <button type="button" class="btn btn-primary cs_btn_size" >Save</button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <template>
                                    <div className="container-fluid position-relative">
                                        <div className="row justify-content-lg-center ">
                                            <div className="col-xl-9 padding-header">
                                                <div className="row">
                                                    <div className="col-auto">
                                                        <div className="upload-logo">
                                                            <img src={upload_icon} />
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                       <form class="icon_export">
                                                            <input type="text" name="search" className="form-control form-control-lg font-26 placeholder-black" placeholder="Title" />
                                                            <div className="d-flex">
                                                                <span className="bookmark_icon ml-3 mr-3">
                                                                    <img src={require('../Assets/images/pnned.png').default} className="temp_icon hover_hide  c_pointer" />
                                                                    <img src={require('../Assets/images/pinned_hpng.png').default} className="temp_icon hover_show c_pointer" />
                                                                </span>
                                                           
                                                                <a href="#" className="" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <img src={require('../Assets/images/drop_logo.png').default} className="temp_icon"/>
                                                                </a>
                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                    <a href="#!" className="dropdown-item"> CSV</a>
                                                                    <a href="#!" className="dropdown-item active">TXT</a>
                                                                    <a href="#!" className="dropdown-item">PDF</a>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className=" pofrf">
                                            <button type="button" class="btn btn-light font-13 mr-3">Cancel</button>
                                            <button type="button" class="btn btn-primary font-13" >Save</button>
                                        </div>
                                    </div>
                                    </template>
                                </div>
                            </div>
                            <div className="container-fluid pb-5">
                                <div className="row justify-content-lg-center ">
                                    <div className="col-lg-12 col-xl-9 custom-field">
                                        <div className="cs_card_style">
                                            <div className="card-header">
                                                <input type="text" class="form-control placeholder-black input_title" placeholder="Section" />
                                            </div>
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-sm-5 col-lg-5  col-xl-4">
                                                            <input type="text" className="input_cs f_out" placeholder="URL" />
                                                        </div>
                                                        <div className="col-lg-7 col-sm-7  col-xl-8">
                                                            <div className="position-relative">
                                                                <input type="text" className="left_cs_input f_out" placeholder="new field" />
                                                                <i className=" fe  fe-minus-circle plus-circle text-danger" />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-sm-5 col-lg-5  col-xl-4">
                                                            <input type="text" className="input_cs f_out" placeholder="username" />
                                                        </div>
                                                        <div className="col-lg-7 col-sm-7  col-xl-8">
                                                            <div className="position-relative">
                                                                <input type="text" className="left_cs_input f_out" placeholder="new field" />
                                                                <i className=" fe  fe-minus-circle plus-circle text-danger" />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-sm-5 col-lg-5  col-xl-4">
                                                            <input type="text" className="input_cs f_out" placeholder="password" />
                                                        </div>
                                                        <div className="col-lg-7 col-sm-7  col-xl-8">
                                                            <div className="position-relative">
                                                                <input type="text" className="form-control inp_disc f_out" placeholder="1234567891" />
                                                                <i className=" fe  fe-minus-circle plus-circle text-danger" />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-sm-5 col-lg-5  col-xl-4">
                                                            <input type="text" className="input_cs f_out text_light" placeholder="custom" />
                                                        </div>
                                                        <div className="col-lg-7 col-sm-7  col-xl-8">
                                                            <div className="position-relative">
                                                                <input type="text" className="left_cs_input f_out" placeholder="new field" />
                                                                <i className=" fe fe-plus-circle plus-circle " />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cs_card_style">
                                            <div className="card-header">
                                                <div className="position-relative">
                                                    <input type="text" class="form-control placeholder-black input_title" placeholder="Admin Console" />
                                                    <i className="fe  fe-minus-circle plus-circle text-danger " />
                                                </div>
                                            </div>
                                            <div className="card-body">

                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-sm-5 col-lg-5  col-xl-4">
                                                            <input type="text" className="input_cs f_out" placeholder="admin console URL" />
                                                        </div>
                                                        <div className="col-lg-7 col-sm-7  col-xl-8">
                                                            <div className="position-relative">
                                                                <input type="text" className="left_cs_input f_out" placeholder="new field" />
                                                                <i className=" fe  fe-minus-circle plus-circle text-danger" />

                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-sm-5 col-lg-5  col-xl-4">
                                                            <input type="text" className="input_cs f_out" placeholder="admin console username" />
                                                        </div>
                                                        <div className="col-lg-7 col-sm-7  col-xl-8">
                                                            <div className="position-relative">
                                                                <input type="text" className="left_cs_input f_out" placeholder="new field" />
                                                                <i className=" fe  fe-minus-circle plus-circle text-danger" />

                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-sm-5 col-lg-5  col-xl-4">
                                                            <input type="text" className="input_cs f_out" placeholder="console password" />
                                                        </div>
                                                        <div className="col-lg-7 col-sm-7  col-xl-8">
                                                            <div className="position-relative">
                                                                <input type="text" className="form-control inp_disc f_out" placeholder="1234567891" />
                                                                <i className=" fe  fe-minus-circle plus-circle text-danger" />

                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-sm-5 col-lg-5  col-xl-4">
                                                            <input type="text" className="input_cs f_out text_light" placeholder="custom" />
                                                        </div>
                                                        <div className="col-lg-7 col-sm-7  col-xl-8">
                                                            <div className="position-relative">
                                                                <input type="text" className="left_cs_input f_out" placeholder="new field" />
                                                                <i className=" fe fe-plus-circle plus-circle " />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cs_card_style">
                                            <div className="card-header">
                                                <input type="text" class="form-control placeholder-black input_title" placeholder="Admin Console" />
                                            </div>
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-sm-5 col-lg-5  col-xl-4">
                                                            <input type="text" className="input_cs f_out" placeholder="name" />
                                                        </div>
                                                        <div className="col-lg-7 col-sm-7  col-xl-8">
                                                            <div className="position-relative">
                                                                <input type="text" className="left_cs_input f_out" placeholder="new field" />
                                                                <i className=" fe  fe-minus-circle plus-circle text-danger" />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-sm-5 col-lg-5  col-xl-4">
                                                            <input type="text" className="input_cs f_out" placeholder="website" />
                                                        </div>
                                                        <div className="col-lg-7 col-sm-7  col-xl-8">
                                                            <div className="position-relative">
                                                                <input type="text" className="left_cs_input f_out" placeholder="new field" />
                                                                <i className=" fe  fe-minus-circle plus-circle text-danger" />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-sm-5 col-lg-5  col-xl-4">
                                                            <input type="text" className="input_cs f_out" placeholder="support URL" />
                                                        </div>
                                                        <div className="col-lg-7 col-sm-7  col-xl-8">
                                                            <div className="position-relative">
                                                                <input type="text" className="left_cs_input f_out" placeholder="new field" />
                                                                <i className=" fe  fe-minus-circle plus-circle text-danger" />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-sm-5 col-lg-5  col-xl-4">
                                                            <input type="text" className="input_cs f_out" placeholder="support phone number" />
                                                        </div>
                                                        <div className="col-lg-7 col-sm-7  col-xl-8">
                                                            <div className="position-relative">
                                                                <input type="text" className="left_cs_input f_out" placeholder="new field" />
                                                                <i className=" fe  fe-minus-circle plus-circle text-danger" />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-sm-5 col-lg-5  col-xl-4">
                                                            <input type="text" className="input_cs f_out text_light" placeholder="custom" />
                                                        </div>
                                                        <div className="col-lg-7 col-sm-7  col-xl-8">
                                                            <div className="position-relative">
                                                                <input type="text" className="left_cs_input f_out" placeholder="new field" />
                                                                <i className=" fe fe-plus-circle plus-circle " />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cs_card_style">
                                            <div className="card-header">
                                                <input type="text" class="form-control placeholder-black input_title" placeholder="Attachment" />
                                            </div>
                                            <div className="card-body">
                                                <div className="dropzone dropzone-single">
                                                    <div className="dz-default dz-message">
                                                        <button class="dz-button" type="button">Browse your device and upload documents</button>
                                                        <p className="text-light-gray font-10 mb-0">Maximum file size 10MB</p>
                                                    </div>
                                                    <input type="file" id="myFile" name="filename" className="upload-img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cs_card_style">
                                            <div className="card-header">
                                                <input type="text" class="form-control placeholder-black input_title" placeholder="Section" />
                                            </div>
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-sm-5 col-lg-5  col-xl-4">
                                                            <input type="text" className="input_cs f_out text_light" placeholder="custom" />
                                                        </div>
                                                        <div className="col-lg-7 col-sm-7  col-xl-8">
                                                            <div className="position-relative">
                                                                <input type="text" className="left_cs_input f_out" placeholder="new field" />
                                                                <i className=" fe fe-plus-circle plus-circle " />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="cs_card_style">
                                            <div className="card-header">
                                               <input type="text" className="form-control placeholder-black input_title" placeholder="Section"/>
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
                                                                <input type="text" className="left_cs_input f_out" placeholder="new field" placeholder="new field" />
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
                                    <button type="button" class="btn btn-danger cs_btn_size"  data-toggle="modal" data-target="#modaldelete"><i class="fe fe-trash mr-2"></i>Delete</button>
                                </div> */}
                                <div className="col-12 text-xl-right text-right pr_space_b">
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