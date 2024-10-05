import { GeneralInputStyle } from '@/assets/styles/inputStyle';
import { FInputComponentProps } from '@/lib/definition/props';
import { ChangeEvent, useEffect, useState } from 'react';

const CurrencyInputStyle: { label: string; icon: string; field: string } = {
	icon: `${GeneralInputStyle.icon} pl-3 text-textColor-SecondaryText`,
	label: `${GeneralInputStyle.label} text-textColor-SecondaryText`,
	field: `${GeneralInputStyle.field} w-1/2 pl-[38px] text-right`,
};

const FCurrencyInput = ({ label, placeholder, isRequired, isDisabled, isHidden, isReadonly }: FInputComponentProps) => {
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
					onChange={currencyInputChangeHandler}
					placeholder={placeholder ?? ''}
					required={isRequired ?? false}
					readOnly={isReadonly ?? false}
					hidden={isHidden ?? false}
					disabled={isDisabled ?? false}
				/>
			</div>
		</div>
	);
};

export default FCurrencyInput;
