import axios from "axios";
import React, { createContext, useState } from "react";
import { useSafeAreaFrame } from "react-native-safe-area-context";
import Navigation from "../components/Navigation";
import { BASE_URL } from "../config";

export const AuchContext = createContext();

export const AuchProvider = ({children}) => {
    const [phone, setphone] = useState(null);

    const registration = async (username, last_name, third_name, email, phone, password, password2, rate_id, gender) => {
      try {
        const response = await axios.post(
        `${BASE_URL}/auth/register`,
        { username,
          last_name,
          third_name,
          email,
          phone,
          password,
          password2,
          rate_id,
          gender,
          'test': true
        })
        console.log(response);
        setphone(response.data.phone);

      } catch (error) {
        console.log(response);
        console.log(`Вы не зарегистрированы ${error}`);
      }
    };

    const verification = async (numder1, numder2, numder3, numder4) => {
      const smsCodeArr = [numder1, numder2, numder3, numder4];
      const smsCode = smsCodeArr.join('');
      console.log(smsCode);
      try {
      const response = await axios.post(
      `${BASE_URL}/auth/verify_sms_code`,
      {
        "code": smsCode,
        "phone": phone
      })
      console.log(response.data);
      } catch (error) {
        console.log(`Неверный смс-код ${error}`);
      }
    }

    const login = async (phone, password) => {
      try {
        const response = await axios.post(
        `${BASE_URL}/auth/login`,
        {
          "phone": phone,
          "password": password
        })
        console.log(response.data);
        } catch (error) {
          console.log(`Ввели неверный логин или пароль ${error}`);
        }
    }

  return (
    <AuchContext.Provider value={{registration, verification, login}}>{children}</AuchContext.Provider>
  )
}