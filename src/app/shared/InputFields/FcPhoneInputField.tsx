import inputElementStyle from 'assets/styles/components/FsInputFields.module.css';
import { FInputComponentProps } from '@/lib/definition/props';
import { useEffect, useState } from 'react';

const FcPhoneInputField = ({ label, placeholder, isRequired, isDisabled, isReadonly, validationText }: FInputComponentProps) => {
	const [inputID, setInputID] = useState('');
	const [name, setName] = useState('');

	useEffect(() => {
		const formattedLabel = label?.toLowerCase().split(' ').join('-') ?? '_default';

		setInputID(formattedLabel.concat('-id'));
		setName(formattedLabel.concat('-input'));
	}, [inputID, label]);

	return (
		<div>
			<label
				htmlFor={`${name}-input-id`}
				className={inputElementStyle['input-label']}>
				{label} {isRequired ? '*' : ''}
			</label>
			<div className='relative'>
				<div className={inputElementStyle['input-icon']}>
					<i className='fa-solid fa-phone'></i>
				</div>
				<input
					type='tel'
					name={name}
					id={`${name}-input-id`}
					className={`${inputElementStyle['input-field']} ${inputElementStyle['phone-input-field']}`}
					placeholder={placeholder ?? '0812-3456-7890'}
					required={isRequired ?? false}
					readOnly={isReadonly ?? false}
					disabled={isDisabled ?? false}
					pattern='^0\d{2,3}[\s-]?\d{3,4}[\s-]?\d{4}$'
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

export default FcPhoneInputField;
