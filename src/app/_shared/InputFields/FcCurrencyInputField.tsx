import inputElementStyle from '@/styles/components/FsInputFields.module.css';
import { FNumberOrCurrencyInputComponentProps } from '@/lib/definition/props';
import { ChangeEvent, useEffect, useState } from 'react';

const FcCurrencyInputField = ({ label, name, placeholder, minValue, maxValue, isRequired, isDisabled, isReadonly, validationText }: FNumberOrCurrencyInputComponentProps) => {
	const [inputID, setInputID] = useState('');
	const [inputValue, setInputValue] = useState('0.0');

	useEffect(() => {
		const formattedLabel = label?.toLowerCase().split(' ').join('-') ?? '_default';

		setInputID(formattedLabel.concat('-id'));
	}, [inputID, label]);

	function deformatCurrency(value: string) {
		const split1: [string, string] = [value.split('.')[0], value.split('.')[1]];
		const secValue = Number(split1[0].split(',').join('') + '.' + split1[1]);

		return secValue;
	}

	const formatCurrency = (value: number): string => {
		const formattedValue = new Intl.NumberFormat('en-US').format(value || 0);

		return formattedValue;
	};

	const currencyInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;

		console.log(event);

		// const pattern = /[0-9.]/g;
		// console.log(pattern.test(value), value);

		// const deformattedValue = deformatCurrency(value);
		// console.log(formatCurrency(deformattedValue));

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
					value={inputValue}
					step={0.1}
					onKeyDown={(event) => console.log(event)}
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
