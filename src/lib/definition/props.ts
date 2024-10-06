import { FeButtonStyleType } from '../enums';

type NullOrUndefined = null | undefined;

export type FInputComponentProps = {
	label: string;
	name: string;
	placeholder?: string | 'Type Here..';
	helperText?: string | '';
	icon?: React.ReactNode | NullOrUndefined;
	isRequired?: boolean | false;
	isReadonly?: boolean | false;
	isDisabled?: boolean | false;
};
// TODO: Tambah validation text
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
