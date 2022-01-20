import React, { Component } from 'react';
import Basic_Information_Component from './Components/Basic_Information_Component';
import Change_Password from './Components/Change_Password';
import Picture_Component from './Components/Picture_Component';
import Nav_Components from './Components/Nav_Components';
import Change_Email_Component from './Components/Change_Email_Component';
import Delete_Component from './Components/Delete_Component';
import { login } from '../../Redux/actions';
import {connect} from 'react-redux';
import Layout from '../Components/layout';




class MyAccount extends Component {
    state = {
        selectedOption: null,
    };

    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };

    constructor(props) {
        super(props);
        this.state = {
            editInProcess: false,
            saveInProcess: false
        }
    }

    handleSave = () => {
        this.setState({ saveInProcess: true })
        setTimeout(() => {
            this.setState({ saveInProcess: false })
        }, 2000)
    }

    handleEdit = () => {
        this.setState({ editInProcess: true })
        setTimeout(() => {
            this.setState({ editInProcess: false })
        }, 2000)
    }
    render() {
        // const { editInProcess, saveInProcess } = this.state;
        // const { selectedOption } = this.state;
       
        return (
            <Layout header={true} navbar={true} sidebar={false} propsForNavBar={true}>
                    <div className="main-content">
                        <Picture_Component></Picture_Component>
                        <div className="cs_container_fluid cs_padding d-flex flex_direction pt-0">
                            {/* <div class="row"> */}
                            <Nav_Components />
                            <div className="col-12 col-md-12 col-lg-9 cs_pd_50 sm_cs_pd_50 pr-0 col_sm_100">
                                <div className="custom-field" data-spy="scroll" data-target="#navbar-example3" data-offset="0">
                                     <Basic_Information_Component />
                                     <Change_Email_Component />
                                     <Change_Password />
                                    <Delete_Component></Delete_Component>
                                    <div style={{height:"52.5vh"}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Layout>
        )
    }
}

const stateData =(state)=>{
    return{
        state:state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToProfile: (data) => dispatch(login(data))
    }
}
export default connect(stateData, mapDispatchToProps)(MyAccount);
