import api from "../axios/apiClient";
import { LoginDataType, SignupDataType } from "../context/UserContext";

export const userLogin = async (loginData:LoginDataType) => {
  const response = await api.post("login/", loginData);
  return response.data.data;   //access + refresh
};

export const userSignup = async (signupData:SignupDataType)=>{
  const response = await api.post("register/", signupData);
  return response.data.data;
}