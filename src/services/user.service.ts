import api from "../axios/apiClient";

export const userLogin = async (email: string,password: string) => {
  const response = await api.post("login/",{
        email:email,
        password:password
  });
  return response.data.data;   //access + refresh
};

export const userSignup = async (email: string , password: string, username: string)=>{
  const response = await api.post("signup/", {
    email,
    password,
    username,
  });
  return response.data.data;
}