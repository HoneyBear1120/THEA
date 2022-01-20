import * as yup from 'yup';


/* Email section validation for you.*/
export const email_section_validation = yup.object().shape({


})


export const initial_values_for_email_section = {







}



/*  Basic_Information_Component */
export const Basic_Information_Validation = yup.object().shape({
    // firstName: yup.string().required('First name required'),
    // lastName: yup.string().required('Last name required'),
    // phone: yup.string().matches(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/, 'Please enter valid phone number'),
    // street: yup.string().required('Street required'),
    // state: yup.string().required('State required'),
    // city: yup.string().required('City required'),
    // zip: yup.string().matches(/^[0-9]*$/, 'Only numbers are allowed').required(' Zip code Required'),
    // country: yup.string().required('Country required'),

})



export const Basic_Information_Values = {

    firstName: "",
    lastName: "",
    phone: "",
    street: "",
    state: "",
    city: "",
    zip: "",
    country: ""

}



export let Basic_Information_Values2;

export const dropdown_Values_country = [
    { value: 'India', label: 'India' },
    { value: 'United States', label: 'United States' },
    { value: 'Indonesia', label: 'Indonesia' },
    { value: 'Brazil', label: 'Brazil' },
    { value: 'Nigeria', label: 'Nigeria' },
    { value: 'Bangladesh', label: 'Bangladesh' },
    { value: 'Russia', label: 'Russia' },
    { value: 'Mexico', label: 'Mexico' },
];

export function UserValues(name, firstname, lastname, phone, street, state, city, zip, country, joined, emailID) {
    return {
        name,
        firstname,
        lastname,
        phone,
        street,
        state,
        city,
        zip,
        country,
        joined,
        emailID
    }

}


/* basic infomation utils ends here.*/




/*Change Password Component starts here  */

const validationExpression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;



export let initial_values_for_Change_Password = {
    currentpassword: '',
    newpassword: '',
    confirmPass: ''
}


export const validation_for_Change_Password = yup.object().shape({
    currentpassword: yup.string().required('Current password required'),
    newpassword: yup.string().min(8,'Minimum 8 Characters Needed').matches(/^.*[!@#$%^&*()_+\-=\]{};':"\\|,.<>?].*$/,
    'Need at least one special character',).matches(/^(?=.{0,100}$)\D*\d/,'Need at least a number').matches(/[a-z]/,'At least one lowercase letter required').matches(/[A-Z]/,'At least one uppercase letter required').required('New password required'),
    confirmPass: yup.string().oneOf([yup.ref('newpassword')], 'Passwords must match').required('Confirm password required'),
})



//formats states ,countries and area with for the react-select
export const Formatter = (data) => {

    let values = data.map(state => {
        return {
            label: state.name,
            value: state.isoCode
        }
    })

    return values;
}
export const FormatCity = (data) => {

    let values = data.map(state => {
        return {
            label: state.name,
            value: state.name
        }
    })

    return values;
}