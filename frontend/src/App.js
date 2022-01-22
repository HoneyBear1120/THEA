import React from "react";
import {withRouter, Switch, Route } from "react-router-dom";
import SignIn from "./Pages/OnBoarding/SignIn";
import RequestCode from "./Pages/OnBoarding/RequestCode";
import "./Assets/css/theme.css";
import "./Assets/css/Responsive.css";
import "./Assets/css/custom.css";
import "./Assets/font/feather/feather.css";
import CreateAccount from "./Pages/OnBoarding/CreateAccount";
import Otp from "./Pages/Otp";
import Verifyyouremail from "./Pages/Verifyyouremail";
import Forgotpassword from "./Pages/Forgotpassword";
import MyAccount from "./Pages/MyAccount/MyAccount";
import BankAccount from "./Pages/BankAccount";
import Dashboard from "./Pages/Dashboard";
import ResetPassword from "./Pages/OnBoarding/ResetPassword";
import ForgetPassword from "./Pages/ForgetPassword";
import PrivateRoute from "./Routes/Routes";
import EmailVerified from "./Pages/OnBoarding/EmailVerified";
import CreateCategory from "./Pages/FormTemplates/index";
import viewForm from "./Pages/viewForm";
import EditForm from './Pages/FormMutations/EditForm'
import { Cabinet } from "./Pages/Cabinet";

const App=(props)=> { 
  return (
    <div>
        <Switch>
          <Route exact path="/">
            <SignIn />
          </Route>
          <Route exact path="/RequestCode">
            <RequestCode />
          </Route>
          <PrivateRoute exact path="/dashboard" component={Dashboard}/>
          <PrivateRoute path='/cabinet' component={Cabinet} />
          <PrivateRoute path="/MyAccount" component={MyAccount}/>
          <PrivateRoute path="/BankAccount" component={BankAccount}/>
          <PrivateRoute path="/create_form/:template" component={CreateCategory}/>
          <PrivateRoute path="/view_form/:id" component={viewForm}/> 
          <PrivateRoute path="/edit_category/:id" component={EditForm}/> 
          <Route path="/ForgetPassword" component={ForgetPassword}/>
          <Route  exact path="/ResetPassword/:id" component={ResetPassword}/>
          <Route path="/Forgotpassword">
            <Forgotpassword />
          </Route>
          <Route exact path="/verifyEmail/:token">
            <EmailVerified></EmailVerified>
          </Route>
          <Route path="/Verifyyouremail">
            <Verifyyouremail />
          </Route>
          <Route path="/Otp">
            <Otp />
          </Route>
          <Route path="/CreateAccount">
            <CreateAccount />
          </Route>
         
        </Switch>
        </div>
  );
}

export default withRouter(App);
