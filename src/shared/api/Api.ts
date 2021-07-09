import type {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import axios from 'axios';
import {AUTH_URL, BASE_URL} from '../Paths';
import {TOKEN_STORAGE_KEY} from '../Constants';
import qs from 'qs';
import type {AuthenticationRequest, Jwt} from '../model/Token';

export const API = (): AxiosInstance => {
  const token = sessionStorage.getItem(TOKEN_STORAGE_KEY);
  return axios.create({
    baseURL: BASE_URL,
    timeout: 50000,
    headers: {Authorization: `Bearer ${token}`},
    paramsSerializer: (params) => qs.stringify(params, {arrayFormat: 'comma'}),
  });
};

const authAPI = axios.create({
  baseURL: AUTH_URL,
  timeout: 500000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const AUTH_POST = async (body: AuthenticationRequest): Promise<AxiosResponse<Jwt> | null> => {
  try {
    return await authAPI.post('', body);
  } catch (e) {
    console.error(`authTemplate(): ${e}\n body: ${body}`);
    return null;
  }
};
