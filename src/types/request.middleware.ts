import { AxiosRequestConfig } from "axios";

export type request = {
    url: string;
    method?: AxiosRequestConfig["method"];
    payload?: object;
    headers?: object;
    onSuccess?: Function;
    onFailure?: Function;
};

export type action = {
    type: string;
    payload?: any;
    request?: request;
};