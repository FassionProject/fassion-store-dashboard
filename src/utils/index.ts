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
	const inputWrapper = form?.querySelector('div#input-wrapper');

	(Object.keys(productFormData) as Array<keyof ProductModel>).forEach((key) => {
		const inputElement: HTMLInputElement = inputWrapper?.querySelector(`[name='${key}']`) as HTMLInputElement;

		if (inputElement) {
			const valueDataType = typeof productFormData[key];

			if (valueDataType === 'string') {
				inputElement.value = String(productFormData[key]);
			} else if (valueDataType === 'number') {
				inputElement.valueAsNumber = Number(productFormData[key]);
			} else {
				inputElement.value = String(productFormData[key]);
			}
		}
	});
};

export const checkFormValidation = (form: HTMLFormElement, formData: FormData) => {
	let isValid = false;
	const inputWrapper = form.querySelector('div#input-wrapper');

	Array.from(formData.keys()).forEach((el) => {
		const inputElement: HTMLInputElement = inputWrapper?.querySelector(`#${el}-input-id`) as HTMLInputElement;
		const errorElement: HTMLElement = inputWrapper?.querySelector(`#${el}-error`) as HTMLElement;
		const isInputValid: boolean = inputElement.checkValidity();

		if (isInputValid) {
			isValid = true;
		} else {
			errorElement.style.display = 'block';
			inputElement.style.border = '1px solid red';
			inputElement.style.color = 'red';

			isValid = false;
		}
	});

	return isValid;
};
