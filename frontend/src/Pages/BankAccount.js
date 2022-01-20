import React, { Component } from "react";
import InputBox from "./Components/InputBox";
import Button from "./Components/Button";
import { BankAccountTemplate } from "./FormTemplates/BankAccount";
import Dropzone from "./Components/DropZone";
import { RequestCreator } from "../ApiController/baseUrl";
import { connect } from "react-redux";
import { refreshCollection } from "../Redux/actions";
import Select from "react-select";
import Spinner from "./Components/Spinner";
import Notification from "./Components/Notification";
import Layout from "./Components/layout";
// import AllItems from './AllItems';
const customStyles = {
  dropdownIndicator: (base) => ({
    ...base,
    color: "#dee2ec",
  }),
};
const options = [
  { value: "ATM", label: "ATM" },
  { value: "Checking", label: "Checking" },
  { value: "Line of Credit", label: "Line of Credit" },
  { value: "Money Market", label: "Money Market" },
  { value: "Savings", label: "Savings" },
  { value: "Other", label: "Other" },
];

let template = JSON.parse(JSON.stringify(BankAccountTemplate));

class BankAccount extends Component {
  state = {
    selectedOption: null,
    formData: template,
    loader: false,
    files: [],
    notification:{
        isActive:false,
        type:'',
        message:''
    }
  };

  handleSectionChange = (e, index) => {
    console.log(e.target.id);

    let temp = { ...this.state.formData };
    temp.sections[index].value = e.target.value;
    this.setState({ formData: temp });
  };

  handle_Branch_Change = (e, parentIndex, childIndex, isLabel) => {
    let temp = { ...this.state.formData };
    if (isLabel) {
      console.log(isLabel);
      temp.sections[parentIndex].sectionForm[childIndex].labelValue =
        e.target.value;
    } else {
      console.log(isLabel);
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


  componentDidUpdate(){
    if(this.state.notification.isActive){
      setTimeout(()=>{
          this.setState({notification:{...this.state.notification,isActive:false}})
      },2000)
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
      let status = await RequestCreator( "post",`/userCategory/categoryDetail`,this.state.formData,localStorage.getItem("token"));
      if (status.status === 200) {
        this.setState({notification:{isActive:true,type:'bg-success',message:'Data Saved!'}})
        let savedInfo = await RequestCreator("GET","/userCategory/userAllCategory","",localStorage.getItem("token"));
        this.props.refresh(savedInfo.data.data);
      }
    } catch (error) {
      console.log(error);
      this.setState({ loader: false },()=>{
        this.setState({notification:{isActive:true,type:'bg-danger',message:'An Error Occurred While Saving form'}})
      });
    }
  };

  resetForm = (e) => {
    let defaultForm = JSON.parse(JSON.stringify(BankAccountTemplate));

    console.log(defaultForm);

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

  render() {
    return (
      <Layout header={true} navbar={true} sidebar={true} >
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
                          src={`https://theadev-app-assets.s3.amazonaws.com/category_assets/file-1627885439850.png`}
                        />
                      </div>
                    </div>
                    <div className="col">
                      <form class="icon_export">
                        <InputBox
                          type={template.titleFieldType}
                          name={template.formTitle}
                          id={template.formTitle}
                          className="input_title_header f_out"
                          placeholder="Title"
                          onChange={(e) => this.handleTitleChange(e)}
                        />
                        {/* <div className="d-flex">
                            <PinIcon pinned={BankAccountTemplate.isPinned} />
                            <DownloadIcon />
                          </div> */}
                      </form>
                    </div>
                  </div>
                </div>
                <div className="right_box right_side_block">
                  <Button onClick={this.resetForm} type="button" className="btn btn-light cs_btn_size mr-3">
                    Cancel
                  </Button>
                  <Button type="button" onClick={this.handleSubmit} className="btn btn-primary cs_btn_size">
                   {this.state.loader?<Spinner color='text-light spinner-border-sm'></Spinner>:'Save'}
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
                                        options={options}
                                        placeholder="select"
                                        styles={customStyles}
                                        className="cs_select"
                                      />
                                    ) : (
                                      <InputBox
                                        type={sections.valueFieldType}
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
                                    {sections.showDecrement ? (
                                      <i
                                        onClick={(e) =>
                                          this.delete_Branch(p_index, index)
                                        }
                                        className=" fe  fe-minus-circle plus-circle text-danger"
                                      />
                                    ) : (
                                      <i
                                        onClick={(e) =>
                                          this.add_Branch(p_index, index)
                                        }
                                        className=" fe fe-plus-circle plus-circle "
                                      />
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : config.type === "attachment" ? (
                            <div className="col-xl-3   col-sm-6 col-md-12 col-lg-6">
                              <div className="card_container">
                                <div className="card_body_space">
                                  <div className="card_image">
                                    <img
                                      src={sections.fileUrl}
                                      className="img-fluid"
                                      style={{backgroundSize:'cover'}}
                                    />
                                  </div>
                                </div>
                                <div className="card_footer p-2">
                                  <div className="card_wp_border">
                                    <p className="mb-0">{sections.fileName}</p>
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
                                    />
                                  </div>
                                </div>
                               : 
                                <div className="row">
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
                        <Dropzone index={p_index} update={this.fileHandler} />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* <div class="col-12 text-xl-right text-right pr_space_b">
            <Modalbutton />
          </div> */}
          <Notification type={this.state.notification.type} message={this.state.notification.message} active={this.state.notification.isActive}  ></Notification>
        </div>
      </div>
      </Layout>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    refresh: (data) => dispatch(refreshCollection(data)),
  };
};

export default connect(null, mapDispatchToProps)(BankAccount);
