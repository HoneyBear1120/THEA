import React from 'react';
import otp_img from '../Assets/images/otp.svg'
import { useState, useEffect } from 'react';
import { useRef } from 'react';
import OtpInput from 'react-otp-input';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Spinner from './Components/Spinner';
import { RequestCreator } from '../ApiController/baseUrl';
import { useSelector } from 'react-redux';


let ob = {
    width: '100%',
    textAlign: 'center',
    height: '3em',
    fontSize: '20px',
    borderRadius: '5px',
    outline: 'none',
    border: 'solid 1px #dee2ec',
    boxShadow: 'none',
    webkitAppearance: 'none',
    appearance: 'none',
}


let wow={
    minutues:2,
    seconds:59
}


var stop;

const input = [0, 1, 2, 3, 4, 5];

export default function Otp(props) {

    let pageState = useSelector(state => state.user.currentPage)
    let history = useHistory();
    let dispatcher = useDispatch();


    const [timer,showTimer]=useState(true)


    const timeRef=useRef({ minutes:4,seconds:59})
    const [limit,setLimit]=useState({minutes:'', seconds:''})

    
   //shows the alert
    const [active, setActive] = useState(false)
    
    //sets the otp in the state
    const [otp, setOtp] = useState('')
    
    //button loader
    const [loading, setLoading] = useState(false)
    const [resentLoader, setResentLoader] = useState(false);


    const [error, setError] = useState('')

    useEffect(() => {

        if (!history.location.state?.email) {
            history.push('/')
        }

         stop=setInterval(tick,1000);
        console.log(timeRef)

        return ()=>{
          clearInterval(stop)
        }

    }, [])


    useEffect(()=>{
         if(error.length>0){
           
             
         }


    },[error])



    

    let onClickHandle = async () => {
        clearInterval(stop)
        try {
            setError('')
            if(history.location.state?.email){
                setResentLoader(true)

                let status = await RequestCreator('POST', `/users/ResendOtp`, { email: history.location.state.email })
    
                if (status) {
                    setResentLoader(false)
                    setActive(true)
                    timeRef.current={ minutes:4,seconds:59};
                    stop=setInterval(tick,1000)
                    showTimer(true)

                }

            }else  history.push('/')

           

        } catch (error) {
            setError('An Error Occured')
            setResentLoader(false)

        }
    }



    const  tick=()=>{
       
      let {minutes,seconds}=timeRef.current

        if(minutes===0&&seconds===0){
            clearInterval(stop)
            showTimer(false)

             
        }else if(minutes>0&&seconds>0){

            timeRef.current.seconds--;
            setLimit({...timeRef.current})


        }else if(minutes>0&&seconds===0){
            timeRef.current.seconds=59
            timeRef.current.minutes--;
            setLimit({...timeRef.current})
          
        }else{

             timeRef.current.seconds--;
             setLimit({...timeRef.current})
            
        }

    }

    async function verify() {

        try {
            setLoading(true)
            let obj = {
                otp: otp.toString(),
                email: history.location.state.email
            }

            let response = await RequestCreator('POST', '/users/otp', obj)


            //fetches data if reponse is true.
            if (response.data.data) {
                //console.log(response)
                let user = await RequestCreator('GET', '/users/userInformation', '', response.data.authToken)
                
               localStorage.setItem('token', response.data.authToken);
                dispatcher({ type: 'LOGIN', payload: user.data.data })
                history.push(`/dashboard`)

            }


        } catch (error) {

             let {response}=error;
            if(response){
                console.log(response.status)
                 if(response.status===403) setError('Invalid! please try again or request a new verification code.')
                 else setError(response.data.msg)
            } else setError(error.message)


            setLoading(false)
        }


    }


    function handleChange(otp) {
        // console.info(otp)
        setOtp(otp)
    }



    return (
        <>
            <div className="bg-cover h_100 d_grid" >
                <div className="center_login_container">
                    <div className="w-100">
                        <div className="card px-5 mb-0">
                            <div className="col-12 col-md-12 col-xl-12 my-5 bg-white">
                                <div className="otp-img text-center mb-5">
                                    <h4 className="error-text p-3"> {error.length > 0 && error} </h4>

                                    <img src={otp_img} />
                                </div>
                                <h1 class="display-4 text-center mb-3">
                                    Two-step Verification
                                </h1>
                                <p class="text-muted text-center mb-5">
                                    We sent a verification code to your email.  <br />Enter the code from the email in the field below.
                                </p>

                                <div className="row justify-content-center">

                                    <OtpInput
                                        numInputs={6}
                                        value={otp}
                                        onChange={handleChange}
                                        separator={<span>-</span>}
                                        shouldAutoFocus={true}
                                        inputStyle={ob}
                                        focusStyle={{
                                            border: `solid 1px #377dff`
                                        }}
                                        errorStyle={
                                            { border: `solid 1px red` }
                                        }
                                        isInputNum={true}

                                    />



                                    <div className="box-otp">


                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12 mt-4">
                                        <button onClick={verify} type="sumbit" disabled={otp.length === 6 ? false : true} className="btn btn-lg btn-block btn-primary mb-3">
                                            {loading ? <Spinner color="text-light spinner-border-sm"></Spinner> : <span> Verify my account</span>}
                                        </button>

                                         {timer? <div className="d-flex justify-content-center"> <div>You can request a new OTP in</div> <span className=" text-info pl-2"> {limit.minutes} {limit.minutes<2?'minute':'minutes'} and  {limit.seconds} seconds  </span></div>: <p className="mb-0 text-center"> Haven't received it? <span className="text_clr_prime c_pointer " onClick={e => onClickHandle()}>Resend a new code.</span></p>}
                                       
                                       
                                       {resentLoader && <div className="d-flex justify-content-center"><Spinner color="text-dark text-center spinner-border-sm"></Spinner></div> }
                                        
                                        
                                        
                                        <p style={{ display: 'none' }} className={`text-success text-success text-center mb-0 mt-2 ${active === true ? 'd-block' : 'd-none'}`}>Please check your email for a new verification code.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
