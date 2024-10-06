import { GeneralInputStyle } from '@/assets/styles/inputStyle';
import { FInputComponentProps, FNumberOrCurrencyInputComponentProps } from '@/lib/definition/props';
import { ChangeEvent, useEffect, useState } from 'react';

const CurrencyInputStyle: { label: string; icon: string; field: string } = {
	icon: `${GeneralInputStyle.icon} pl-3 text-secondaryTextColor`,
	label: `${GeneralInputStyle.label} text-secondaryTextColor`,
	field: `${GeneralInputStyle.field} w-1/2 pl-[38px] text-right`,
};

const FcCurrencyInputField = ({ label, placeholder, minValue, maxValue, isRequired, isDisabled, isReadonly }: FNumberOrCurrencyInputComponentProps) => {
	const [inputID, setInputID] = useState('');
	const [name, setName] = useState('');

	useEffect(() => {
		const formattedLabel = label?.toLowerCase().split(' ').join('-') ?? '_default';

		setInputID(formattedLabel.concat('-id'));
		setName(formattedLabel.concat('-input'));
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
				htmlFor={inputID}
				className={CurrencyInputStyle.label}>
				{label} {isRequired ? '*' : ''}
			</label>
			<div className='relative'>
				<div className={CurrencyInputStyle.icon}>
					<i className='fa-solid fa-rupiah-sign'></i>
				</div>
				<input
					type='number'
					name={name}
					id={inputID}
					className={CurrencyInputStyle.field}
					placeholder={placeholder}
					min={minValue}
					max={maxValue}
					step={0.1}
					required={isRequired}
					readOnly={isReadonly}
					disabled={isDisabled}
					onChange={currencyInputChangeHandler}
				/>
			</div>
		</div>
	);
};

export default FcCurrencyInputField;
