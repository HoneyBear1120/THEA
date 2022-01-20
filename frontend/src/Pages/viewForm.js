import React, { Component} from "react";
import InputBox from "./Components/InputBox";
import Button from "./Components/Button";
import PinIcon from "./Components/PinIcon";
import DownloadIcon from "./Components/DownloadIcon";
import { BankAccountTemplate } from "./FormTemplates/BankAccount";
import { RequestCreator } from "../ApiController/baseUrl";
import Select from "react-select";
import Spinner from "./Components/Spinner";
import Notification from "./Components/Notification";
import Layout from "./Components/layout";
import { withRouter } from "react-router";
import Lastmodified from "./Components/LastModified";
import {  OPTIONS, fileSnippet } from "./FormTemplates/utils";
import AttachmentModal from "./FormTemplates/AttachmentModal"; 
import { connect } from "react-redux";
import { refreshCollection, setLoading, removeLoading  } from "../Redux/actions";
import EditForm from './FormMutations/EditForm'

const customStyles = {
  dropdownIndicator: (base) => ({
    ...base,
    color: "#dee2ec",
  }),
};


class ViewForm extends Component {
  state = {
    selectedOption: null,
    formData: null,
    loader: true,
    files: [],
    notification: {
      isActive: false,
      type: "",
      message: "",
    },
    formId: null,
    readOnly: true,
    modalIsOpen : false,
    FileIs : "",
    filetypeIs: "",
    formEditIs : false
  };

  setFormState = (stateObj) => {
    this.setState(stateObj)
  }

  //provide the @state.formData type object
  decideToShowItems = (dataObject) =>{

    dataObject.sections.forEach(eachSection=>{
      let toShowSection = false;
        eachSection.sectionForm.forEach(eachFields=>{
          if(eachSection.type==='attachment'){
            eachFields.show=true;
            toShowSection=true;
          }else if(eachSection.type==='table'){
            if(eachFields.rowValues[0].name){
              eachFields.show = true;
              toShowSection=true;
            }
          }
          else if(eachSection.type==='notes'){
            toShowSection=true;
            if(eachFields.labelValue ==='tags'){
              eachFields.show = true 
            }else if(eachFields.value){
              eachFields.show = true;
            }
          }
          else if(eachFields.value){
            eachFields.show = true;
            toShowSection=true;
          }
        });

    if(toShowSection){
      eachSection.show=true;
    }

    });///terminating
  }


  getUserCategory = () =>{
    this.setState({ formId: this.props.match.params.id, loader : true });

    RequestCreator(
      "GET",
      `/userCategory/userTitleDetail?userCategoryId=${this.props.match.params.id}`,
      "",
      localStorage.getItem("token")
    )
      .then((res) => {
        let data = JSON.parse(JSON.stringify(res.data.data));
        this.decideToShowItems(data);
        this.setState({ formData: data }, () => {
          this.setState({ loader: false });
        });
      })
      .catch((err) => {
        this.setState({ loader: false });
      });
  }

  componentWillMount() {
    this.getUserCategory()
  }

  handleSectionChange = (e, index) => {
    let temp = { ...this.state.formData };
    temp.sections[index].value = e.target.value;
    this.setState({ formData: temp });
  };

  handle_Branch_Change = (e, parentIndex, childIndex, isLabel) => {
    let temp = { ...this.state.formData };
    if (isLabel) {
      temp.sections[parentIndex].sectionForm[childIndex].labelValue =
        e.target.value;
    } else {
      temp.sections[parentIndex].sectionForm[childIndex].value = e.target.value;
    }

    this.setState({ formData: temp });
  };

  add_Branch = (parentIndex, childIndex) => {
    let temp = { ...this.state.formData };
    temp.sections[parentIndex].sectionForm[childIndex].showDecrement = true;
    temp.sections[parentIndex].sectionForm.push({
      labelFieldType: "text",
      labelValue: "label",
      labelPlaceHolder: "value",
      valueFieldType: "text",
      value: "",
      valuePlaceHolder: "new field",
      isActive: "true",
      uid: "uid",
      showDecrement: false,
    });

    this.setState({ formData: temp });
  };

  delete_Branch = (parentIndex, childIndex) => {
    let temp = { ...this.state.formData };
    temp.sections[parentIndex].sectionForm.splice(childIndex, 1);
    this.setState({ formData: temp });
  };

  componentDidUpdate() {
    if (this.state.notification.isActive) {
      setTimeout(() => {
        this.setState({
          notification: { ...this.state.notification, isActive: false },
        });
      }, 2000);
    }

    if (this.props.match.params.id !== this.state.formId) {
      this.setState({ formId: this.props.match.params.id }, () => {
        this.setState({ loader: true });
      });

      RequestCreator(
        "GET",
        `/userCategory/userTitleDetail?userCategoryId=${this.props.match.params.id}`,
        "",
        localStorage.getItem("token")
      )
        .then((res) => {
          let data = JSON.parse(JSON.stringify(res.data.data));
          this.decideToShowItems(data);
          this.setState({ formData: data }, () => {
            this.setState({ loader: false });
          });
        })
        .catch((err) => {
          this.setState({ loader: false });
        });
    }
  }
  //handles the changes from the react select
  handleChange = (parentIndex, childIndex, selectedOption) => {
    console.log(parentIndex, childIndex, selectedOption);
    let temp = { ...this.state.formData };
    temp.sections[parentIndex].sectionForm[childIndex].value = selectedOption;
    this.setState({ formData: temp });
  };

  handleTitleChange = (e) => {
    let temp = { ...this.state.formData };
    console.log(e.target.value);

    temp.formTitle = e.target.value;
    this.setState({ formData: temp });
  };

  handleSubmit = async () => {
    try {
      this.setState({ loader: true });
      let status = await RequestCreator(
        "post",
        `/userCategory/categoryDetail`,
        this.state.formData,
        localStorage.getItem("token")
      );
      if (status.status === 200) {
        this.setState({
          notification: {
            isActive: true,
            type: "bg-success",
            message: "Data Saved!",
          },
        });
        let savedInfo = await RequestCreator(
          "GET",
          "/userCategory/userAllCategory",
          "",
          localStorage.getItem("token")
        );
        this.props.refresh(savedInfo.data.data);
      }
    } catch (error) {
      console.log(error);
      this.setState({ loader: false }, () => {
        this.setState({
          notification: {
            isActive: true,
            type: "bg-danger",
            message: "An Error Occurred While Saving form",
          },
        });
      });
    }
  };

  resetForm = (e) => {
    let defaultForm = JSON.parse(JSON.stringify(BankAccountTemplate));
    this.setState({ formData: defaultForm });
  };

  fileHandler = (index, isdelete, data, childIndex) => {
    let temp = { ...this.state.formData };
    //incase a new file is added.
    if (!isdelete) {
      temp.sections[index].sectionForm.push(data);

      this.setState({ formData: temp });
    } else {
      temp.sections[index].sectionForm.splice(childIndex, 1);
      this.setState({ formData: temp });
    }
  };

  edit=()=>{
    // this.props.history.push(`/edit_category/${this.state.formId}`)
    this.setFormState({formEditIs : true})
  }


  pinTheItem = async () =>{
    let { formData, notification, formId } = this.state;
    formData.isPinned = !formData.isPinned
    try{
      let savedInfo = await RequestCreator(
        "PUT",
        "/userCategory/updatePinnedStatus",
        {
          "pinned":formData.isPinned,
          "id":formId
         },
        localStorage.getItem("token")
      );
      if(savedInfo.status){
        this.setState({formData});
        this.props.setLoading();
        RequestCreator("GET","/userCategory/userPinnedCategoryList","",localStorage.getItem("token")).then((res) => {
          this.props.refresh(res.data.data);
          this.props.removeLoading();
        })
      }else{
        notification={
          isActive: true,
          type: "bg-danger",
          message: "Unable to complete you request, please try later",
        }
      }
    }
    catch(e){
      notification={
        isActive: true,
        type: "bg-danger",
        message: "Unable to complete you request, please try later",
      }
    }
    
  }
  
  handleModal = (sections) => {
    this.setState({modalIsOpen : true, FileIs : sections?.fileUrl })
  }

  closeModal = () => {
    this.setState({modalIsOpen : false})
  }

  render() {
    const propsForNavBar =   this.props.location?.preventCollectionReloading;
    const { formEditIs } = this.state;
    // if(!this.state.formData){
    //   return <div className="d-flex" style={{justifyContent:'center', alignItems:'center', height:'100vh'}}><h2>Sorry, we couldn't find your content this time!</h2></div>
    // }
    return (
      <>
      {
      formEditIs ? 
      <EditForm formEditIs={formEditIs} setFormState = {this.setFormState} getUserCategory = {this.getUserCategory}/> :
      <Layout header={true} navbar={true} sidebar={true} propsForNavBar={propsForNavBar}>
        {this.state.loader ? (
          <div className="d-flex justify-content-center">
            <Spinner color="text-dark mt-4  spinner-border-sm " />
          </div>
        ) : ( 
          <div className="dash-content mob-ml-0 view-mode">
            <div className="header">
              <div className="header-body">
                <div className="container-fluid position-relative">
                  <div className="row justify-content-lg-center position-relative">
                    <div className="col-xl-9 padding-header">
                      <div className="row">
                        <div className="col-auto">
                          <div className="upload_logo">
                            <img
                              src={`https://theadev-app-assets.s3.amazonaws.com/${this.state.formData.icon}`}
                            />
                          </div>
                        </div>
                        <div className="col">
                          <form class="icon_export">
                            <InputBox
                              disable={this.state.readOnly}
                              value={this.state.formData.formTitle && `${this.state.formData.formTitle?.substring(0,50)} ${this.state.formData.formTitle?.length > 50 ? "..." :''} `}
                              type={this.state.formData.titleFieldType}
                              className="input_title_header f_out"
                              placeholder="Title"
                              onChange={(e) => this.handleTitleChange(e)}
                            />
                            <div className="d-flex">
                             <PinIcon pinned={this.state.formData.isPinned} onClick={this.pinTheItem}/>
                             {/* <DownloadIcon 
                             onClick={()=>{console.log("Download it")}}
                            /> */}
                          </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="right_box right_side_block">
                      <Button type="button" onClick={this.edit} className="btn btn-primary cs_btn_size">
                        Edit
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-fluid pb-5">
              <div className="row justify-content-lg-center ">
                <div className="col-lg-12 col-xl-9 custom-field">
                  {this.state.formData.sections.map((config, p_index) => {
                    if(!config.show)
                      return null;

                    return (
                      <div className="cs_card_style" key={p_index}>
                        <div className="card-header">
                          <InputBox
                            disable={this.state.readOnly}
                            type={config.titleFieldType}
                            name={`section.${p_index}`}
                            value={this.state.formData.sections[p_index].value}
                            id={`section.${p_index}`}
                            onChange={(e) =>
                              this.handleSectionChange(e, p_index)
                            }
                            className="form-control placeholder-black input_title"
                            placeholder={config.placeHolder}
                          />
                        </div>

                        <div className={ config.type === "notes" ?`card-body label_cd`: "card-body"}>
                          <div className={config.type === "attachment" && "row"}>
                            {config.sectionForm.map((sections, index) => {
                              if(!sections.show)
                                return null;
                              return config.type === "text" ? (

                                <div className="form-group" key={index}>
                                  <div className="row">
                                    <div className=" col-sm-5 col-lg-5  col-xl-4">
                                      {sections.labelValue.length>0&&                                      
                                      <InputBox
                                        disable={this.state.readOnly}
                                        type={sections.labelFieldType}
                                        id={`section.${p_index}.child.${index}.labelValue`}
                                        onChange={(e) =>
                                          this.handle_Branch_Change(
                                            e,
                                            p_index,
                                            index,
                                            true
                                          )
                                        }
                                        value={
                                          this.state.formData.sections[p_index]
                                            .sectionForm[index].labelValue
                                        }
                                        className="input_cs f_out"
                                        placeholder={sections.labelPlaceHolder}
                                      />}
                                    </div>
                                    <div className="col-lg-7 col-sm-7 col-xl-8">
                                      <div className="position-relative">
                                        {sections.valueFieldType ===
                                        "options"&&sections.value.length>0 ? (
                                          <Select
                                            value={
                                              this.state.formData.sections[
                                                p_index
                                              ].sectionForm[index].value
                                                .length > 0 && {
                                                label: this.state.formData
                                                  .sections[p_index]
                                                  .sectionForm[index].value,
                                                value: this.state.formData
                                                  .sections[p_index]
                                                  .sectionForm[index].value,
                                              }
                                            }
                                            isDisabled={this.state.readOnly}
                                            onChange={(selectedOption) =>
                                              this.handleChange(
                                                p_index,
                                                index,
                                                selectedOption.value
                                              )
                                            }
                                            options={OPTIONS[sections.option]}
                                            placeholder="select"
                                            styles={customStyles}
                                            className="cs_select"
                                          />
                                        ) : (
                                          <>
                                          {sections.value.length>0&&
                                          <InputBox
                                            disable={this.state.readOnly}
                                            type={sections.valueFieldType}
                                            id={`section.${p_index}.child.${index}.value`}
                                            onChange={(e) =>
                                              this.handle_Branch_Change(e,
                                                p_index,
                                                index,
                                                false
                                              )
                                            }
                                            value={
                                              this.state.formData.sections[
                                                p_index
                                              ].sectionForm[index].value
                                            }
                                            className="left_cs_input f_out"
                                            placeholder={
                                              sections.valuePlaceHolder
                                            }
                                          />}
                                          </>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ) :config.type ==='table'?(
                                <div className="table-responsive table_style no_wrap_table">
                                <table className="table table-sm card-table">
                                    <thead>
                                        <tr>
                                        {sections.columnTitle.map((name)=>
                                          <th className="text-center"><span className="text-muted" >{name}</span></th>
                                          )}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            sections.rowValues.map((eachRow, rowIndex)=>
                                        <tr key={`tablerow${rowIndex}`}>
                                        <td><input type="text" name='name' className="left_cs_input f_out border-0 pl-0 pr-0 text-center" placeholder="new field"  value={eachRow.name} /></td>
                                        <td><input type="text" name='location' className="left_cs_input f_out border-0 pl-0 pr-0 text-center" placeholder="new field"  value={eachRow.location} /></td>
                                        <td><input type="text" name='reason' className="left_cs_input f_out border-0 pl-0 pr-0 text-center" placeholder="new field"  value= {eachRow.reason} /></td>
                                        <td><input type="text" name='date' className="left_cs_input f_out border-0 pl-0 pr-0 text-center" placeholder="mm/yyyy"  value= {eachRow.date} /></td>


                                    </tr>
                                           )
                                        }
                        
                                      </tbody>
                                </table>
                            </div>
                        ): config.type === "attachment"?(
                                <div className="col-xl-3   col-sm-6 col-md-12 col-lg-6">                              
                                  <div className="card_container"   onClick={() => this.handleModal(sections)}>
                                       <a 
                                          className="card_body_space attachment-border-radius" 
                                          style={{backgroundImage:`url(${sections.fileUrl})`, backgroundSize:'cover'}}                                         
                                        >  
                                        <div className="card_image" >
                                          {fileSnippet(sections)}
                                        </div>                                   
                                    </a>
                                    <div className="card_footer p-2">
                                      <div className="card_wp_border">
                                        <a
                                          // href={sections.fileUrl}
                                          // target="_blank"
                                        >
                                          {" "}
                                          <p className="mb-0">
                                            {sections.fileName}
                                          </p>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <div className="">
                                  {sections.labelFieldType === "notes" ? (
                                    <div className="row">
                                      <div className="col-sm-5 col-lg-5 col-xl-4 mb_spac_7r">
                                        <label className="text-black font-weight-600  label_lr_12 mb-0">
                                          {sections.labelValue}
                                        </label>
                                      </div>
                                      <div className="col-lg-7 col-sm-7 col-xl-8 mb_spac_7r">
                                        <textarea
                                          className="text_area f_out min-height-100"
                                          placeholder={
                                            sections.valuePlaceHolder
                                          }
                                          id="Textarea1"
                                          row={10}
                                          cols={90}
                                          value={
                                            this.state.formData.sections[
                                              p_index
                                            ].sectionForm[index].value
                                          }
                                          onChange={(e) =>
                                            this.handle_Branch_Change(
                                              e,
                                              p_index,
                                              index,
                                              false
                                            )
                                          }
                                          disabled={this.state.readOnly}
                                        />
                                      </div>
                                    </div>
                                  ) : (
                                    <div>
                                     {sections?.value && <div className="row">
                                        <div className="col-sm-5 col-lg-5  col-xl-4 mb_spac_7r">
                                          <label className="text-black font-weight-600 label_lr_12 mb-0">
                                            {sections.labelValue}
                                          </label>
                                        </div>
                                        <div className="col-lg-7 col-sm-7 col-xl-8 mb_spac_7r">
                                          <div className="position-relative">
                                            <InputBox
                                              disable={this.state.readOnly}
                                              type={sections.valueFieldType}
                                              className="left_cs_input f_out"
                                              placeholder={
                                                sections.valuePlaceHolder
                                              }
                                              value={
                                                this.state.formData.sections[
                                                  p_index
                                                ].sectionForm[index].value
                                              }
                                              onChange={(e) =>
                                                this.handle_Branch_Change(
                                                  e,
                                                  p_index,
                                                  index,
                                                  false
                                                )
                                              }
                                            />
                                          </div>
                                        </div>
                                      </div>  }  
                                      <Lastmodified lastModified={this.state.formData.custom_updatedAt} created={this.state.formData.createdAt}  />
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                          
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <Notification
                type={this.state.notification.type}
                message={this.state.notification.message}
                active={this.state.notification.isActive}
              ></Notification>
            </div>
          </div> 
        )}
        <AttachmentModal modalIsOpen ={this.state.modalIsOpen} FileIs = {this.state.FileIs} filetypeIs={this.state.filetypeIs} closeModal={this.closeModal} data={this.state?.formData?.sections}/>
      </Layout>
  }
    </>
    );
  }
}

// export default withRouter(ViewForm);
const mapStateToProps = (state) => {
  return {
    collections: state.userCollections.collection
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    refresh: (data) => dispatch(refreshCollection(data)),
    setLoading: ()=>dispatch(setLoading()),
    removeLoading: ()=>dispatch(removeLoading()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ViewForm));
