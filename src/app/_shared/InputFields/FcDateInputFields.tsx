import inputElementStyle from '@/styles/components/FsInputFields.module.css';
import { FInputComponentProps } from '@/lib/definition/props';
import { useEffect, useState } from 'react';

const FcDateInputFields = ({ label, placeholder, isRequired, isDisabled, isReadonly, validationText }: FInputComponentProps) => {
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
					<i className='fa-solid fa-calendar-days'></i>
				</div>
				<input
					type='date'
					name={name}
					id={`${name}-input-id`}
					className={`${inputElementStyle['input-field']} ${inputElementStyle['date-input-field']}`}
					placeholder={placeholder ?? 'Type here..'}
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

export default FcDateInputFields;
