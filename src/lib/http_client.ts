import axios, { AxiosInstance } from 'axios';
import { HTTP_BASE_CONFIG } from '@/lib/constants';
import { ReponseData } from '@/lib/definition';
import { safeRequest } from '@/utils';

const httpClient = (config: object): AxiosInstance => {
	const httpOptions = {};

	const defaultConfig = { baseURL: HTTP_BASE_CONFIG.baseURL, timeout: 10000, ...httpOptions };

	return axios.create({ ...defaultConfig, ...config });
};

const getClient = async (endpoint: string, params?: object): Promise<ReponseData> => {
	return await safeRequest(httpClient({ params }).get(endpoint));
};

const postClient = async (endpoint: string, data: object, params?: object) => {
	return await safeRequest(httpClient({ params }).post(endpoint, data));
};

const putClient = async (endpoint: string, data: object, params?: object) => {
	return await safeRequest(httpClient({ params }).put(endpoint, data));
};

const deleteClient = async (endpoint: string, params: object, data?: object) => {
	return await safeRequest(httpClient({ params }).delete(endpoint, data));
};

export { getClient, postClient, putClient, deleteClient };
