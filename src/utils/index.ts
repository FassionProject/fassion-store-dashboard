import { ReponseData } from '@/lib/definition';
import { AxiosResponse } from 'axios';

const safeRequest = async (response: Promise<AxiosResponse>): Promise<ReponseData> => {
	try {
		const { data, status, statusText, headers, config, request } = await response;

		return {
			data,
			status,
			statusText,
			headers,
			config,
			request,
			errorMsg: null,
		};
	} catch (error) {
		return {
			status: -1,
			errorMsg: `Failed to fetch data: ${error}`,
			data: null,
			statusText: null,
			headers: null,
			config: null,
			request: null,
		};
	}
};

export { safeRequest };
