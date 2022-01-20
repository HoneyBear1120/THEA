import React, { Component } from "react";
import { withRouter } from "react-router";
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import Select from "react-select";
import InputBox from "../Components/InputBox";
import Button from "../Components/Button";
import { BankAccountTemplate } from "./BankAccount";
import Dropzone from "../Components/DropZone";
import { RequestCreator } from "../../ApiController/baseUrl";
import { refreshCollection, activeSidebar } from "../../Redux/actions";
import Spinner from "../Components/Spinner";
import Notification from "../Components/Notification";
import Layout from "../Components/layout";
import { templates } from './templates';
import { find_subtitle,change_section_value,change_section_field,customStyles,OPTIONS,
add_new_input,delete_field,handle_title_change,fileHandler, fileSnippet} from "./utils";

var validateDate = require("validate-date");

class CreateCategory extends Component {
  state = {
        selectedOption: null,
        formData: null,
        loader: false,
        files: [],
        notification: {
            isActive: false,
            type: '',
            message: ''
        },
        mainLoader:true,
        tempFileName:""
    }

    //finds template with the help of a template name.
   componentWillMount() {
    this.onRouteChange();
   this.unlisten = this.props.history.listen((location, action) => {
    setTimeout(this.onRouteChange, 1000)
  });
   }

   onRouteChange=()=>{

    let index=templates.findIndex((template)=>{
        return this.props.match.params.template===template.template_name
    })

      if(index>-1){
          let data=JSON.parse(JSON.stringify(templates[index]))
              window.scrollTo({top: 0, behavior: 'smooth'});
          this.setState({formData:data})
      }
    // this.props.history.push("/dashboard")
   }

   componentWillUnmount() {
    this.unlisten();
}


//handles the section changes.
    handleSectionChange = (e, index) => {
        let mutated_data=change_section_value(e,{...this.state.formData},index)
        this.setState({ formData: mutated_data });
    }

    //handles the field chnages inside the sections.
    handle_Branch_Change = (e, parentIndex, childIndex, isLabel) => {
        let mutated_data=change_section_field(e,parentIndex,childIndex,isLabel,{...this.state.formData})
        this.setState({ formData: mutated_data });
    }


  
    add_Branch = (parentIndex, childIndex) => {
        let mutated_data=add_new_input(parentIndex,childIndex,{...this.state.formData});
        this.setState({formData:mutated_data})
    }

    delete_Branch = (parentIndex, childIndex) => {
        let mutated_data=delete_field(parentIndex,childIndex,{...this.state.formData})
        this.setState({ formData: mutated_data });
    }


    componentDidUpdate() {
        if (this.state.notification.isActive) {
            setTimeout(() => {
                this.setState({ notification: { ...this.state.notification, isActive: false } })
            }, 2000)
        }

       
    }
    //handles the changes from the react select
    handleChange = (parentIndex, childIndex, selectedOption) => {
        console.log(parentIndex, childIndex, selectedOption);
        let temp = { ...this.state.formData };
        temp.sections[parentIndex].sectionForm[childIndex].value = selectedOption;
        this.setState({ formData: temp });
    }

    handleTitleChange = (e) => {
      let mutated_data=handle_title_change(e,{...this.state.formData})
        this.setState({ formData: mutated_data });
    }

    handleSubmit = async () => {
        this.props.activeSidebar("All items")
        // const a = this.state.formData.sections.map(el => {
        //     return el.sectionForm.filter(item => item.value !== "") 
        //    })
        // const hasValue = a?.find(el => el?.length > 0)
           
        try {
            if(this.state.formData.formTitle.length<=0) throw Error('Hey, please fill the title atleast!');
               this.setState({ loader: true });
               let DATA=JSON.parse(JSON.stringify(this.state.formData))
                DATA.subTitle=find_subtitle(DATA,this.props.match.params.template)
                let sections = this.state.formData.sections
                let tags = sections[sections.length-1]?.sectionForm[1]?.value
                DATA.tags = tags;
                if(DATA.template_name === 'Request')
                        DATA.tags = "";

                delete DATA.template_name;
                delete DATA.icon;  
                // if(hasValue?.length > 0){      
                    let status = await RequestCreator("post", `/userCategory/categoryDetail`, DATA, localStorage.getItem("token"));
                    if (status.status === 200) {
                        this.setState({ notification: { isActive: true, type: 'bg-success', message: 'Data Submit Successfully!' } })
                        let savedInfo = await RequestCreator("GET", "/userCategory/userAllCategory", "", localStorage.getItem("token"));
                        this.props.refresh(savedInfo.data.data);
                        
                        this.setState({ loader: false });
                        this.props.history.push(`/view_form/${status.data.data.userCategoryId}`)
                    // }
                }else{
                    this.setState({notification:{isActive:true,type:'bg-secondary',message:'Atleast 1 field value is required..'}})
                    this.setState({ loader: false });
                }

        } catch (error) {
            console.log(error);
            this.setState({ loader: false }, () => {
                this.setState({ notification: { isActive: true, type: 'bg-danger', message: error.message} })
            });
        }
    };

    resetForm = () => {
        let defaultForm = JSON.parse(JSON.stringify(BankAccountTemplate));

        console.log(defaultForm);

        this.setState({ formData: defaultForm });
    };
    



    fileMutation = (index, isdelete, fileData, childIndex) => {
        let mutated_data=fileHandler(index,isdelete,{...this.state.formData},childIndex,fileData)
        this.setState({mutated_data})
    };


    setNotification(mount,type,message){
        this.setState({notification:{isActive:mount,type:type,message:message}})
    }

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

  requestCheck = this.props.location?.pathname
  
    render() {
        /**
         * Input element have a bug on type 'number' on firefox, 
         */ 
        
        return (
            <Layout header={true} navbar={true} sidebar={true} propsForNavBar={true}>
                {this.state.mainLoader&&this.state.formData==null? <div className="d-flex justify-content-center"> <Spinner></Spinner>  </div>:
                <div  className="dash-content mob-ml-0 ">
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
                                                        type={this.state.formData.titleFieldType}
                                                        name={this.state.formData.formTitle}
                                                        id={this.state.formData.formTitle}
                                                        value={this.state.formData.formTitle}
                                                        className="input_title_header f_out"
                                                        placeholder="Title"
                                                        onChange={(e) => this.handleTitleChange(e)}
                                                    />
                                  
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right_box right_side_block">
                                        {/* <Button onClick={this.onRouteChange} type="button" className="btn btn-light cs_btn_size mr-3">
                                            Clear
                                        </Button> */}
                                        <Link to="/dashboard" type="button" className="btn btn-light cs_btn_size mr-3">
                                            Cancel
                                        </Link>
                                        <Button type="button" onClick={this.handleSubmit} className="btn btn-primary cs_btn_size">
                                            {this.state.loader ? <Spinner color='text-light spinner-border-sm'></Spinner> : this.props?.location?.pathname === "/create_form/Request" ? "Submit" : 'Save'}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid pb-5">
                        <div className="row justify-content-lg-center">
                            <div className="col-lg-12 col-xl-9 custom-field">                            
                                {this.state.formData.sections.map((config, p_index) => {    
                                    return (
                                        <div className="cs_card_style" key={p_index}>
                                            <div className="card-header">
                                                <div className='row'>
                                                    <div className='col'>
                                                    <InputBox
                                                    type={config.titleFieldType}
                                                    name={`section.${p_index}`}
                                                    value={this.state.formData.sections[p_index].value}
                                                    id={`section.${p_index}`}
                                                    onChange={(e) => this.handleSectionChange(e, p_index)}
                                                    className="form-control placeholder-black input_title"
                                                    placeholder={config.placeHolder}
                                                /></div>
                                                    {config.type ==='table'&& <div className="col-auto">
                                                        <div className="dropdown">
                                                            <button className="btn btn_export padding-y-2" type="button">
                                                                Export
                                                                <img src={require('../../Assets/images/drop_logo.png').default} className="logo_toggle" />
                                                            </button>
                                                            {/* <div className="dropdown-menu right_0" aria-labelledby="dropdownMenuButton">
                                                                <a className="dropdown-item" href="#">CSV</a>
                                                                <a className="dropdown-item active" href="#">TXT</a>
                                                                <a className="dropdown-item" href="#">PDF</a>
                                                            </div> */}
                                                        </div>
                                                    </div>}
                                                    </div>
                                            </div>

                                            <div className={config.type === "notes"?`card-body label_cd`:"card-body"}>
                                                <div className={config.type === "attachment" && "row"}>
                                                    {config.sectionForm.map((sections, index) => {
                                                        return config.type === "text" ? (
                                                            <div className="form-group" key={index}>
                                                                <div className="row">
                                                                    <div className=" col-sm-5 col-lg-5  col-xl-4">
                                                                        <InputBox
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
                                                                            ) :(
                                                                                <InputBox
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
                                                                                    {...{max:sections?.max,}}
                                                                                />
                                                                            )}
                                                                            {!sections?.isRequired && this.showDecrement(sections.showDecrement, p_index, index) }
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
                                                        )
                                                        :
                                                        config.type === "attachment" ? (
                                                            <div className="col-xl-3    col-sm-6 col-md-12 col-lg-6"  key={index}>
                                                                <div className="card_container">
                                                                <i className=" fe  fe-x cross-icon cursor-pointer" onClick={()=>{this.deleteAttachment(p_index, index)}}/>
                                                                    <a href={sections.fileUrl}
                                                                        target="_blank"
                                                                        className="card_body_space attachment-border-radius" style={{backgroundImage:`url(${sections.fileUrl})`, backgroundSize:'cover'}}>
                                                                        <div className="card_image p-1">
                                                                          {fileSnippet(sections)}
                                                                        </div>
                                                                    </a>
                                                                    <div className="card_footer p-2">
                                                                        <div className="card_wp_border d-flex justify-content-between">
                                                                               <a href={sections.fileUrl}
                                                                                    target="_blank"
                                                                                ><p className="mb-0">{sections.fileName}</p></a>
                                                                            <i className=" fe  fe-edit cursor-pointer" onClick={()=>{this.onRenameIconClicked(p_index, index)}} data-toggle="modal" data-target="#modalRename"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <div  key={index} className="">
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
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    :
                                                                    <div  key={index} className="row">
                                                                        <div className="col-sm-5 col-lg-5  col-xl-4 mb_spac_7r">
                                                                            <label className="text-black font-weight-600 label_lr_12 mb-0">
                                                                                {sections.labelValue}
                                                                            </label>
                                                                        </div>
                                                                        <div className="col-lg-7 col-sm-7 col-xl-8 mb_spac_7r">
                                                                            <div className="position-relative">
                                                                                <InputBox
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
                                                                }
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                                {config.type === "attachment" && (
                                                    <Dropzone  notify={this.setNotification} index={p_index} update={this.fileMutation} />
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                                                     
                            </div>
                        </div>
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
                        <Notification type={this.state.notification.type} message={this.state.notification.message} active={this.state.notification.isActive}  ></Notification>
                    </div>
                </div>}
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

export default connect(null, mapDispatchToProps)(withRouter(CreateCategory));
