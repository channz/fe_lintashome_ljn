import { ApiDataArrayResponse } from "@/utils/types/api";
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
