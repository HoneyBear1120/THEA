
export const CATEGORY_TO_ELLIPSIZE = ['bankaccount','creditcard', 'passport', 'password', 'server', 'ssn' ]
//finds a subtilte based on the value of a placeholder given in a value.
export function find_subtitle(DATA,templateName){

  let what_to_be_the_subtitle = '';
  templateName =  templateName.toLowerCase()

  switch(templateName){
    case 'bankaccount':
      what_to_be_the_subtitle ='accountnumber'
      break;
    case 'contact':
      what_to_be_the_subtitle =''
        break;
    case 'insurance':
      what_to_be_the_subtitle =''
      break;
    case 'creditcard':
      what_to_be_the_subtitle ='cardnumber'
        break;
    case 'ssn':
      what_to_be_the_subtitle ='ssnnumber'
          break;
    case 'receipt':
      what_to_be_the_subtitle ='amount'
            break;
    case 'note':
      what_to_be_the_subtitle =''
          break;
    case 'reward':
      what_to_be_the_subtitle =''
            break;
     case 'outdoorliscense':
      what_to_be_the_subtitle =''
              break;
      case 'emailaccount':
        //doubtfull UI
        what_to_be_the_subtitle ='username'
                break;
      case 'database':
        what_to_be_the_subtitle ='username'
              break;
      case 'travelpreferences':
        what_to_be_the_subtitle =''
                break;
      case 'softwarelicense':
        what_to_be_the_subtitle ='licencekey'
                  break;
      case 'login':
        what_to_be_the_subtitle ='username'
                    break;
      case 'dietarypreferences':
        what_to_be_the_subtitle =''
               break;
      case 'passport':
        what_to_be_the_subtitle ='passportnumber'
              break;
      case 'wirelessrouter':
        what_to_be_the_subtitle ='basestationname'
                break;
      case 'document':
        what_to_be_the_subtitle =''
              break;
      case 'password':
        what_to_be_the_subtitle ='password'
                 break;
      case 'server':
        what_to_be_the_subtitle ='url'
               break;
      case 'membership':
        what_to_be_the_subtitle ='membername'
                 break;
      case 'driverliscense':
        what_to_be_the_subtitle ='state'
                   break;
      case 'request':
        what_to_be_the_subtitle =''
                 break;
      case 'medical':
        what_to_be_the_subtitle =''
  }
  if(!what_to_be_the_subtitle){
    return '';
  }
    let index=DATA.sections[0].sectionForm.findIndex((feild)=>{
        let format=feild.labelValue.toLowerCase()
        let trimmedValue=format.split(" ").join("");
        return trimmedValue===what_to_be_the_subtitle
    })

    if(index>-1){
      const ellipsize = CATEGORY_TO_ELLIPSIZE.findIndex((name)=>name===templateName)===-1?false:true
      if(ellipsize){
        return encodeAccountNumber(DATA.sections[0].sectionForm[index].value)
      }else{
        let subtitle = DATA.sections[0].sectionForm[index].value;
        if(templateName=='receipt'){      
          subtitle= "₹"+subtitle+",  "+ DATA.sections[0].sectionForm[0].value;
        }
        return subtitle;
      }
     
  }else return '';
}


//const ellipsize = CATEGORY_TO_ELLIPSIZE.findIndex((id)=>id===props.template_name.toLowerCase())===-1?false:true

 export  const encodeAccountNumber=(number)=>{
    let prefix=number.slice(0,2)
    let suffix=number.charAt(number.length-1);
    let suffix2=number.charAt(number.length-2)
 
      return `${prefix+suffix2+suffix}`
  
    
}

export const formValidation=(data)=>{
let errors={}
for(let i=0;i<data.sections[i].sectionForm.length;i++){
if(data.sections[i].type==='text'){
  //the validation for the the Category name can be added.
 for(let j=0;j<data.sections[i].sectionForm.length;j++){

  if(data.sections[i].sectionForm[j].showDecrement){
    if(data.sections[i].sectionForm[j].value.length==0||this.state.formData.sections[i].sectionForm[j].labelValue.length===0){
        throw Error ('Either fill all the feilds or delete them.')
    }
 }
 }
}
}
}


export const change_section_value=(e,data,index)=>{
   data.sections[index].value=e.target.value;
   return data;
}

export const phoneNumberRegex = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/ ;
export const change_section_field=(e,parentIndex,childIndex,isLabel,data)=>{
if(isLabel){
  data.sections[parentIndex].sectionForm[childIndex].labelValue =e.target.value;
}else{
  let updatingObject = data.sections[parentIndex].sectionForm[childIndex];
  let value = e.target.value
  
  if(updatingObject.valueFieldType === 'date'){
    if(updatingObject.max){
      if(new Date(updatingObject.max) >= new Date(value)){
      updatingObject.value = value;
      }
    }
    else {
      updatingObject.value = value;
    }
  }else if(updatingObject.valueFieldType === 'month'){
               if (value.length > 7) {
            } else 
                if (value.includes('-')){
                    let str = value.split("-");
                    if(str[0].length>4 ){}
                    else{
                        str = parseInt(str[1]);
                        if (!isNaN(str)) {
                            if(str < 13)
                                updatingObject.value = value;
                        }else{
                            updatingObject.value = value;
                        }
                    }
            }
             else {
                 if(value.length===4)
                    updatingObject.value = value + "-";
                else updatingObject.value = value;
            }
  }
  else if(updatingObject.validationType && updatingObject.validationType==='number'){
    if(/^\d+$/.test(value)|| value.length==0){
      updatingObject.value = value;
    }
  }
else{
    updatingObject.value = value;
  }

  }

  // data.sections[parentIndex].sectionForm[childIndex].value = e.target.value;
  // new Date().toISOString().slice(0, 10)

return data;


}


export const add_new_input=(parentIndex,childIndex,data)=>{
  
  data.sections[parentIndex].sectionForm[childIndex].showDecrement = true;
  data.sections[parentIndex].sectionForm.push({
    labelFieldType: "text",
    labelValue:"",
    labelPlaceHolder: "custom",
    valueFieldType: "text",
    value: "",
    valuePlaceHolder: "new field",
    isActive: "true",
    uid: "uid",
    showDecrement: false,
    isError:false,
});

return data;

}


export const delete_field=(parentIndex,childIndex,data)=>{
  data.sections[parentIndex].sectionForm.splice(childIndex, 1);
  return data;

}



export const handle_title_change=(e,data)=>{
  data.formTitle = e.target.value;
  return data;

}


export const customStyles = {
  dropdownIndicator: (base) => ({
      ...base,
      color: "#dee2ec",
  }),
};

 export const BANK_ACCOUNT_TYPE = [
  {value:'', label:'---select---'},
  { value: "ATM", label: "ATM" },
  { value: "Checking", label: "Checking" },
  { value: "Line of Credit", label: "Line of Credit" },
  { value: "Money Market", label: "Money Market" },
  { value: "Savings", label: "Savings" },
  { value: "Other", label: "Other" },
];

//handles file push and pop in the state.
export const fileHandler=(index, isDelete, data, childIndex,fileData)=>{

  if(!isDelete) {
      fileData.forEach(files=>{
        data.sections[index].sectionForm.push(files)
      })

      console.log(data)
  } 
  else data.sections[index].sectionForm.splice(childIndex, 1);

  return data;
}

export const SEX = [
  {value:'', label:'---select---'},
  { value: 'Female', label: 'Female' },
  { value: 'Male', label: 'Male' },

];

export const COUNTRY = [
  {value:'', label:'---select---'},
  { value: 'Afghanistan', label: 'Afghanistan' },
  { value: 'Albania', label: 'Albania' },
  { value: 'Algeria', label: 'Algeria' },
  { value: 'American Samoa', label: 'American Samoa' },
  { value: 'Andorra', label: 'Andorra' },
  { value: 'Angola', label: 'Angola' },
  { value: 'Anguilla', label: 'Anguilla' },
  { value: 'Antigua & Barbuda', label: 'Antigua & Barbuda' },
  { value: 'Argentina', label: 'Argentina' },
  { value: 'Armenia', label: 'Armenia' },

];

export const COUNTRY_STATE= [
  {value:'', label:'---select---'},
  { value: 'Alabama', label: 'Alabama' },
  { value: 'Alaska', label: 'Alaska' },
  { value: 'Arizona', label: 'Arizona' },
  { value: 'Arkansas', label: 'Arkansas' },
  { value: 'California', label: 'California' },
  { value: 'Anguilla', label: 'Anguilla' },
  { value: 'Colorado', label: 'Colorado' },

]
export const CREDIT_CARD_TYPE = [
  {value:'', label:'---select---'},
  { value: 'American Express', label: 'American Express' },
  { value: 'Carte Blanche', label: 'Carte Blanche' },
  { value: ' Diners Club', label: ' Diners Club' },
  { value: ' Discover', label: ' Discover' },
  { value: ' JCB', label: 'JCB' },
  { value: ' Laser', label: ' Laser' },
  { value: ' Maestro', label: ' Maestro' },
  { value: ' Mastercard', label: 'Mastercard' },
  { value: 'Visa', label: ' Visa' },
  { value: 'Visa Electron', label: 'Visa Electron' },

];

export const DATABASE_TYPE = [
  {value:'', label:'---select---'},
  { value: 'DB2', label: 'DB2' },
  { value: 'FileMaker', label: 'FileMaker' },
  { value: 'Microsoft Access', label: 'Microsoft Access' },
  { value: 'MS SQL Server', label: 'MS SQL Server' },
  { value: 'MySQL', label: 'MySQL' },
  { value: 'Oracle', label: 'Oracle' },
  { value: 'PostgreSQL', label: 'PostgreSQL' },
  { value: 'SQLite', label: 'SQLite' },
  { value: 'Other', label: 'Other' },
];

export const EMAIL_TYPE = [
  {value:'', label:'---select---'},
  { value: 'POP3', label: 'POP3' },
  { value: 'IMAP', label: 'IMAP' },
  { value: 'Either POP3 or IMAP', label: 'Either POP3 or IMAP' },

];

export const EMAIL_SECURITY = [
  {value:'', label:'---select---'},
  { value: 'None', label: 'None' },
  { value: 'SSL', label: 'SSL' },
  { value: 'TLS', label: 'TLS' },

];

export const EMAIL_METHOD = [
  {value:'', label:'---select---'},
  { value: 'None', label: 'None' },
  { value: 'Password', label: 'Password' },
  { value: 'MD5 Challenge Response', label: 'TLMD5 Challenge Response' },
  { value: 'Kerberized POP (KPOP)', label: 'Kerberized POP (KPOP)' },
  { value: 'Kerberos Version 4', label: 'Kerberos Version 4' },
  { value: ' Kerberos Version 5 (GSSAPI)', label: ' Kerberos Version 5 (GSSAPI)' },
];

export const EMAIL_AUTH_METHOD = [
  {value:'', label:'---select---'},
  { value: 'None', label: 'None' },
  { value: 'Password', label: 'Password' },
  { value: 'MD5 Challenge Response', label: 'TLMD5 Challenge Response' },
  { value: 'Kerberized POP (KPOP)', label: 'Kerberized POP (KPOP)' },
  { value: 'Kerberos Version 4', label: 'Kerberos Version 4' },
  { value: ' Kerberos Version 5 (GSSAPI)', label: ' Kerberos Version 5 (GSSAPI)' },
  { value: 'NTLM', label: 'NTLM' },
];

export const BLOOD_TYPE = [
  {value:'', label:'---select---'},
  { value: 'A', label: 'A' },
  { value: 'B', label: 'B' },
  { value: 'AB', label: 'AB' },
  { value: 'O', label: 'O' },


];
export const BLOOD_FACTOR = [
  {value:'', label:'---select---'},
  { value: 'RH+', label: 'RH+' },
  { value: 'RH-', label: 'RH-' },

];
const FLIGHT_CLASS = [
  {value:'', label:'---select---'},
  { value: 'No Preference', label: 'No Preference' },
  { value: 'First Class', label: 'First Class' },
  { value: ' Business Class', label: ' Business Class' },
  { value: 'Economy', label: 'Economy' },
  { value: 'Economy +', label: 'Economy +' },
  { value: 'Cheapest Available', label: 'Cheapest Available' },

];

const SEAT_ASSIGNMENT = [
  {value:'', label:'---select---'},
  { value: 'No Preference', label: 'No Preference' },
  { value: 'Aisle', label: 'Aisle' },
  { value: ' Middle', label: ' Middle' },
  { value: 'Window', label: 'Window' },


]

const FLIGHT_CONNECTION = [
  {value:'', label:'---select---'},
  { value: 'No Preference', label: 'No Preference' },
  { value: 'Nonstop', label: 'Nonstop' },
  { value: ' Up to 1 Stop', label: ' Up to 1 Stop' },
  { value: 'Up to 2 Stops', label: 'Up to 2 Stops' },


]

const FLIGHT_DEPARTURE = [
  {value:'', label:'---select---'},
  { value: 'No Preference', label: 'No Preference' },
  { value: 'Early Morning', label: 'Early Morning' },
  { value: ' Morning', label: ' Morning' },
  { value: 'Mid Day', label: 'Mid Day' },
  { value: ' Afternoon', label: ' Afternoon' },
  { value: 'Late Afternoon', label: 'Late Afternoon' },
  { value: 'Evening', label: 'Evening' },
  { value: 'Late Evening', label: 'Late Evening' },

]
const WIRELESS_SECURITY = [
  {value:'', label:'---select---'},
  { value: 'No Security', label: 'No Security' },
  { value: 'WPA3 Personal', label: 'WPA3 Personal' },
  { value: 'WPA3 Enterprise', label: 'WPA3 Enterprise' },
  { value: 'WPA2 Personal', label: 'WPA2 Personal' },
  { value: 'WPA2 Enterprise', label: 'WPA2 Enterprise' },
  { value: 'WPA', label: 'WPA' },
  { value: 'WEP', label: 'WEP' },

];

export const OPTIONS = {
  sex:SEX,
  country:COUNTRY,
  state:COUNTRY_STATE,
  bank_account_type:BANK_ACCOUNT_TYPE,
  credit_card_type:CREDIT_CARD_TYPE,
  database_type:DATABASE_TYPE,
  email_security:EMAIL_SECURITY,
  email_type:EMAIL_TYPE,
  email_method:EMAIL_METHOD, 
  email_auth_method:EMAIL_AUTH_METHOD,
  blood_type:BLOOD_TYPE,
  blood_factor:BLOOD_FACTOR,
  flight_departure:FLIGHT_DEPARTURE ,
  flight_connection: FLIGHT_CONNECTION,
  seat_assignment: SEAT_ASSIGNMENT,
  flight_class:FLIGHT_CLASS ,
  wireless_security: WIRELESS_SECURITY,
}


export const fileSnippet=(cabinet_object)=>{
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
  if(cabinet_object.fileType?.includes('image')){
    img_src = cabinet_object.fileUrl;
      return null;}
  else if(cabinet_object.fileType?.includes('video'))
    img_src = "https://img.icons8.com/color/80/000000/video-file.png";


  return (<img
      src={img_src}
      className="img-fluid"
      style={{backgroundSize:'cover'}}
      />)
}
