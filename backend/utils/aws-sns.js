var AWS = require("aws-sdk");
// const User = require("../models/user");
// Set region
AWS.config.update({ region: "me-south-1" });

const awsSns = new AWS.SNS({ apiVersion: "2010-03-31" });

exports.sendTranSms = function (params) {
    var attri = {
        attributes: {
            /* required */
            DefaultSMSType: "Transactional" /* highest reliability */,
            DefaultSenderID: "",
        },
    };
    const publishTextPromise = awsSns
        .setSMSAttributes(attri)
        .promise()
        .then((data) => {
            console.log("otp sent successfully");
            console.log(data);
            return awsSns.publish(params).promise();
        })
        .catch((err) => {
            console.log(err);
            return null;
        });

    return publishTextPromise;
};

exports.sendPromoSms = function (params) {
    var attri = {
        attributes: {
            /* required */ DefaultSMSType: "Promotional" /* lowest cost */,
        },
    };

    const publishTextPromise = awsSns
        .setSMSAttributes(attri)
        .promise()
        .then((data) => {
            //console.log(data);
            return awsSns.publish(params).promise();
        })
        .catch((err) => {
            console.log(err);
            return null;
        });
    //var publishTextPromise = new AWS.SNS({ apiVersion: '2010-03-31' }).setSMSAttributes(attri).publish(params).promise();
    return publishTextPromise;
};

exports.sendTransnlToUser = function (userIds, msg) {
    var attri = {
        attributes: {
            /* required */
            DefaultSMSType: "Transactional" /* highest reliability */,
            DefaultSenderID: "SKOOTR",
        },
    };
    //console.log("====>---------");

    User.findAll({ where: { id: userIds }, attributes: ["isd_code", "phone"] })
        .then((users) => {
            for (var i = 0; i < users.length; i++) {
                let user = users[i];
                //console.log("====>" + user.isd_code + " " + user.phone);
                const params = {
                    Message: msg /* required */,
                    PhoneNumber: user.isd_code + user.phone,
                };
                awsSns
                    .setSMSAttributes(attri)
                    .promise()
                    .then((data) => {
                        awsSns.publish(params).promise();
                    })
                    .catch((err) => {
                        //console.log(err);
                    });
            }
        })
        .catch((err) => {
            console.log(err);
        });
};
