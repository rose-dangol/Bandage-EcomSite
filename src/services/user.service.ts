import api from "../axios/apiClient";

export const userLogin = async (email: string,password: string) => {
  const response = await api.post("login/",{
        email:email,
        password:password
  });
  return response.data.data;   //access + refresh
};

export const userSignup = async (firstName:string,lastName:string,email: string , password: string, confirmPassword: string)=>{
  const response = await api.post("register/", {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
  });
  return response.data.data;
}