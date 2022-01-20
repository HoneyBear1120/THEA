import React from "react"

const FileSelectBox = ({ onChange }) => {
    return (
        <div className="dropzone dropzone-single">
            <div className="dz-default dz-message">
                <button class="dz-button" type="button">Browse your device and upload documents</button>
                <p className="text-light-gray font-10 mb-0">Maximum file size 10MB</p>
            </div>
            <input type="file" id="myFile" name="filename" className="upload-img" onChange={onChange} />
        </div> 
    )
}

export default FileSelectBox