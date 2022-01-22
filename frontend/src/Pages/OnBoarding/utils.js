/* these utils file mainly contains extyra functions and objects*/

import * as yup from "yup";


export const initialValues={
    email: "",
    // password: "",
    remberme: []
}

export const validationSchema=yup.object().shape({
    email: yup.string().email("Enter a valid Email").required("This field is required"),
    // password: yup.string().required("required"),
    // remberme: yup.array().length(1, "..")
})



/* for the Create Account comonent  */

export const initialValues_CreateAccount={
    firstName:'',
    lastName:'',
    email:'',
    // password:'',
    // cnfpassword:'',
    agree:[]
 }
 
 
 export const validationSchema_CreateAccount=yup.object().shape({
    firstName:yup.string('Invalid').matches(/^[a-zA-Z]*$/, 'Only alphabets allowed').max(30, 'Must be less than 30 chars').required('First name required'),
    lastName:yup.string('Invalid').matches(/^[a-zA-Z]*$/, 'Only alphabets allowed').max(30, 'Must be less than 30 chars').required('Last name required'),
    email:yup.string('Invalid').email('Invalid Email').max(80, 'Must be less than 80 chars').required('Valid email required'),
    // cnfpassword:yup.string('Invalid').oneOf([yup.ref('password')], 'Password must match').required('Confirm password required'),
    agree:yup.array().length(1,'You must agree with the our terms and privacy'),
    // password:yup.string().min(8,'Minimum 8 Characters Needed').matches(/^.*[!@#$%^&*()_+\-=\]{};':"\\|,.<>?].*$/,
    // 'Need at least one special character',).matches(/^(?=.{0,100}$)\D*\d/,'Need at least a number').matches(/[a-z]/,'At least one lowercase letter required').matches(/[A-Z]/,'At least one uppercase letter required').required('Required'),
    // yup.string().min(8,'Minimum 8 Characters Needed').max(30, 'Must be less than 30 chars').matches(/^.*[!@#$%^&*()_+\-=\]{};':"\\|,.<>?].*$/,
    // 'Need at least one special character',).matches(/^(?=.{0,100}$)\D*\d/,'Need at least a number')  .required('Password required'),
})




// http://localhost:3000/users/ResetPassword Method:post body:{ "otp":"274642",
//     "email":"raiabhi1999@gmail.com",
//     "newpassword":"12345"}


/* initial values for reset password */


export const initialValues_resetPassword ={
    email:'',
    newpassword:'',
    otp:'',
    cnfPassword:'',

}


export const validationSchema_resetPassword=yup.object().shape({
  newpassword:yup.string().min(8,'Minimum 8 Characters Needed').matches(/^.*[!@#$%^&*()_+\-=\]{};':"\\|,.<>?].*$/,
  'Need at least one special character',).matches(/^(?=.{0,100}$)\D*\d/,'Need at least a number').matches(/[a-z]/,'At least one lowercase letter required').matches(/[A-Z]/,'At least one uppercase letter required').required('Required'),
  cnfPassword:yup.string('Invalid').oneOf([yup.ref('newpassword')], 'Mismatched Passwords').required('Required'),


})


 export let otp_configration = {
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
