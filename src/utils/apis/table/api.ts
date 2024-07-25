import { ApiDataArrayResponse, ApiResponse } from "@/utils/types/api";
import axiosWithConfig from "../axiosWithConfig";
import { DetailTable } from "./type";

export const getDetailTable = async () => {
  try {
    const response = await axiosWithConfig.get(`/apinya/hoststatus`);
    return response.data as ApiDataArrayResponse<DetailTable>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const deleteUserList = async (popID: string, userName: string) => {
  try {
    const response = await axiosWithConfig.get(
      `/apinya/host/${popID}/${encodeURI(userName)}`
    );
    return response.data as ApiResponse;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
