import axios from "axios";
import React, {createContext} from "react";
import { BASE_URL } from "../config";

export const AuchVerificationContext = createContext();

export const AuchVerificationProvider = ({children}) => {

  const verification = ( numder1, numder2, numder3, numder4 ) => {
    axios.post(`${BASE_URL}/auth/verify_sms_code`, JSON.stringify({
      numder1,
      numder2,
      numder3,
      numder4
    })).then(res => {
      let userVerification = res.data;
      console.log(userVerification);

    }).catch(e => {
      console.log(`verification error ${e}`);
    })
  }
  return (
    <AuchVerificationContext.Provider value={{verification}}>{children}</AuchVerificationContext.Provider>
  )
}