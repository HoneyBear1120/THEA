import React, { Component } from "react";
import { connect } from "react-redux";
import { refreshCollection } from "../../Redux/actions";
import Usercategory from '../Components/userCategory';
import Spinner from "../Components/Spinner";

class AddNoteSidebar extends Component {


  SideBarParent = (children) =>(<>
    <nav
      className="navbar  navbar-light pb-0  border-right navbar-vertical navbar-expand-xl sm_border_color"
      id="addnotesidebar"
    >
      <div
        className="collapse navbar-collapse navbar_collapse"
        id="addnotesidebarCollapse"
      >
        <div className="navbar-vertical-container sm_pd_t_0">
          <div className="navbar-vertical-footer-offset">
            <div className="navbar-vertical-content height-vh pb_0">
              <ul className="navbar-nav second_nav">
                {children}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </>)

  render() {

const spinner = <div className="d-flex justify-content-center">
      <Spinner color="text-dark   spinner-border-sm " />
      </div>

const collectionList = this.props.collections.length>0&&this.props.collections.map((item,index)=>{
            return <Usercategory {...item} key={index}  subTitle={item.subTitle}  />
            })

    if(this.props.isLoading)
        return this.SideBarParent(spinner) 
      else
        return this.SideBarParent(collectionList) 

  }
}

const mapStateToProps = (state) => {
  return {
    collections: state.userCollections.collection,
    isLoading: state.userCollections.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    refresh: (data) => dispatch(refreshCollection(data)),
  };
};

export default connect (mapStateToProps, mapDispatchToProps)(AddNoteSidebar);
