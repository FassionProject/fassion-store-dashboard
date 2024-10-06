import textInputStyle from 'assets/styles/components/FsInputFields.module.css';

import { FTextInputComponentProps } from '@/lib/definition/props';

import { useEffect, useState } from 'react';

const FcTextInputField = ({ label, name, placeholder, icon, minLength, maxLength, isRequired, isDisabled, isReadonly }: FTextInputComponentProps) => {
	const [inputID, setInputID] = useState('');

	// Set ID & Name of <input/> element
	useEffect(() => {
		const formattedLabel = label?.toLowerCase().split(' ').join('-') ?? '_default';

		setInputID(formattedLabel.concat('-id'));
	}, [label]);

	return (
		<div>
			<label
				htmlFor={inputID}
				className={textInputStyle['text-field-label']}>
				{label} {isRequired ? '*' : ''}
			</label>
			<div className='relative'>
				<div className={textInputStyle['text-field-icon']}>{icon ? icon : <i className='fa-solid fa-font'></i>}</div>
				<input
					type='text'
					name={name}
					id={inputID}
					className={textInputStyle['text-field-input']}
					autoComplete='false'
					autoCorrect='false'
					placeholder={placeholder ?? ''}
					required={isRequired}
					readOnly={isReadonly}
					disabled={isDisabled}
					minLength={minLength}
					maxLength={maxLength}
				/>
			</div>
		</div>
	);
};

export default FcTextInputField;
