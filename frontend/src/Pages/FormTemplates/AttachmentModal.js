import React from 'react';
import Modal from 'react-modal';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const customStyles = {
  content: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    border:0,
    background:'rgb(0 0 0 / 25%)',
    position:'fixed',
    inset:0
  },
};

const AttachmentModal = (props) => {
    const { modalIsOpen, FileIs, data } = props;

    const typeAttachment = data?.find(el => el.type === "attachment")?.sectionForm
    const a = typeAttachment?.filter(item => item?.fileUrl !== FileIs)
    const currentImages = FileIs && [{fileUrl : FileIs}, ...a]  
  

    return (
      <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={props.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        
      >      
        <div className="cu-modal-lightbox" style={{position:'relative', maxWidth:'60%'}}>
        <button
              type="button"
              className="close media-upload-modal"
              data-dismiss="modal"
              aria-label="Close"
              onClick={props.closeModal}
            >
              <span
                aria-hidden="true"
                style={{ color: "black", fontSize: "32px" }}
              >
                &times;
              </span>
            </button>
          <div className="cuu-09">            
            <Carousel>
                {currentImages.length > 0 && currentImages?.map((obj, index) => {                
                  return <div key={index} className="cont-02">
                     <img src={`${obj?.fileUrl?.includes(".pdf") ? 
                     `https://img.icons8.com/office/80/000000/pdf.png` : 
                     obj.fileUrl}`} />
                  </div>
                })}
            </Carousel>
          </div>
        </div> 
        
      </Modal>
    </div>
    )
}

export default AttachmentModal;
