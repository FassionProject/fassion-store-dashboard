import inputElementStye from '@/styles/components/FsInputFields.module.css';
import { FNumberOrCurrencyInputComponentProps } from '@/lib/definition/props';
import { useEffect, useState } from 'react';

const FcNumberInputField = ({ label, name, placeholder, minValue, maxValue, isRequired, isDisabled, isReadonly, validationText }: FNumberOrCurrencyInputComponentProps) => {
	const [inputID, setInputID] = useState('');

	useEffect(() => {
		const formattedLabel = label?.toLowerCase().split(' ').join('-') ?? '_default';

		setInputID(formattedLabel.concat('-id'));
	}, [inputID, label]);

	return (
		<div>
			<label
				htmlFor={`${name}-input-id`}
				className={inputElementStye['input-label']}>
				{label} {isRequired ? '*' : ''}
			</label>
			<div className='relative'>
				<div className={inputElementStye['input-icon']}>
					<i className='fa-solid fa-arrow-up-9-1'></i>
				</div>
				<input
					type='number'
					name={name}
					id={`${name}-input-id`}
					className={`${inputElementStye['input-field']} ${inputElementStye['number-input-field']}`}
					placeholder={placeholder ?? ''}
					min={minValue}
					max={maxValue}
					required={isRequired ?? false}
					readOnly={isReadonly ?? false}
					disabled={isDisabled ?? false}
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

export default FcNumberInputField;
