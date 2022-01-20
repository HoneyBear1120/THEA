var CryptoJS = require("crypto-js");

exports.encryption=async(cipherText)=>{
    const cipher=await CryptoJS.AES.encrypt(cipherText, 'secret key 123').toString();
    return cipher;
};