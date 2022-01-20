import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/images/thea logo_black.png'
import userAvatar from "../../Assets/images/user.png"
import { withRouter } from 'react-router';
import {connect} from 'react-redux';
import {logout,login, deleteCollection} from '../../Redux/actions';
import { imgBaseUrl } from "../../ApiController/baseUrl";
import { RequestCreator } from '../../ApiController/baseUrl';
// import Search from './Search';
import Spinner from "../Components/Spinner";
import { refreshCollection, setLoading, removeLoading, activeSidebar  } from "../../Redux/actions";

 class Header extends Component { 
     state={
        searchDropwown:false,
        searchItems: [],
        searchCategouries: [],
        searchingIs: false,
        resentSearchesIs: [],
        searchIs : ""
    }  
    componentDidMount(){
          if(this.props.user.length===0){
            RequestCreator('GET', '/users/userInformation', '', localStorage.getItem('token')).then(res=>{
               this.props.login(res.data.data)
  
            })
          }        
    }

    handleSearchDropdown=(searchDropwown)=>{ 
        this.setState({searchIs : "" , searchDropwown})
    }

    handleDropdownBlur = (searchDropwown) => {
        this.setState({searchDropwown})
    }

    getSearchRes = (e) => {
        const { searchIs } = this.state;
        RequestCreator('GET', `/search/userCategory/?search=${searchIs}`, '', localStorage.getItem('token'))
        .then(d => {
            const response = d?.data?.data
            this.setState({searchItems : response?.items, searchCategouries : response?.categories,
                searchingIs : false,
                resentSearchesIs : response?.resentSearches
            })
        })
    }


     handleChange = (e) => {
        const {name , value} = e.target;
        this.setState({
            [name] : value,
            searchingIs : true
        },() =>{
            this.getSearchRes(e)
        })        
     }

     handleRecentSearch = (id) => {
         let data =  { savedFormId: id }
         RequestCreator('POST', `/search/addCount`, data, localStorage.getItem('token'))
        //  .then((res) =>{
        //      this.handleChange("")
        //  }) 
         this.props.history.push(`/view_form/${id}`)       
     }

     handleCateDataBySearch = (categoryId, name) => {
        this.props.setLoading();
        RequestCreator("GET",`/userCategory/getCategoriesData/${categoryId}`,"",localStorage.getItem("token")).then((res) => {
        this.props.refresh(res.data.data);
        this.props.removeLoading();
        this.props.activeSidebar(name)
        }).catch((error) => {
        this.props?.refresh([]);
        console.log(error);
        this.props.removeLoading();
        });
     }

    navbaropen = () => {
        document.body.classList.add("navbar-vertical-aside-show-mode");
    }


    logout=()=>{
        this.props.activeSidebar("All items")
        this.getAllCollectionItems()
        console.log(this.props)        
        this.props.performLogout();
        this.props.deleteUserCollection();
        this.props.history.push('/')
        
    }

    getAllCollectionItems= ()=>{
        this.props.setLoading();
        RequestCreator("GET","/userCategory/userAllCategory","",localStorage.getItem("token")).then((res) => {
          let listData =  res.data.data;
        //    if( listData.length){
        //       this.props.history.replace(`/view_form/${listData[0].userCategoryId}`);
        //       return;
        //     }
            this.props.refresh(listData);
            this.props.removeLoading();
    
         }).catch((error) => {
          this.props.refresh([]);
           this.props.removeLoading();
         });

         localStorage.removeItem('token')
      }

    render() {
        const {searchDropwown, searchItems, searchingIs, searchCategouries} = this.state;
        const { user } = this.props;
        return (
            <>  
                <header className="  header-top navbar-container bg_sm_color">

                    <div className="row justify-content-between align-items-center">

                        <div className="col-auto max-w-400 pl-1 sm_col_auto sm_pl_1">
                            {/* <Link to="/#" ><img src={logo} className="logo" /></Link> */}
                            
                            <Link className="navbar-brand none_header_logo" to="/dashboard" replace >
                                <div className="d-flex">
                                    <img src={logo} className="logo" />
                                    {/* <img src={logoThea} className="logo_thea" /> */}
                                </div>
                            </Link>
                            <div className="d-flex">
                                {/* <span className="navbar-toggler-icon d-xl-none mr-5 mob-mr-20 " data-toggle="tooltip" data-placement="left" title="Expand"/> */}
                                
                                <span className="navbar-toggler-icon d-xl-none side_bar_nav c_pointer" onClick={this.navbaropen}/>
                                
                                {/* <div className="headericon_pinned_section ml-auto">
                                    <div className="d-flex">
                                        <img src={require('../../Assets/images/pnned.png').default} className="header_icon show" />
                                        <img src={require('../../Assets/images/pinned_hpng.png').default} className="header_icon hide" />
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className="col">
                            <div className="row align-items-center">
                                <div className="col-sm search_d_none sm_col_block">
                                    {/* <form> */}
                                        <div className="max-w-300 position-relative sm_max_w_320 sm_ml_auto">
                                            <div className="search" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <div className="search-prepend">
                                                    <i className="fe fe-search" />
                                                </div>
                                                {/* <Search handleChange={this.handleChange} handleSearchDropdown={this.handleSearchDropdown} value={searchIs}/>
                                                 */}

                                                <div>
                                                <input type="search" 
                                                onFocus={()=> this.handleSearchDropdown(true)} 
                                                className="js-form-search form-control border-0  header-seacrh font-14" 
                                                placeholder="Search "
                                                aria-label="Search" 
                                                name ="searchIs"
                                                value={this.state.searchIs}
                                                onBlur={()=> this.handleDropdownBlur(false)} 
                                                onChange={this.handleChange}
                                                 autoComplete="OFF" 
                                                 id="searchIs"
                                                />
                                                </div>
                                               
                                            </div>
                                            {/* =============search-list=============== */}
                                            {/* <div className={`search-dropdwon card mb-0 custom-scroll ${searchDropwown ? 'active' : ''}`}> */}
                                            <div className="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">
                                                <div className=" card-body-height py-3 custom-scroll">
                                                    {/* <small className="dropdown-header mb-n2">RECENT SEARCHES</small>
                                                    <div className="dropdown-item bg-transparent text-wrap my-3">
                                                        {resentSearchesIs?.map((obj, index) => (
                                                            <span className="h4 space_mrl sm_space_mlr" key={index}>
                                                                <a className="btn btn-xs btn-soft-dark btn-pill" href={`/view_form/${obj?.userCategoryUserCategoryId}`}>
                                                                    {obj?.userCategory?.title} <i className="fe fe-search ml-1" />
                                                                </a>
                                                            </span>
                                                        ))}                                                        
                                                    </div>                                            */}
                                                    {/* <div className="dropdown-divider my-3"></div> */}
                                                    <small className="dropdown-header mb-n2">ITEMS</small>
                                                    {searchingIs ? 
                                                    <div className="align-items-center">
                                                        <div className="col">
                                                           <div className="media justify-content-center" >
                                                             <Spinner color="text-dark mt-4 spinner-border-sm text-center"/>
                                                           </div>                                                           
                                                        </div>                                                    
                                                    </div>:
                                                    searchItems?.length > 0 ? searchItems?.map((obj, index) =>(
                                                    <a className="dropdown-item my-3" href="#" key={index}  
                                                     onClick={() => this.handleRecentSearch(obj?.userCategoryId)}                                                   
                                                    >
                                                        <div className="row align-items-center"                                                         
                                                        >
                                                            <div className="col ty-2">
                                                                <div className="media align-items-center">
                                                                   <span className="icon icon-xs  mr-2">
                                                                     <img src={imgBaseUrl + obj?.icon} className="img-fluid"/>
                                                                   </span>
                                                                    <div className="media-body text-truncate">
                                                                        <span>{obj?.title}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-auto">
                                                                <span>{obj?.custom_updatedAt?.split('T')[0]}</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    )): 
                                                    <small className="dropdown-header mb-n2">No Items found</small>
                                                    }
                                                    <div className="dropdown-divider my-3"></div>
                                                    <small className="dropdown-header mb-n2">CATEGORIES</small>
                                                    {searchingIs ? 
                                                    <div className="align-items-center">
                                                        <div className="col">
                                                           <div className="media justify-content-center">
                                                             <Spinner color="text-dark mt-4 spinner-border-sm text-center" />
                                                           </div>                                                           
                                                        </div>                                                    
                                                    </div>:
                                                    searchCategouries?.length > 0 ? searchCategouries.map((obj , index) => (
                                                    <a className="dropdown-item my-3" href="#" key={index}>
                                                       <div className="row align-items-center">
                                                           <div className="col">
                                                               <div className="media align-items-center">
                                                                   <span className="icon icon-xs  mr-2">
                                                                     <img src={imgBaseUrl + obj?.icon} className="img-fluid"/>
                                                                   </span>
                                                                   <div className="media-body text-truncate" 
                                                                //    onClick={()=> this.handleCateDataBySearch(obj?.categoryId, obj?.name)}
                                                                   >
                                                                       <span>{obj?.name}</span>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                           <div className="col-auto">
                                                               <span>{obj?.createdAt?.split("T")[0]}</span>
                                                           </div>
                                                       </div>
                                                    </a>
                                                    )): 
                                                    <small className="dropdown-header mb-n2">No categories found</small>
                                                    }

                                                </div>
                                            </div>
                                            <span className={`fe fe-x search-close ${searchDropwown ? 'active' : ''}`} 
                                            style={{opacity:this.state.searchDropwown ? 1 : 0}}
                                                onClick={()=>this.handleSearchDropdown(false)}
                                                />
                                            {/* =================close=========== */}
                                        </div>
                                    {/* </form> */}
                                   
                                </div>
                                <div className="col-sm-auto sm_col_block_c">
                                    <div className="avatar-notification text-right">
                                        {/* <span className="navbar-toggler-icon d-xl-none mr-5 mob-mr-20" data-toggle="tooltip" data-placement="left" title="Expand"/> */}
                                        {/* <template> */}
                                        {/* <Link  className="navbar-user-link btn-icon btn-ghost-secondary rounded-circle notification_none">
                                           //<i class="fe fe-bell"></i> 
                                           <img src={well}style={{ width: '16px', height:'16px' }}/>
                                           <span class="btn-status btn-sm-status btn-status-danger"></span>
                                        </Link> */}
                                        {/* </template> */}
                                        <div className="avatar avatar-sm  avatar-hover">
                                            <a className="cursor-pointer">
                                                <img src={
                                                    user && user[0] && user[0].profileImage
                                                    ?
                                                    String(imgBaseUrl + user[0].profileImage)
                                                    :
                                                    userAvatar
                                                    } className="avatar-img rounded-circle" alt="..." data-toggle="collapse" href="#profile" />
                                            </a>
                                            <div className="drop-down-profile collapse" id="profile">
                                                <div className="drop-down-header">
                                                    <div className="row align-items-center">
                                                        <div className="col-auto">

                                                            <a href="#" className="avatar  avatar-sm">
                                                                <img src={
                                                                    user && user[0] && user[0].profileImage
                                                                    ?
                                                                    String(imgBaseUrl + user[0].profileImage)
                                                                    :
                                                                    userAvatar
                                                                    } className="avatar-img rounded-circle" alt="..." />
                                                            </a>
                                                        </div>
                                                        <div className="col ml-n2">

                                                            <h4 className="mb-1 font-14 font-weight-600 ">
                                                                <a href="#" className="text-black">  {this.props.user.length>0&&this.props.user[0].name} </a>
                                                            </h4>

                                                            <p className="card-text small text-muted">
                                                                <a href="#" className="text-muted"> {this.props.user.length>0&&this.props.user[0].emailID}  </a>
                                                            </p>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="drop-down-body">
                                                    <Link to="/MyAccount">
                                                        <li className="text-dark-gray font-14">Profile & Account</li>
                                                    </Link>
                                                     <Link to="/" onClick={this.logout}>
                                                        <li className="text-dark-gray font-14">Sign out</li>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>


                    </div>

                </header>
            </>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        user:state.user.userInfo  // since you have used root reducer, you need to  specify which property you want to access from the store.
    }
  }
  const mapDispatchToProps=(dispatch)=>{
      return{
          performLogout:()=>dispatch(logout()),
          login:(data)=>dispatch(login(data)),
          deleteUserCollection:()=>dispatch(deleteCollection()),
          refresh: (data) => dispatch(refreshCollection(data)),
          setLoading: ()=>dispatch(setLoading()),
          removeLoading: ()=>dispatch(removeLoading()),
          activeSidebar: (data)=>dispatch(activeSidebar(data))
      }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Header))
