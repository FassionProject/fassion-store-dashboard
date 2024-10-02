import axios, { AxiosInstance } from 'axios';
import { HTTP_BASE_CONFIG } from '@/lib/constants';
import { safeRequest } from '@/utils';
import { ReponseData } from './definition/api';

const httpClient = (config: object): AxiosInstance => {
	// const httpOptions = {};

	const defaultConfig = { baseURL: HTTP_BASE_CONFIG.baseURL, timeout: 10000 };

	return axios.create({ ...defaultConfig, ...config });
};

const GetClient = async (endpoint: string, params?: object): Promise<ReponseData> => {
	return await safeRequest(httpClient({ params }).get(endpoint));
};

const PostClient = async (endpoint: string, data: object, params?: object) => {
	return await safeRequest(httpClient({ params }).post(endpoint, data));
};

const PutClient = async (endpoint: string, data: object, params?: object) => {
	return await safeRequest(httpClient({ params }).put(endpoint, data));
};

const PatchClient = async (endpoint: string, data: object, params?: object) => {
	return await safeRequest(httpClient({ params }).patch(endpoint, data));
};

const DeleteClient = async (endpoint: string, params: object, data?: object) => {
	return await safeRequest(httpClient({ params }).delete(endpoint, data));
};

export { GetClient, PostClient, PutClient, DeleteClient, PatchClient };
