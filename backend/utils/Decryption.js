


var CryptoJS = require("crypto-js");

exports.decrypt=async(decipherText)=>{
  
    if(decipherText!=null){
        var bytes  = CryptoJS.AES.decrypt(decipherText, 'secret key 123');
        var originalText = bytes.toString(CryptoJS.enc.Utf8);
        return originalText;
    }else return '';
   
}
