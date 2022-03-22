import axios, {AxiosError, AxiosResponse} from 'axios';
import {BaseQueryFn} from '@reduxjs/toolkit/query';

const BASE_URL = 'http://localhost:3000/';
const API_TIMEOUT = 5000;


const createAPI = (): BaseQueryFn => {
    const api = axios.create({
        baseURL: BASE_URL,
        timeout: API_TIMEOUT,
    });

    api.interceptors.response.use(
        (response: AxiosResponse) => ({data: response.data}),
        (err: AxiosError) => ({error: {status: err.response?.status, data: err.response?.data}}),
    );

    return api;
};

export default createAPI;
