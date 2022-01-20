import React, { Component} from "react";
import  Layout  from './Components/layout'
import Spinner from "./Components/Spinner";
import { RequestCreator } from "../ApiController/baseUrl";

const customStyles = {
  dropdownIndicator: (base) => ({
    ...base,
    color: "#dee2ec",
  }),
};


export class Cabinet extends Component {
  state={
    loading:true,
    items:[]
  }
    componentDidMount(){
      RequestCreator(
        "GET",
        "/usercabinet/userCabinetList",
        "",
        localStorage.getItem("token")
      )
        .then((res) => {
            let data = JSON.parse(JSON.stringify(res.data.data));
            this.setState({ items: data, loading: false  })
          })
        .catch((err) => {
            this.setState({ loading: false });
        });
    }
     downloadURI=(url, filename)=> {
      fetch(url)
    .then(response => response.blob())
    .then(blob => {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      link.click();
  })
  .catch(console.error);
     
    }

    fileSnippet=(cabinet_object)=>{
      let img_src = '';
      switch(cabinet_object.fileType){
        case 'application/zip':
          img_src = "https://img.icons8.com/office/80/000000/zip.png";
          break;
        case 'application/pdf':
          img_src='https://img.icons8.com/office/80/000000/pdf.png';
          break;
        case 'text/csv':
          img_src="https://img.icons8.com/office/80/000000/csv.png";
          break;
        case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
          img_src = 'https://img.icons8.com/ultraviolet/80/000000/xml.png'
          break;
        default:
          img_src = 'https://img.icons8.com/ios/80/000000/file--v1.png';
  
      }
      if(cabinet_object.fileType?.includes('image'))
        img_src = cabinet_object.files;
      else if(cabinet_object.fileType?.includes('video'))
        img_src = "https://img.icons8.com/ios/80/000000/video-file.png";


      return (<img
          src={img_src}
          className="img-fluid"
          />)
    }


    render(){
        return (<Layout header={true} navbar={true} sidebar={true} propsForNavBar={true}>
            {this.state.loading ? (
          <div className="d-flex justify-content-center">
            <Spinner color="text-dark mt-4  spinner-border-sm grid-container" />
          </div>
        ) : (
          <div className="dash-content mob-ml-0 ">
            <div className="header">
              <div className="header-body">
                <div className="container-fluid row position-relative">
                <div className="row ">
                  {this.state.items.map((item)=> 
                  <div className="col-xl-3   col-sm-6 col-md-12 col-lg-6 " >
                    <div className="card_container">
                    <div className="card_body_space" style={{backgroundImage:`https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg`, backgroundSize:'cover'}}>
                    <div className="card_image" >
                        {this.fileSnippet(item)}
                        </div>
                    </div>
                    <div className="card_footer p-2">
                        <div className="card_wp_border">
                        <div
                          onClick={()=>this.downloadURI(item.files,item.fileName)}
                          style={{cursor:'pointer'}}
                            >
                            <p className="mb-0">
                            {item.fileName||"Unknown File"}
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>)}

                </div>

                </div>
                </div>
                </div>
                </div>)}
        </Layout>)
    }
}