const crypto = require('crypto');
//const format = require('biguint-format');



 exports.randomC=(qty)=> {
   try {
    let a=crypto.randomBytes(qty).toString('hex');       
    return a;
   } catch (error) {
       return null;
   }
}


//ref https://stackoverflow.com/a/44678459/1069093
exports.randAlphaNum = function randomString(len) {
    var p = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnop";
    return [...Array(len)].reduce(a => a + p[~~(Math.random() * p.length)], '');
}


exports.otp = function cryptoRandomNumber() {
    const min = parseInt(process.env.OTP_MIN, 10);
    const max = parseInt(process.env.OTP_MAX, 10);

    var distance = max - min;

    if (min >= max) {
        console.log('Minimum number should be less than maximum');
        return false;
    } else if (distance > 281474976710655) {
        console.log('You can not get all possible random numbers if range is greater than 256^6-1');
        return false;
    } else if (max > Number.MAX_SAFE_INTEGER) {
        console.log('Maximum number should be safe integer limit');
        return false;
    } else {
        var maxBytes = 6;
        var maxDec = 281474976710656;

        var randbytes = parseInt(crypto.randomBytes(maxBytes).toString('hex'), 16);
        var result = Math.floor(randbytes / maxDec * (max - min + 1) + min);

        if (result > max) {
            result = max;
        }
        return result;
    }
}


exports.isEmpty = function (string) {
    if (typeof (string) === 'object') {
        if (JSON.stringify(string) === '{}' || JSON.stringify(string) === '[]') {
            return true;
        } else if (!string) {
            return true;
        }
        return false;
    } else if (typeof (string) === 'string') {
        if (!string.trim()) {
            return true;
        }
        return false;
    } else if (typeof (string) === 'undefined') {
        return true;
    } else {
        return false;
    }
}


exports.toTitleCase = function (str) {

    return str.replace(/[a-z]/i, function (letter) {

        return letter.toUpperCase();

    }).trim();

}