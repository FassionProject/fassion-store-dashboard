import { FButtonStyle } from './enums';

export type ReponseData = {
	data: object | null;
	status: number;
	statusText: string | null;
	headers: object | null;
	config: object | null;
	request: object | null;
	errorMsg: string | null;
};

export type FInputProps = {
	label?: string | undefined;
	placeholder?: string | undefined;
	helperText?: string | undefined;
	icon?: React.ReactNode | undefined;
	isRequired?: boolean | undefined;
	isReadonly?: boolean | undefined;
	isDisabled?: boolean | undefined;
	isHidden?: boolean | undefined;
	isDropzone?: boolean | undefined;
};

export type FButtonProps = {
	type: 'button' | 'submit' | 'reset' | 'lookup';
	label: string;
	classStyle?: FButtonStyle;
	clickFn?: (param: React.MouseEvent) => void;
};

export type ProductParams = {
	page?: number | null | undefined;
	pageSize?: number | null | undefined;
	search?: string | null | undefined;
	priceFrom?: number | null | undefined;
	priceTo?: number | null | undefined;
	stockFrom?: number | null | undefined;
	stockTo?: number | null | undefined;
	categoryId?: string | null | undefined;
	tagsId?: string | null | undefined[];
	storeId?: string | null | undefined;
	withStore?: boolean | null | undefined;
	withCategory?: boolean | null | undefined;
	withTags?: boolean | null | undefined;
};

export type ProductCategoryParams = {
	parentId?: string | null | undefined;
	page?: number | null | undefined;
	pageSize?: number | null | undefined;
	search?: number | null | undefined;
	withProduct?: boolean | null | undefined;
};

export type ProductTagParams = {
	page?: number | null | undefined;
	pageSize?: number | null | undefined;
	search?: number | null | undefined;
	storeId?: string | null | undefined;
	withProduct?: boolean | null | undefined;
};
