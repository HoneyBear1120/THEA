/*
 * Created on Wed Dec 18 2019 by Rahul Pandey
 *
 * Copyright (c) 2020 Cliffex Sofware Solutions
 */
// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

AWS.config.update({
    region: 'us-east-1',
    apiVersion: '2010-12-01',
    credentials: {
        accessKeyId: 'AKIAUNRYPVUQMB5KHUPS',
        secretAccessKey: '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'
    }
})

// Set the region 
// AWS.config.update({ region: 'us-east-1' });
// Create sendEmail params 
exports.sendMail = function (to, cc, subject, htmlBody, txtBody, from, replyTo) {
    //const from = '';
    var params = {
        Destination: { /* required */
            CcAddresses: cc,
            // [
            //     'EMAIL_ADDRESS',
            //     /* more items */
            // ],
            ToAddresses: to,
            // [
            //     'EMAIL_ADDRESS',
            //     /* more items */
            // ]
        },
        Message: { /* required */
            Body: { /* required */
                Html: {
                    Charset: "UTF-8",
                    Data: htmlBody
                },
                Text: {
                    Charset: "UTF-8",
                    Data: txtBody
                }
            },
            Subject: {
                Charset: 'UTF-8',
                Data: subject
            }
        },
        Source: from
    };

    // Create the promise and SES service object
    var sendPromise = new AWS.SES({ apiVersion: '2010-12-01' })
        .sendEmail(params)
        .promise();
    return sendPromise;
}