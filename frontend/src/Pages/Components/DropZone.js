import React from "react";
import { FileRequestCreator } from "../../ApiController/baseUrl";
import {imgBaseUrl} from '../../ApiController/baseUrl';
import { useState } from "react";
import Spinner from "./Spinner";

export default function Dropzone(props) {

 const [loader,setLoader]=useState(false);

  //on chnage triggers an API call for the respected file.
 const changeHandler=async(event)=>{
   try {
     let file= event.target.files
     setLoader(true)


    var formData=new FormData();
    var hasImage = false
    for (let i = 0; i < file.length; i++) {    
      if(file[i]?.size <= (1024*1024 * 30)){
        hasImage = true;
        formData.append(`file`, file[i])        
      }          
  }
   //formData.append('file',file[0]);
   if(hasImage){
   var upload=await FileRequestCreator('POST',`/uploads/upload/attachments`,formData)
   }else{
     alert("Maximum file size must be 30 mb..")
     setLoader(false)
   }
    if(upload) {
      
      let payload= upload?.data?.data.map(function(S3Key,index){
           return new Data(file[index].name,S3Key.s3key,true,file[0].type)  
       })

      props.update(props.index,false,payload)
      setLoader(false)
    
    // props.notify(true,'bg-success','Attachements Uploaded')

    } 
   } catch (error) {
     console.log(error)

     setLoader(false)
    // props.notify(true,'bg-danger','Error in Uploading Attachments')
   
    }
  
 }


//constructor which creates an object according to the template.
 function Data(fileName,fileUrl,showDecrement,fileType){
   this.fileName=fileName
   this.fileUrl=imgBaseUrl+fileUrl
   this.showDecrement=showDecrement
   this.fileType=fileType
 }



  return (
    <div id ="fileInput" className="dropzone dropzone-single">
      {loader?
      <div className='d-flex justify-content-center'>
      <Spinner color="text-dark spinner-border-sm" ></Spinner>
      </div>
      :
      <div className="dz-default dz-message">
        <button class="dz-button" type="button">
          Browse your device and upload documents
        </button>
        <p className="text-light-gray font-10 mb-0">Maximum file size 30MB</p>
      </div>}
      <input disabled={props.disabled} type="file" id="myFile" name="filename" className="upload-img" multiple onChange={changeHandler} />
    </div>
  );
};




