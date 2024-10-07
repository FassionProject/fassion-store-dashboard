import { FInputComponentProps } from '@/lib/definition/props';
import { useEffect, useState } from 'react';
import inputElementStyle from 'assets/styles/components/FsInputFields.module.css';

const FcTextAreaInputField = ({ label, name, placeholder, icon, isRequired, isDisabled, isReadonly, validationText }: FInputComponentProps) => {
	const [inputID, setInputID] = useState('');

	useEffect(() => {
		const formattedLabel = label?.toLowerCase().split(' ').join('-') ?? '_default';

		setInputID(formattedLabel.concat('-id'));
	}, [inputID, label]);

	return (
		<div>
			<label
				htmlFor={inputID}
				className={inputElementStyle['input-label']}>
				{label} {isRequired ? '*' : ''}
			</label>
			<div className='relative'>
				<div className={inputElementStyle['input-icon']}>{icon ? icon : <i className='fa-solid fa-font'></i>}</div>
				<textarea
					name={name}
					id={inputID}
					className={`${inputElementStyle['input-field']} ${inputElementStyle['textarea-input-field']}`}
					placeholder={placeholder ?? 'Type here..'}
					required={isRequired ?? false}
					readOnly={isReadonly ?? false}
					disabled={isDisabled ?? false}></textarea>
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

export default FcTextAreaInputField;
