import { ApiDataResponse } from "@/utils/types/api";
import { LoginSchema, RegisterSchema, User } from "./type";
import axiosWithConfig from "../axiosWithConfig";

interface Token {
  token: string;
}

export const registerAuth = async (data: RegisterSchema) => {
  try {
    const response = await axiosWithConfig.post(`/apinya/register`, data);
    return response.data as ApiDataResponse<User>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const loginAuth = async (data: LoginSchema) => {
  try {
    const response = await axiosWithConfig.post(`/apinya/login`, data);
    return response.data as ApiDataResponse<Token>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const getIdentity = async () => {
  try {
    const response = await axiosWithConfig.get(`/apinya/identity`);
    return response.data as ApiDataResponse<User>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
