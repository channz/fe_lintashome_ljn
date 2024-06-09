import {
  ApiDataArrayResponse,
  ApiDataResponse,
  ApiResponse,
} from "@/utils/types/api";
import axiosWithConfig from "../axiosWithConfig";
import { AddBulkpopSchema, Bulkpop, UpdateBulkpopSchema } from "./type";

export const createBulkpop = async (data: AddBulkpopSchema) => {
  try {
    const response = await axiosWithConfig.post(`/apinya/bulkpop`, data);
    return response.data as ApiDataResponse<Bulkpop>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const getBulkpop = async () => {
  try {
    const response = await axiosWithConfig.get(`/apinya/bulkpop`);
    return response.data as ApiDataArrayResponse<Bulkpop>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const editBulkpop = async (
  bulkpopID: string,
  body: UpdateBulkpopSchema
) => {
  try {
    const response = await axiosWithConfig.put(
      `/apinya/bulkpop/${bulkpopID}`,
      body
    );

    return response.data as ApiDataResponse<Bulkpop>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const deleteBulkpop = async (bulkpopID: string) => {
  try {
    const response = await axiosWithConfig.delete(
      `/apinya/bulkpop/${bulkpopID}`
    );

    return response.data as ApiResponse;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
