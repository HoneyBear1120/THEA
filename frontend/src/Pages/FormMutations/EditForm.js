import React, { Component } from "react";
import { Link } from 'react-router-dom';

import InputBox from "../Components/InputBox";
import Button from "../Components/Button";
import PinIcon from "../Components/PinIcon";
import Dropzone from "../Components/DropZone";
import Modalbutton from "../Components/ModalButton";
import { RequestCreator } from "../../ApiController/baseUrl";
import { connect } from "react-redux";
import { refreshCollection, activeSidebar } from "../../Redux/actions";
import Select from "react-select";
import Spinner from "../Components/Spinner";
import Notification from "../Components/Notification";
import Layout from "../Components/layout";
import { withRouter } from "react-router";
import Lastmodified from "../Components/LastModified";
import { find_subtitle, OPTIONS } from "../FormTemplates/utils";
import Deletemodal from "../Components/DeleteModal";
import { templates } from '../FormTemplates/templates'
import {change_section_field, fileSnippet} from '../FormTemplates/utils'
import AttachmentModal from "../FormTemplates/AttachmentModal";
import {fileHandler as inputFile} from "../FormTemplates/utils";
var validateDate = require("validate-date");
var creditCardValidateExpiry = require('credit-card-expiry-validator');

const customStyles = {
  dropdownIndicator: (base) => ({
    ...base,
    color: "#dee2ec",
  }),
};

class EditForm extends Component {
  state = {
    selectedOption: null,
    formData:null,
    loader: true,
    files: [],
    notification:{
        isActive:false,
        type:'',
        message:''
    },
    formId:null,
    readOnly:false,
    formDataCopy:null,
    deleteModal:true,
    tempFileName:"",
    modalIsOpen : false,
    FileIs : ""
  };

  componentWillMount(){
  

    this.setState({formId:this.props.match.params.id})

    RequestCreator('GET',`/userCategory/userTitleDetail?userCategoryId=${this.props.match.params.id}`,'',localStorage.getItem('token')).then(res=>{


    let data=JSON.parse(JSON.stringify(res.data.data)) 
  

      this.setState({formData:data},()=>{
        this.setState({loader:false})
        this.setState({formDataCopy:data})
      })

   }).catch(err=>{
    this.setState({loader:false})
   })
    
  }


  handleSectionChange = (e, index) => {
    console.log(e.target.id);

    let temp = { ...this.state.formData };
    temp.sections[index].value = e.target.value;
    this.setState({ formData: temp });
  };


  handle_Branch_Change = (e, parentIndex, childIndex, isLabel) => {
    let temp = { ...this.state.formData };
    // if (isLabel) {
    //   console.log(isLabel);
    //   temp.sections[parentIndex].sectionForm[childIndex].labelValue =
    //     e.target.value;
    // } else {
    //   console.log(isLabel);
    //   temp.sections[parentIndex].sectionForm[childIndex].value = e.target.value;
    
    // }

    let mutates_data = change_section_field(e, parentIndex, childIndex, isLabel, temp)

    this.setState({ formData: mutates_data });
  };


  add_Branch = (parentIndex, childIndex) => {
    let temp = { ...this.state.formData };
    temp.sections[parentIndex].sectionForm[childIndex].showDecrement = true;
    temp.sections[parentIndex].sectionForm.push({
      labelFieldType:"text",
      labelValue:"",
      labelPlaceHolder: "custom",
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



  componentDidUpdate(){
    if(this.state.notification.isActive){
      setTimeout(()=>{
          this.setState({notification:{...this.state.notification,isActive:false}})
      },2000)
    }


    if(this.props.match.params.id!==this.state.formId){
       this.setState({formId:this.props.match.params.id},()=>{
         this.setState({loader:true})
       })
       
       RequestCreator('GET',`/userCategory/userTitleDetail?userCategoryId=${this.props.match.params.id}`,'',localStorage.getItem('token')).then(res=>{


        let data=JSON.parse(JSON.stringify(res.data.data))
   
   
         this.setState({formData:data},()=>{
           this.setState({loader:false})
         })
   
      }).catch(err=>{
       this.setState({loader:false})
      })

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

  showDecrementForTable = (bool, p_index, child_index, row_index) =>{
        return bool? (
              <i onClick={(e) =>
                      this.delete_table_row( p_index, child_index, row_index)
                  }
                  className=" fe  fe-minus-circle plus-circle-1 text-danger"
              />
          ) : (
              <i onClick={(e) =>
                      this.add_row_to_table(p_index, child_index)
                  }
                  className=" fe fe-plus-circle plus-circle-1 "
              />
          )
      }

    delete_table_row=(p_index, child_index, row_index)=>{
        let {formData} = this.state;
        let rows = formData.sections[p_index].sectionForm[child_index].rowValues;
        let newRows = [...rows.slice(0,row_index), ...rows.slice(row_index+1)]
        formData.sections[p_index].sectionForm[child_index].rowValues = newRows;
        this.setState({formData})
      }

    processTableData = (event, p_index, child_index,row_index )=>{
      let col_name = event.target.name;
      let value = event.target.value;
      let {formData} = this.state;
      let affected_row = formData.sections[p_index].sectionForm[child_index].rowValues[row_index];

      if (col_name === "date") {
          if (value.length > 7) {return}
          else if(value.includes('-')){
              let str = value.split('-');
              let mm = parseInt(str[0])
              if(isNaN(mm) && str[0]!='') return;
                  else if(mm>12) return;

              affected_row[col_name] = value;
          }else{
              let mm = parseInt(value)
              if(isNaN(mm) && value!='')
                  return;
              else if(mm>12)
                  return;
              if(value.length===2){
                  affected_row[col_name] = value+'-';
              }else 
              affected_row[col_name] = value;
          }
      }
      else{
          affected_row[col_name] = value;
      }
      
      this.setState({formData})
    }

    add_row_to_table = (p_index, child_index )=>{
        let {formData} =this.state;
        let rows = formData.sections[p_index].sectionForm[child_index].rowValues;
        rows[rows.length-1].showDecrement = true;
        formData.sections[p_index].sectionForm[child_index].rowValues = [...rows, {name:"", location:"", reason:'', date:'', showDecrement:false}]
        this.setState({formData})
    }

    pinTheItem = () =>{
      let { formData } = this.state;
      formData.isPinned = !formData.isPinned
      this.setState({formData});
    }

  handleSubmit = async () => {
    this.props.activeSidebar("All items")
    // const a = this.state.formData.sections?.map(el => {
    //  return el.sectionForm.filter(item => item.value !== "") 
    // })
    // const hasValue = a?.find(el => el?.length > 0)

    try {
      if(this.state.formData.formTitle?.length<=0) throw Error('Hey, please fill the title atleast!');
        this.setState({ loader: true });
        const categoryId = this.state.formData.categoryId;

        let index=templates.findIndex((template)=>{
          return categoryId===template.categoryId
      })
       //the icon object needs to be deleted as the API is strictly accepting limited no of fields.
          let dataJSON=JSON.parse(JSON.stringify(this.state.formData));
          delete dataJSON.icon;
          dataJSON.subTitle=find_subtitle(dataJSON,templates[index].template_name)
          let sections = this.state.formData.sections
          let tags = sections[sections.length-1].sectionForm[1]?.value
          dataJSON.tags = tags;
          if(dataJSON.categoryId === 'wob9hRCuZPONHGFXAAAV')
              dataJSON.tags = "";
        // if(hasValue?.length > 0){
          let status = await RequestCreator( "put",`/userCategory/updateCategoryDetail`,dataJSON,localStorage.getItem("token"));
               
          if (status.status === 200) {
          this.setState({notification:{isActive:true,type:'bg-success',message:'Data Submit Successfully'}})
          let savedInfo = await RequestCreator("GET","/userCategory/userAllCategory","",localStorage.getItem("token"));
          this.props.refresh(savedInfo.data.data);
          this.props.history.push(`/view_form/${this.state.formId}`)
        // }
    } else{
      this.setState({notification:{isActive:true,type:'bg-secondary',message:'Atleast 1 field value is required..'}})
      this.setState({ loader: false });
    }
    } catch (error) {
      console.log(error);
      this.setState({ loader: false },()=>{
        this.setState({notification:{isActive:true,type:'bg-danger',message: error.message}})
      });
    }

    this.props.setFormState({formEditIs : false})
    this.props.getUserCategory()
  };


showDecrement = (bool,  p_index, index) =>{
     
  return bool? (
        <i onClick={(e) =>
                this.delete_Branch(p_index, index)
            }
            className=" fe  fe-minus-circle plus-circle text-danger"
        />
    ) : (
        <i onClick={(e) =>
                this.add_Branch(p_index, index)
            }
            className=" fe fe-plus-circle plus-circle "
        />
    )
}



  fileHandler = (index, isdelete, data, childIndex) => {
    let temp = { ...this.state.formData };
    //incase a new file is added.
    if (!isdelete) {

      let mutated_data=inputFile(index,isdelete,temp,childIndex,data)
        this.setState({mutated_data})

    } else {
      temp.sections[index].sectionForm.splice(childIndex, 1);
      this.setState({ formData: temp });
    }
  };


  deleteDataItem = async() =>{
    const itemId = this.state.formData.userCategoryId;
    try{
      let response = await RequestCreator( "put",`/userCategory/deleteForm` ,{userCategoryId:itemId} ,localStorage.getItem("token"));
      if (response.status === 200) {
        this.setState({notification:{isActive:true,type:'bg-success', message:'Item deleted!'}})
        let savedInfo = await RequestCreator("GET", "/userCategory/userAllCategory", "", localStorage.getItem("token"));
        this.props.refresh(savedInfo.data.data);
        setTimeout(()=>{
          this.props.history.replace('/dashboard')}, 300)
    }
    
    }
    catch(e){
      console.log(e)
      this.props.refresh([]);
      setTimeout(()=>{
        this.props.history.replace('/dashboard')}, 300)
    }
 
  }

  deleteAttachment = (p_index, index)=>{
    let {formData} = this.state;
    let fileList  = formData.sections[p_index].sectionForm;

    formData.sections[p_index].sectionForm = [...fileList.slice(0, index), ...fileList.slice(index+1)];
    this.setState({formData});
}

//contain the p_index and index of image selected
fileToRename = React.createRef({p_index:"", index:''});
onRenameIconClicked = (p_index, index) =>{
  this.fileToRename.current = {p_index, index};
  let {formData} = this.state;
  let fileObject  = formData.sections[p_index].sectionForm[index];
  this.setState({tempFileName:fileObject.fileName})
}
onRenameChange = ({target})=>{
  this.setState({tempFileName:target.value})
}
onRenameFileSubmit = ()=>{
  const {p_index, index} = this.fileToRename.current 
  let {formData} = this.state;
  let fileObject  = formData.sections[p_index].sectionForm[index];
  fileObject.fileName = this.state.tempFileName;
  this.setState({formData, tempFileName:""});
  document.getElementById("modalCancel").click();
}


handleModal = (sections) => {
  this.setState({modalIsOpen : true, FileIs : sections?.fileUrl})
}

closeModal = () => {
  this.setState({modalIsOpen : false})
}


  render() {
    return (
      <Layout header={true} navbar={true} sidebar={true} propsForNavBar>
      {this.state.loader&&this.state.formData==null?<div className="d-flex justify-content-center"><Spinner color="text-dark mt-4  spinner-border-sm "/></div>:
      <div className="dash-content mob-ml-0 ">
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
                          value={this.state.formData.formTitle}
                          type={this.state.formData.titleFieldType}
                          className="input_title_header f_out"
                          placeholder="Title"
                          onChange={(e) => this.handleTitleChange(e)}
                          disable={this.state.readOnly}
                        />
                        <div className="d-flex">
                            <PinIcon pinned={this.state.formData.isPinned} onClick={this.pinTheItem}/>
                            {/* <DownloadIcon /> */}
                          </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="right_box right_side_block">
                <Link to={{pathname:`/view_form/${this.state.formData.userCategoryId}`, preventCollectionReloading:true}} replace>
                 <Button type="button" className="btn btn-light cs_btn_size mr-3">
                    Cancel
                  </Button>
                  </Link>
                  <Button type="button" onClick={this.handleSubmit} className="btn btn-primary cs_btn_size">
                   {this.state.loader?<Spinner color='text-light spinner-border-sm'></Spinner>: this.state.formData.categoryId === "wob9hRCuZPONHGFXAAAV" ? 'Submit': "Save"}
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
                return (
                  <div className="cs_card_style" key={p_index}>
                    <div className="card-header">
                      <InputBox
                      disable={this.state.readOnly}
                        type={config.titleFieldType}
                        name={`section.${p_index}`}
                        value={this.state.formData.sections[p_index].value}
                        id={`section.${p_index}`}
                        onChange={(e) => this.handleSectionChange(e, p_index)}
                        className="form-control placeholder-black input_title"
                        placeholder={config.placeHolder}
                      />
                    </div>

                    <div
                      className={
                        config.type === "notes"
                          ? `card-body label_cd`
                          : "card-body"
                      }
                    >
                      <div className={config.type === "attachment" && "row"}>
                        {config.sectionForm.map((sections, index) => {
                          return config.type === "text" ? (
                            <div className="form-group" key={index}>
                              <div className="row">
                                <div className=" col-sm-5 col-lg-5  col-xl-4">
                                  <InputBox                                  
                                  disable={this.state.readOnly}
                                    type={sections.labelFieldType}
                                    id={`section.${p_index}.child.${index}.labelValue`}
                                    onChange={(e) =>
                                      this.handle_Branch_Change(e,p_index,index,true)}
                                    value={
                                      this.state.formData.sections[p_index]
                                        .sectionForm[index].labelValue
                                    }

                                    className="left_cs_input f_out"
                                    placeholder={sections.labelPlaceHolder}
                                  />
                                </div>
                                <div className="col-lg-7 col-sm-7 col-xl-8">
                                  <div className="position-relative">
                                    {sections.valueFieldType === "options" ? (
                                      <Select
                                        value={
                                          this.state.formData.sections[p_index]
                                            .sectionForm[index].value.length >
                                            0 && {
                                            label: this.state.formData.sections[
                                              p_index
                                            ].sectionForm[index].value,
                                            value: this.state.formData.sections[
                                              p_index
                                            ].sectionForm[index].value,
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
                                      <InputBox
                                      disable={this.state.readOnly}
                                        type={sections.valueFieldType === "password" ? "text" : sections.valueFieldType}
                                        id={`section.${p_index}.child.${index}.value`}
                                        onChange={(e) =>
                                          this.handle_Branch_Change(
                                            e,
                                            p_index,
                                            index,
                                            false
                                          )
                                        }
                                        value={
                                          this.state.formData.sections[p_index]
                                            .sectionForm[index].value
                                        }
                                        className="left_cs_input f_out"
                                        placeholder={sections.valuePlaceHolder}
                                      />
                                    )}
                                     {this.showDecrement(sections.showDecrement, p_index, index) }
                                   
                                  </div>
                                </div>
                              </div>
                            </div>
                          ):config.type ==='table'?(
                            <div className="table-responsive table_style no_wrap_table">
                            <table className="table table-sm card-table">
                                <thead>
                                    <tr>
                                    {sections.columnTitle.map((name)=>
                                      <th className="text-center"><span className="text-muted">{name}</span></th>
                                      )}
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        sections.rowValues.map((eachRow, rowIndex)=>
                                    <tr key={`tablerow${rowIndex}`}>
                                    <td><input type="text" name='name' className="left_cs_input f_out border-0 pl-0 pr-0 text-center" placeholder="new field" onChange={(event)=>{this.processTableData(event, p_index, index,rowIndex)}} value={eachRow.name} /></td>
                                    <td><input type="text" name='location' className="left_cs_input f_out border-0 pl-0 pr-0 text-center" placeholder="new field" onChange={(event)=>{this.processTableData(event, p_index, index,rowIndex)}} value={eachRow.location} /></td>
                                    <td><input type="text" name='reason' className="left_cs_input f_out border-0 pl-0 pr-0 text-center" placeholder="new field" onChange={(event)=>{this.processTableData(event, p_index, index,rowIndex)}} value= {eachRow.reason} /></td>
                                    <td><input type="text" name='date' className="left_cs_input f_out border-0 pl-0 pr-0 text-center" placeholder="mm/yyyy" onChange={(event)=>{this.processTableData(event, p_index, index,rowIndex)}} value= {eachRow.date} />{this.showDecrementForTable(eachRow.showDecrement,p_index, index, rowIndex)}</td>


                                </tr>
                                       )
                                    }
                    
                                  </tbody>
                            </table>
                        </div>
                    ) : config.type === "attachment" ? (
                            <div className="col-xl-3   col-sm-6 col-md-12 col-lg-6">
                              <div className="card_container">
                              <i className=" fe  fe-x cross-icon cursor-pointer"  onClick={()=>{this.deleteAttachment(p_index, index)}}/>
                              <a 
                                   className="card_body_space attachment-border-radius" 
                                   style={{backgroundImage:`url(${sections.fileUrl})`, backgroundSize:'cover'}}
                                   onClick={() => this.handleModal(sections)}
                                   >                                  
                                  <div className="card_image" >
                                    {fileSnippet(sections)}
                                  </div>
                                </a>
                                <div className="card_footer p-2">
                                  <div className="card_wp_border d-flex justify-content-between">
                                  <a href={sections.fileUrl} target="_blank">
                                    <p className="mb-0">{sections.fileName} </p> </a>
                                    <i className=" fe  fe-edit cursor-pointer" onClick={()=>{this.onRenameIconClicked(p_index, index)}} data-toggle="modal" data-target="#modalRename"/>
                                    </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="">
                              {sections.labelFieldType === "notes" ?
                                <div className="row">
                                  <div className="col-sm-5 col-lg-5 col-xl-4 mb_spac_7r">
                                    <label className="text-black font-weight-600  label_lr_12 mb-0">
                  
                                      {sections.labelValue}
                                    </label>
                                  </div>
                                  <div className="col-lg-7 col-sm-7 col-xl-8 mb_spac_7r">
                                    <textarea
                                      className="text_area f_out min-height-100"
                                      placeholder={sections.valuePlaceHolder}
                                      id="Textarea1"
                                      row={10}
                                      cols={90}
                                      defaultValue={""}
                                      value={
                                        this.state.formData.sections[p_index]
                                          .sectionForm[index].value
                                      }
                                      onChange={(e) =>
                                        this.handle_Branch_Change(
                                          e,
                                          p_index,
                                          index,
                                          false
                                        )
                                      }
                                      disable={this.state.readOnly}
                                    />
                                  </div>
                                </div>
                               : 
                               <div>
                                <div className="row">
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
                                        placeholder={sections.valuePlaceHolder}
                                        value={
                                          this.state.formData.sections[p_index]
                                            .sectionForm[index].value
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
                                
                                </div>
                                <Lastmodified lastModified={this.state.formData.updatedAt} created={this.state.formData.createdAt}  />
                                </div>
                              }
                            </div>
                          );
                        })}
                      </div>
                      {config.type === "attachment" && (
                        <Dropzone   disabled={this.state.readOnly} index={p_index} update={this.fileHandler} />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div class="col-12 text-xl-right text-right pr_space_b">
            <Modalbutton />
          </div>
          <Notification type={this.state.notification.type} message={this.state.notification.message} active={this.state.notification.isActive} ></Notification>
        </div>
      </div>}

      <div className="modal fade" id="modalRename" aria-labelledby="modalRename" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered max-width-450">
          <div className="modal-content">
          <div className="container-fluid  delete-form  bg-white border-radius box-shadow">
            <div className="col-12  align-self-center">
                <h1 className="font-size-18 text-center mb-3 ">Rename file</h1>
              <input onChange={this.onRenameChange} value={this.state.tempFileName} className="left_cs_input f_out"/>
            </div>
            <div className="d-flex justify-content-end mt-5">
                <button class="btn btn_cancel font-13" data-dismiss="modal" onClick={()=>{this.setState({tempFileName:""})}}  id="modalCancel" aria-label="Close">Cancel</button>
                <button type="button"  onClick={this.onRenameFileSubmit} className="btn btn-primary font-13" >OK</button>
            </div>
          </div>
            </div>
          </div>
        </div>
            <Deletemodal onConfirm={this.deleteDataItem} />
            <AttachmentModal modalIsOpen ={this.state.modalIsOpen} FileIs = {this.state.FileIs} closeModal={this.closeModal} data={this.state?.formData?.sections}/>
      </Layout>
    );
  }
}



const mapDispatchToProps = (dispatch) => {
    return {
      refresh: (data) => dispatch(refreshCollection(data)),
      activeSidebar: (data)=>dispatch(activeSidebar(data))
    };
  };
  
  export default connect(null, mapDispatchToProps)(withRouter( EditForm));
