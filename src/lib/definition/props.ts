import { FButtonStyle } from "../enums";

type NullOrUndefined = null | undefined;

export type FInputComponentProps = {
	label?: string | NullOrUndefined;
	name: string;
	placeholder?: string | NullOrUndefined;
	helperText?: string | NullOrUndefined;
	icon?: React.ReactNode | NullOrUndefined;
	isRequired?: boolean | NullOrUndefined;
	isReadonly?: boolean | NullOrUndefined;
	isDisabled?: boolean | NullOrUndefined;
	isHidden?: boolean | NullOrUndefined;
	isDropzone?: boolean | NullOrUndefined;
};

export type FButtonComponentProps = {
	type: 'button' | 'submit' | 'reset' | 'lookup';
	label: string;
	classStyle?: FButtonStyle;
	clickFn?: (param: React.MouseEvent) => void;
};
