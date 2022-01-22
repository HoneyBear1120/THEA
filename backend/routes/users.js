var express = require('express');
var router = express.Router();
const check= require('express-validator');
const controllers = require('../controllers/users');
const validation=require('../utils/schema');

// const auth = require('../middleware/is-auth');

router.post('/CreateAccount',controllers.signUp);
router.post('/SignIn',controllers.signIn);
router.post('/RequestCode', controllers.requestCode);
router.post('/Otp',controllers.otpVerify);
router.post('/ForgetPassword',validation.raiseRequest,controllers.forgotPassword);
router.post('/ResetPassword',validation.validate_reset_body,controllers.resetPassword);
router.post('/ResendOtp',controllers.resendOtp);
router.post('/UserBasicInformation',controllers.userBasicInformation);
router.post('/EmailChange',controllers.changeUserEmail);
router.post('/changePassword',controllers.changePassword);
router.post('/NotificationSetting',controllers.notificationSettingsInsert);
router.post('/NotificationSettingChange',controllers.notificationSettingChange);
router.put('/DeleteUserProfile',controllers.deleteUserProfile);
router.get('/userInformation',controllers.getUserProfileInfo);
router.post('/imageUpload',controllers.profileImageUpload);

module.exports = router;