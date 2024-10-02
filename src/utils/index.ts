import { ReponseData } from '@/lib/definition/api';
import { ProductModel } from '@/lib/model';
import { AxiosResponse } from 'axios';

export const safeRequest = async (response: Promise<AxiosResponse>): Promise<ReponseData> => {
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

export const bindFormValues = (productFormData: ProductModel, formID: string) => {
	const form = document.querySelector(formID);

	(Object.keys(productFormData) as Array<keyof ProductModel>).forEach((key) => {
		form?.querySelectorAll('input').forEach((input) => {
			if ((input as HTMLInputElement).getAttribute('name') === key) {
				const valueDataType = typeof productFormData[key];

				if (valueDataType === 'string') {
					(input as HTMLInputElement).value = String(productFormData[key]);
				} else if (valueDataType === 'number') {
					(input as HTMLInputElement).valueAsNumber = Number(productFormData[key]);
				}
			}
		});
	});
};
