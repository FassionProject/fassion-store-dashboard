import inputElementStyle from 'assets/styles/components/FsInputFields.module.css';
import { FNumberOrCurrencyInputComponentProps } from '@/lib/definition/props';
import { ChangeEvent, useEffect, useState } from 'react';

const FcCurrencyInputField = ({ label, name, placeholder, minValue, maxValue, isRequired, isDisabled, isReadonly, validationText }: FNumberOrCurrencyInputComponentProps) => {
	const [inputID, setInputID] = useState('');

	useEffect(() => {
		const formattedLabel = label?.toLowerCase().split(' ').join('-') ?? '_default';

		setInputID(formattedLabel.concat('-id'));
	}, [inputID, label]);

	const formatCurrency = (value: string): string => {
		const numberValue = value.replace(/\D/g, '');

		const formattedValue = new Intl.NumberFormat('en-US').format(parseFloat(numberValue) || 0);

		return formattedValue;
	};

	const deformatCurrency = (value: string): string => value.replace(/\./g, '').replace(',', '.');

	const currencyInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;

		const deformattedValue = deformatCurrency(value);
		console.log(formatCurrency(deformattedValue));

		// setInputValue(formatCurrency(deformattedValue));
	};

	return (
		<div>
			<label
				htmlFor={`${name}-input-id`}
				className={inputElementStyle['input-label']}>
				{label} {isRequired ? '*' : ''}
			</label>
			<div className='relative'>
				<div className={inputElementStyle['input-icon']}>
					<i className='fa-solid fa-rupiah-sign'></i>
				</div>
				<input
					type='number'
					name={name}
					id={`${name}-input-id`}
					className={`${inputElementStyle['input-field']} ${inputElementStyle['currency-input-field']}`}
					placeholder={placeholder ?? 'Type here..'}
					min={minValue}
					max={maxValue}
					step={0.1}
					required={isRequired ?? false}
					readOnly={isReadonly ?? false}
					disabled={isDisabled ?? false}
					onChange={currencyInputChangeHandler}
				/>
			</div>
			<span
				id={`${name}-error`}
				style={{ display: 'none' }}
				className='block w-full text-right text-RedButton text-xs'>
				{validationText ?? 'Input is not valid!'}
			</span>
		</div>
	);
};

export default FcCurrencyInputField;
