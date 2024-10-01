import { GeneralInputStyle } from '@/assets/styles/inputStyle';
import { FInputProps } from '@/lib/definition';
import { ChangeEvent, useEffect, useState } from 'react';

const CurrencyInputStyle: { label: string; icon: string; field: string } = {
	icon: `${GeneralInputStyle.icon} pl-3 text-textColor-SecondaryText`,
	label: `${GeneralInputStyle.label} text-textColor-SecondaryText`,
	field: `${GeneralInputStyle.field} w-1/2 pl-[38px] text-right`,
};

const FCurrencyInput = ({ label, placeholder, isRequired, isDisabled, isHidden, isReadonly }: FInputProps) => {
	const [inputID, setInputID] = useState('');
	const [name, setName] = useState('');
	const [inputValue, setInputValue] = useState('');

	useEffect(() => {
		const formattedLabel = label.toLowerCase().split(' ').join('-');

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

		setInputValue(formatCurrency(deformattedValue));
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
					name={name}
					type='number'
					min={0.0}
					id={inputID}
					className={CurrencyInputStyle.field}
					placeholder={placeholder}
					onChange={currencyInputChangeHandler}
					value={inputValue}
					required={isRequired}
					readOnly={isReadonly}
					hidden={isHidden}
					disabled={isDisabled}
				/>
			</div>
		</div>
	);
};

export default FCurrencyInput;
