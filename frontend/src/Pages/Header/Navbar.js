import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Upload from "../../Assets/images/upload.png";
import { RequestCreator } from "../../ApiController/baseUrl";
import Categorydropdown from "./categoryDropdown";
import { refreshCollection, setLoading, removeLoading, activeSidebar  } from "../../Redux/actions";
import { imgBaseUrl } from '../../ApiController/baseUrl';
// import a  from "../../category_assets/file-1627885954888.png";

class Navbar extends Component {
  state = {
    searchDropwown: false,
    active: false,
    categories: [], //!
    categoriesLoading: true,//!
    categorydropdown: false,
    createdCategory:[], //!
    userTags:[],
  };

  componentDidMount() {
    (async ()=>{
      if(!this.props.preventCollectionReloading)
      // this.props.activeSidebar("All items")  
     this.getAllCollectionItems();
      const newState = JSON.parse(JSON.stringify(this.state));
      try{
        // if(!this.props.location.pathname === "/MyAccount"){
        const categoryResponse =  await RequestCreator("GET",`/categorylist/allUserCategory`,"",localStorage.getItem("token"));
        newState.categories = categoryResponse.data.data;
        newState.categoriesLoading = false 
        // }
        const tagResponse = await RequestCreator("GET",`/userCategory/userTags`,"",localStorage.getItem("token"));
        
        newState.userTags = tagResponse.data.data.filter(tag =>{
          return tag.tags!=null
        })
        
        const createdCategory = await RequestCreator("GET","/userCategory/usercategoryListByData","",localStorage.getItem("token"))
        
        newState.createdCategory = createdCategory.data.data;
        this.setState(newState)
      }
      catch(e){
        this.setState(newState);
        console.log(newState, 'new state');

       //  this.setState(newState)
      }
    })()
  }

  componentDidUpdate(previousProps){
    if(previousProps.collections.length !== this.props.collections.length)
   { //update tags in navbar
    (async ()=>{
      const newState = { };
      try{
        const tagResponse = await RequestCreator("GET",`/userCategory/userTags`,"",localStorage.getItem("token"));
        newState.userTags = tagResponse.data.filter(tag =>{
          return tag.tags!=null
        })
        const createdCategory = await RequestCreator("GET","/userCategory/usercategoryListByData","",localStorage.getItem("token"))
        newState.createdCategory = createdCategory.data.data;
        this.setState(newState)
      }
      catch(e){
        this.setState(newState)
      }
    })()
  }
  }

  onErrormsg = () => {
    this.setState({ active: true }, () => {
      setTimeout(() => this.setState({ active: false }), 2000);
    });
  };
  handleSearchDropdown = (searchDropwown) => {
    this.setState({ searchDropwown });
  };
  navbar_close = () => {
    document.body.classList.remove("navbar-vertical-aside-show-mode");
  };

  getCollectionByTag = async (tag)=>{
    this.props.activeSidebar(tag?.tags)
    tag = tag?.tags.replace('#', '%23');
    this.props.setLoading();
    try{
      const categoryResponse =  await RequestCreator("GET",`/userCategory/listByTags?tags=${tag}`,"",localStorage.getItem("token"));
      this.props.refresh(categoryResponse.data.data);
      this.props.history.replace(`/view_form/${categoryResponse?.data?.data[0].userCategoryId}`);
    }
    catch(e){
      // console.log( e)
    }
    this.props.removeLoading();
  }

  getAllCollectionItems= ()=>{
    if(this.props._currentSidebarIs === "All items"){
    this.props.setLoading();
    RequestCreator("GET","/userCategory/userAllCategory","",localStorage.getItem("token")).then((res) => {
      let listData =  res.data.data;
       if(this.props.isDashboard && listData.length){
          this.props.history.replace(`/view_form/${listData[0].userCategoryId}`);
          return;
        }
        this.props.refresh(listData);
        this.props.removeLoading();

     }).catch((error) => {
      this.props.refresh([]);
      //  console.log(error);
       this.props.removeLoading();
     });
    }
  }

  getAllPinnedCollection = () =>{
    this.props.setLoading();
    RequestCreator("GET","/userCategory/userPinnedCategoryList","",localStorage.getItem("token")).then((res) => {
       this.props.refresh(res.data.data);
       this.props.removeLoading();
       this.props.activeSidebar("Pinned")    
       this.props.history.replace(`/view_form/${res?.data?.data[0].userCategoryId}`);
     }).catch((error) => {
      this.props.refresh([]);
       console.log(error);
       this.props.removeLoading();
     });
  }

  getAllRecentAccessedCollection = () =>{
    this.props.setLoading();
    RequestCreator("GET","/userCategory/userAllCategory?showRecent=true","",localStorage.getItem("token")).then((res) => {      
       this.props.refresh(res.data.data);
       this.props.removeLoading();
       this.props.activeSidebar("Recent")
       this.props.history.replace(`/view_form/${res?.data?.data[0].userCategoryId}`);   
     }).catch((error) => {
      this.props.refresh([]);
       console.log(error);
       this.props.removeLoading();
     });    
  }

  getTrashItems = () =>{
    this.props.setLoading();
    RequestCreator("GET","/userCategory/deleted","",localStorage.getItem("token")).then((res) => {
       this.props.refresh(res.data.data);
       this.props.removeLoading();
       this.props.activeSidebar("Delete items")
     }).catch((error) => {
      this.props.refresh([]);
       console.log(error);
       this.props.removeLoading();
     });
  }
  getAllItemFromThisCategory = (categoryId, name) =>{

    this.props.setLoading();
    RequestCreator("GET",`/userCategory/getCategoriesData/${categoryId}`,"",localStorage.getItem("token")).then((res) => {
       this.props.refresh(res.data.data);
       this.props.removeLoading();
       this.props.activeSidebar(name)
      this.props.history.replace(`/view_form/${res?.data?.data[0].userCategoryId}`);
     }).catch((error) => {
      this.props.refresh([]);
       console.log(error);
       this.props.removeLoading();
     });
  }

  handleAllItem = () => {
    this.props.activeSidebar("All items")
  }

  render() {

    const { active } = this.state;
    const { searchDropwown } = this.state;

    return (
      <>
        <nav className="navbar fixed-left navbar-vertical-fixed navbar-light pb-0 navbar-vertical-aside navbar-vertical navbar-expand-xl expanded_nav">
          {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button> */}

          <div className="navbar-vertical-container">
            <div className="navbar-vertical-footer-offset">
              <div className="navbar-vertical-content">
                <ul className="navbar-nav nav_clr nav_hover_icon nav_space">
                  <li className={`nav-item ${this.props._currentSidebarIs === "All items" ? "active-cate" : ""}`}>
                    <Link
                      className="nav-link "
                      to="/dashboard"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="All Items"
                      // onClick={this.getAllCollectionItems}
                      onClick={this.handleAllItem}
                    >
                      <img
                        src={require("../../Assets/images/Group 786.png").default}
                        className="nav_icon_img icon_show"
                      />
                      <img
                        src={require("../../Assets/images/home.png").default}
                        className="nav_icon_img icon_hide"
                      />
                      <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate mid-laptop-none">
                        All Items
                      </span>

                      {/*--- Mobile Span ---*/}
                      <span
                        className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate mid-laptop-block hidden"
                        data-toggle="collapse"
                        data-target="#addnotesidebarCollapse"
                        aria-controls="addnotesidebarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={this.navbar_close}
                      >
                        All Items
                      </span>
                    </Link>
                    {/* <button type="button" className="close_icon d-xl-none m-0 p-0"> <i className="fe fe-x" /></button> */}
                    <span
                      onClick={this.navbar_close}
                      className="close_icon d-xl-none"
                    >
                      {" "}
                      <i className="fe fe-x" />
                    </span>
                  </li>
                  <li className={`nav-item ${this.props._currentSidebarIs === "Recent" ? "active-cate" : ""}`}>
                    <a
                      onClick={this.getAllRecentAccessedCollection}
                      className="nav-link"
                      data-toggle="tooltip"
                      data-placement="left"
                      // to="/dashboard"
                      title="Recent"
                       href="javascript:void(0)"                                            
                    >
                      <img
                        src={require("../../Assets/images/recent.png").default}
                        className="nav_icon_img icon_show"
                      />
                      <img
                        src={
                          require("../../Assets/images/recent_h.png").default
                        }
                        className="nav_icon_img icon_hide"
                      />
                      {/* <i class="far fa-history"/> */}
                      <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate mid-laptop-none">
                        Recent
                      </span>
                      <span
                        className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate mid-laptop-block hidden"
                        onClick={this.navbar_close}
                      >
                        Recent
                      </span>
                    </a>
                  </li>
                  <li
                    className={`nav-item`}
                    data-toggle="tooltip"
                    data-placement="left"
                    title="Pinned"
                  >
                    <a                      
                      className={`nav-link ${this.props._currentSidebarIs === "Pinned" ? "active-cate" : ""}`}
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Pinned"
                      onClick={this.getAllPinnedCollection}
                      href="javascript:void(0)"
                    >
                      {/* <i className="fe fe-bookmark " /> */}
                      <img
                        src={require("../../Assets/images/Group 784.png").default}
                        className="icon_show pin_ic"
                      />
                      <img
                        src={
                          require("../../Assets/images/Group 788.png").default
                        }
                        className="icon_hide pin_ic"
                      />
                      <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate mid-laptop-none">
                        Pinned
                      </span>
                      <span
                        className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate mid-laptop-block hidden"
                        onClick={this.navbar_close}
                      >
                        Pinned
                      </span>
                    </a>
                  </li>
                  {/* <li className="nav-item">
                    <Link
                      to="/cabinet"
                      className="nav-link"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Cabinet"
                    >
                      <img
                        src={require("../../Assets/images/cabinat.png").default}
                        className="icon_show sm_cbnet"
                      />
                      <img
                        src={
                          require("../../Assets/images/cabinat_h.png").default
                        }
                        className="icon_hide sm_cbnet"
                      />
                      <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate mid-laptop-none">
                        Cabinet
                      </span>
                      <span
                        className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate mid-laptop-block hidden"
                        onClick={this.navbar_close}
                      >
                        Cabinet
                      </span>
                      <span className="Rectangle text-white ml-auto navbar-vertical-aside-mini-mode-hidden-elements">
                        2
                      </span>
                    </Link>
                  </li> */}
                </ul>

                <ul className="navbar-nav nav_space">
                  <li className="nav-item">
                    <small
                      className="nav-subtitle collapsed  navbar-vertical-aside-mini-mode-hidden-elements mb_16"
                      href="#sidebarBasics"
                      data-toggle="collapse"
                      role="button"
                      aria-expanded="false"
                      aria-controls="sidebarBasics"
                    >
                      <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                        CATEGORIES
                      </span>
                    </small>
                    <div
                      className="collapse aside-mini-show"
                      id="sidebarBasics"
                    >
                      <ul className="nav flex-column second_category">
                        {this.state.createdCategory.map((eachcategory)=><li className={`nav-item ${this.props._currentSidebarIs === eachcategory.name? "active-cate" : ""}`}>
                          <a
                           href="javascript:void(0)"
                            className="nav-link"
                            data-toggle="tooltip"
                            data-placement="left"
                            title={eachcategory.name}
                            onClick={()=>{this.getAllItemFromThisCategory(eachcategory.categoryId, eachcategory.name)}}
                          >
                            {/* <i className="fe fe-mail" /> */}
                            <img
                              src={imgBaseUrl+eachcategory.icon}
                              className="nav_icon_img icon_show second_li"
                            />
                            <img
                              src={`/${eachcategory.icon}`}
                              className="nav_icon_img icon_hide second_li"
                            />
                            <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate mid-laptop-none">
                              {eachcategory.name}
                            </span>
                            <span
                              className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate mid-laptop-block hidden"
                              onClick={this.navbar_close}
                            >
                              {eachcategory.name}
                            </span>
                          </a>
                        </li>)}
                        
                      </ul>
                    </div>
                  </li>
                </ul>
                <ul className="navbar-nav nav_space second_category">
                  <li className="nav-item">
                    <small
                      className="nav-subtitle collapsed  navbar-vertical-aside-mini-mode-hidden-elements text-truncatemt-3"
                      href="#tag"
                      data-toggle="collapse"
                      role="button"
                      aria-expanded="false"
                      aria-controls="tag"
                    >
                      <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                        TAGS
                      </span>
                    </small>
                    <div className="collapse  aside-mini-show" id="tag">
                      <ul className="nav  flex-column nav_hover_icon list_space">
                        {
                          this.state.userTags.map((item, index)=>
                        <li
                          className={`nav-item ${this.props._currentSidebarIs === item?.tags ? "active-cate" : ""}`}
                          // data-toggle="modal"
                          // data-target="#modalinvoice"
                          key={`index${index}`}
                        >
                          <a
                            className="nav-link js-nav-tooltip-link"
                            data-toggle="tooltip"
                            data-placement="left"
                            title={item?.tags}
                            onClick={()=>{this.getCollectionByTag(item)}}
                            href="javascript:void(0)"
                          >
                            {/* <i className="fe fe-hash" /> */}
                            <img
                              src={
                                require("../../Assets/images/hash.png").default
                              }
                              className="nav_icon_img icon_show hs_icon"
                            />
                            <img
                              src={
                                require("../../Assets/images/hash_h.png")
                                  .default
                              }
                              className="nav_icon_img icon_hide hs_icon"
                            />
                            <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate mid-laptop-none">
                              {item?.tags}
                            </span>
                            <span
                              className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate mid-laptop-block hidden"
                              onClick={this.navbar_close}
                            >
                              {item?.tags}
                            </span>
                          </a>
                        </li>
                          )
                        }
                        
                      </ul>
                    </div>
                  </li>
                </ul>
                <div className="mt-auto" />
              </div>
              {/* </template> */}
              {/* <div className="js-navbar-vertical-aside-toggle-invoker text-right" >
                                            <a href="#" className="btn-icon btn-ghost-secondary rounded-circle mini_show">
                                            <i class="far fa-arrow-to-left arrow"></i>
                                            </a>
                                          
                                        </div> */}

              <div className="navbar-vertical-footer-list">
                <li className="navbar-vertical-footer-list-item">
                  <a 
                    href="javascript:void(0)"
                    onClick={this.getTrashItems}
                    className={`btn-icon btn-ghost-secondary rounded-circle ${this.props._currentSidebarIs === "Delete items" ? "for-delete" : ""}`}
                  >
                    <i className="fe fe-trash-2" />
                  </a>
                </li>

                <li className="navbar-vertical-footer-list-item">
                  <div
                    className="hs-unfold"
                    data-toggle="dropdown"
                    href="#navbar-vertical-footer-dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <a
                      href="#"
                      className="btn-icon btn-ghost-secondary rounded-circle"
                    >
                      <i
                        className="fe fe-plus "
                        onClick={() =>
                          this.setState({
                            categorydropdown: !this.state.categorydropdown,
                          })
                        }
                      />
                    </a>
                  </div>

                  <Categorydropdown
                    categories={this.state.categories}
                  ></Categorydropdown>
                </li>
              </div>
            </div>
          </div>
        </nav>
        <div
          className="navbar-vertical-aside-mobile-overlay"
          onClick={this.navbar_close}
        ></div>
        {/* ===============delete modal start============ */}
        {/* ===============delete modal close============ */}
        {/* ===============delete modal start============ */}
       
        {/* ===============delete modal close============ */}
        {/* ===============Upload modal start============ */}
        <div
          className="modal fade"
          id="modalupload"
          aria-labelledby="modalupload"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered max-width-760">
            <div className="modal-content">
              <div className="container-fluid upload-form  bg-white border-radius box-shadow">
                <Link to="#" className="upload text-center mb-5">
                  <img src={Upload} />
                  <input type="file" class="input-upload" id="customFile" />
                </Link>
                <div className="col-12  align-self-center">
                  <h1 className="font-size-18 text-center mb-3 font-weight-500">
                    {" "}
                    Upload to Thea{" "}
                  </h1>
                  <p className="text-muted text-center font-11 mb-0 font-weight-500">
                    {" "}
                    Files will be stored in your cabinet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* ===============Upload modal close============ */}
        {/* ===============invoice modal start ============ */}
        <div
          className="modal fade"
          id="modalinvoice"
          aria-labelledby="modalinvoice"
          aria-hidden="true"
        >
          <span className="downloa_icon">
            {" "}
            <i class="fal fa-arrow-to-bottom"></i>
          </span>
          <div className="modal-dialog modal-dialog-centered max-width-680 p-5 d-block">
            <div className="modal-content">
              <div className="container-fluid  p-5 bg-white invoice-modal">
                <div className="row align-items-end">
                  <div className="col-12 col-md-6">
                    <h2 className="mb-2 font-weight-600">J.P.Morgan</h2>
                    <p className="text-muted mb-4 font-14">
                      ABC company <br />
                      125 any street <br />
                      <span className="text-uppercase font-13">
                        City,state,postal code or zip country
                      </span>
                    </p>
                  </div>
                  <div className="col-12 col-md-6 text-md-right">
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="text-muted mb-0">
                          <strong className="font-14">7 Jan 2020</strong>
                        </p>
                      </div>
                      <div className="col-sm-6">
                        <p className="font-14  mb-0"></p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="text-muted mb-0">
                          <strong className="font-14">
                            Billing Statement invoice
                          </strong>
                        </p>
                      </div>
                      <div className="col-sm-6">
                        <p className="font-14  mb-0"></p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="text-muted mb-0">
                          <strong className="font-14">Invoice Number</strong>
                        </p>
                      </div>
                      <div className="col-sm-6">
                        <p className="font-14  mb-0">06100000000000000000123</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="text-muted mb-0">
                          <strong className="font-14  mb-0">
                            Statement Reference{" "}
                          </strong>
                        </p>
                      </div>
                      <div className="col-sm-6">
                        <p className="font-14  mb-0">0999-00-000111-2737</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="text-muted mb-0">
                          <strong className="font-14  mb-0">Invoice </strong>
                        </p>
                      </div>
                      <div className="col-sm-6">
                        <p className="font-14  mb-0"></p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="text-muted mb-0">
                          <strong className="font-14  mb-0">From </strong>
                        </p>
                      </div>
                      <div className="col-sm-6">
                        <p className="font-14  mb-0"> 1 Dec 2020</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="text-muted mb-0">
                          <strong className="font-14  mb-0">To </strong>
                        </p>
                      </div>
                      <div className="col-sm-6">
                        <p className="font-14  mb-0"> 31 Dec 2020</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="text-muted mb-0">
                          <strong className="font-14  mb-0">Page </strong>
                        </p>
                      </div>
                      <div className="col-sm-6">
                        <p className="font-14  mb-0"> 1 of 1</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-auto pr-0">
                    <strong className="text-uppercase font-13">CONTACT:</strong>
                  </div>
                  <div className="col pl-0">
                    <strong className="text-uppercase font-13">
                      ToROnto client service 1-888 -244-5116
                    </strong>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-12">
                    <div className="table-responsive">
                      <table className="table-sm w-100">
                        <thead>
                          <tr>
                            <th style={{ width: "35%" }}>Group No.</th>
                            <th style={{ width: "15%" }}>0000</th>
                            <th style={{ width: "25%" }}>01000111111</th>
                            <th style={{ width: "25%" }}>Group Account</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>... Account in CAD (DOLLAR)</td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="table-responsive min-height-300">
                      <table class="table invoice-table">
                        <thead>
                          <tr>
                            <th scope="col">Invoice Number</th>
                            <th>Transition Description</th>
                            <th scope="col">Transition Date</th>
                            <th scope="col">Begnining Amount Due</th>
                            <th scope="col">Transition Amount</th>
                            <th scope="col">Balance Due</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>06710000001111</td>
                            <td>
                              preview service change invoice payment received{" "}
                            </td>

                            <td>31 nov 2021</td>
                            <td>340.52</td>
                            <td>---</td>
                            <td>---</td>
                          </tr>
                          <tr>
                            <td>06710000001111</td>
                            <td>preview service change </td>

                            <td>31 nov 2021</td>
                            <td>Total Due Cad</td>
                            <td>---</td>
                            <td>351.45</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="table-responsive">
                      <table class="table invoice-table">
                        <thead>
                          <tr>
                            <th>amount analysis</th>
                            <th colSpan="3">
                              (please detach and return this portion og invoice
                              width payment)
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Total ammount due (CAD)</td>
                            <td>351.48</td>

                            <td>
                              Customer name:
                              <br />
                              Account Number:
                              <br />
                              Invoice Number:
                              <br />
                              invoice date:
                              <br />
                              payment due:
                            </td>
                            <td>
                              ABC company
                              <br />
                              0000 01 1110000034356
                              <br />
                              067000000000111111
                              <br />
                              20 dec 2020
                              <br />
                              31 dec 2020
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-12">
                    <p>
                      ACH We payments ABA 021000021 Account{" "}
                      <strong>144089390</strong>
                      <br />
                      <span>
                        (Please reference your invoice number and /or account
                        number)
                      </span>
                    </p>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-6"></div>
                  <div className="col-sm-6">
                    <p>
                      JPMORGAN CHASE BANK, N.A
                      <br />
                      <span>123 CHASE STREET</span>
                      <br />
                      <span>CITY, STATE, POSTAL CODE or ZIP, COUNTRY</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="zoom border-radius-4">
              <span class="fe fe-minus mr-4"></span>
              <span class="fe fe-zoom-out mr-4"></span>
              <span class="fe fe-plus"></span>
            </div>
          </div>
        </div>
        {/* =============== Error Msg ============ */}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    collections: state.userCollections.collection,
    _currentSidebarIs: state.user.currentSidebarIs
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    refresh: (data) => dispatch(refreshCollection(data)),
    setLoading: ()=>dispatch(setLoading()),
    removeLoading: ()=>dispatch(removeLoading()),
    activeSidebar: (data)=>dispatch(activeSidebar(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));