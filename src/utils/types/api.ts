export interface ApiResponse {
  status: boolean;
  message: string;
}

export interface ApiDataResponse<T = any> {
  status: boolean;
  message: string;
  data: T;
}

export interface ApiDataArrayResponse<T = any> {
  status: boolean;
  message: string;
  data: T[];
}
