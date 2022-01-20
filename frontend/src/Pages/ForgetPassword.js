import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import * as yup from 'yup'
import Spinner from './Components/Spinner';
import { RequestCreator } from '../ApiController/baseUrl';
import Alert from './Components/Alert';


let schema = yup.object().shape({
    email: yup.string().email('Enter a valid email').required('Required')
})



class ForgetPassword extends Component {

    state = {
        email: '',
        isValid: false,
        loader: false,
        error:{
            isMounted:false,
            msg:''
        }
    }


   componentDidUpdate(){

  if(this.state.error.isMounted){
      setTimeout(()=>{
          this.setState({error:{isMounted:false,msg:''}})
      },2000)
  }
    
    
    }



    handleSubmit = (event) => {
        event.preventDefault()

        this.setState({ loader: true })

        RequestCreator('POST', '/users/ForgetPassword', { email: this.state.email }).then((response) => {

            
            this.setState({ loader: false }, () => {

                this.props.history.push({
                    pathname:'/',
                    state:{
                    type:'alert-success',
                    message:'An email link has been sent to the email ID.'
                    }
                })

            })

        }).catch((error) => {

            this.setState({ loader: false })
            this.setState({error:{isMounted:true,msg:"Something went wrong, try again!"}})
        
        })
    }

 //handles state chnages.
    handleChange = (event) => {
        this.setState({ email: event.target.value })

        schema.isValid({ email: event.target.value }).then((value) => {
            this.setState({ isValid: value })
        })
    }


    render() {

        return (
            <>
                <div className="bg-cover h_100 h_100 d_grid" >
                    <div className="center_login_container">
                        <div className="w-100">
                            <div className="card px-5 mb-0">
                                
                                <div className="col-12 col-md-12 col-xl-12 my-5 bg-white">
                                {this.state.error.isMounted&&<Alert type="alert-danger p-3 mb-3 rounded" message={this.state.error.msg}></Alert>}
                                    <h1 className="display-4 text-center mt-2 mb-3">Forgot password?</h1>
                                    <p class="text-muted text-center mb-5">
                                        Enter the email address you used to create an account. We will send you instructions to reset your password.
                                    </p>
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <label>Your email</label>
                                            <input autoFocus type="email" value={this.state.email} onChange={this.handleChange} className="form-control font-weight-400 input_kit" placeholder="Enter your email address" />
                                        </div>

                                        <button type="submit" disabled={!this.state.loader && this.state.isValid ? false : true} className="btn btn-lg btn-block btn-primary mb-3 p-3">
                                            {this.state.loader ? <Spinner color="text-light spinner-border-sm"></Spinner> : 'Submit'}
                                        </button>
                                        <p className="mb-0 text-center"><Link to="/"><span class="fe fe-chevron-left mr-2"></span>Back to Sign in</Link> </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(ForgetPassword)