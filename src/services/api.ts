import axios, { AxiosResponse } from "axios";
import md5 from "md5";

const publicKey = import.meta.env.VITE_PUBLIC_KEY;
const privateKey = import.meta.env.VITE_PRIVATE_KEY;
const baseURL = import.meta.env.VITE_BASE_URL;

const getAuthParams = () => {
  const ts = new Date().getTime().toString();
  const hash = md5(ts + privateKey + publicKey);
  return {
    ts,
    apikey: publicKey,
    hash,
  };
};

const requestInterceptor = (config: any) => {
  const authParams = getAuthParams();

  config.params = {
    ...config.params,
    ...authParams,
  };
  return config;
};

const handleRequestError = (error: any) => Promise.reject(error);

const parseResponse = ({ data, ...props }: AxiosResponse): AxiosResponse => ({
  ...props,
  data,
});

const parseResponseError = (error: any): Promise<AxiosResponse> => {
  const errorResponse = error.response || {};
  const data = error.response?.data || {};
  const defaultErrorMessage = "Erro ao realizar a ação";

  const response = {
    ...error.response,
    isCanceled: axios.isCancel(error),
    message:
      data.message ||
      data.detail ||
      errorResponse.message ||
      defaultErrorMessage,
    data: data.data,
    status: data.status || errorResponse.status,
    firstValidation: data.validations?.[0] || data.validation?.[0],
  };

  return Promise.resolve(response);
};

const createApiClient = (baseURL: string) => {
  const apiClient = axios.create({
    baseURL,
    headers: { "Content-Type": "application/json" },
    timeout: 10000,
  });

  apiClient.interceptors.request.use(requestInterceptor, handleRequestError);
  apiClient.interceptors.response.use(parseResponse, parseResponseError);

  return apiClient;
};

if (!baseURL) {
  throw new Error("Base URL não configurada");
}

export const PortalApi = createApiClient(baseURL);
export default PortalApi;
