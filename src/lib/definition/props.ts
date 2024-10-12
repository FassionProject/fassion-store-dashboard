import { FeButtonStyleType } from '../enums';

type NullOrUndefined = null | undefined;

export type FInputComponentProps = {
	label?: string;
	name: string;
	placeholder?: string | NullOrUndefined;
	helperText?: string | NullOrUndefined;
	validationText?: string;
	icon?: React.ReactNode | NullOrUndefined;
	isRequired?: boolean | NullOrUndefined;
	isReadonly?: boolean | NullOrUndefined;
	isDisabled?: boolean | NullOrUndefined;
};

export type FTextInputComponentProps = FInputComponentProps & {
	minLength?: number | 0;
	maxLength?: number | 999;
};

export type FNumberOrCurrencyInputComponentProps = FInputComponentProps & {
	minValue?: number | 0;
	maxValue?: number | 999999;
};

export type FFileInputComponentProps = FInputComponentProps & {
	acceptFileType: string;
	isDropzone?: boolean | false;
	isMultiple?: boolean | false;
};

export type FButtonComponentProps = {
	type: 'button' | 'submit' | 'reset' | 'lookup' | 'link';
	label: string;
	href?: string;
	classStyle?: FeButtonStyleType;
	clickFn?: (param: React.MouseEvent) => void;
};

export type FcDataTableProps<T> = {
	data: Array<T> | null;
	columns: Array<{ title: string; property: string }>;
};

export type FLookupInputComponentProps = FInputComponentProps  & {
		value: string;
		clickFn: (param: React.MouseEvent) => void;
	};
