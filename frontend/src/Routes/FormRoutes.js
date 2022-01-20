
import React from "react";
import BankAccount from "../Pages/BankAccount";
import Contact from "../Pages/Contact";
import PrivateRoute from "./Routes";
function FormRoutes() {
  return (
    <div>
    
      <PrivateRoute exact path="/Contact"><Contact /></PrivateRoute>
      <PrivateRoute exact path="/BankAccount"><BankAccount /> </PrivateRoute>
      
     
    </div>
  );
}


export default FormRoutes;
