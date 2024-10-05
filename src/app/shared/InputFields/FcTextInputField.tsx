import textInputStyle from 'assets/styles/components/FsInputFields.module.css';

import { FInputComponentProps } from '@/lib/definition/props';

import { useEffect, useState } from 'react';

const FcTextInputField = ({ label, name, placeholder, icon, isRequired, isDisabled, isHidden, isReadonly }: FInputComponentProps) => {
	const [inputID, setInputID] = useState('');

	// Set ID & Name of <input/> element
	useEffect(() => {
		const formattedLabel = label?.toLowerCase().split(' ').join('-') ?? '_default';

		setInputID(formattedLabel.concat('-id'));
	}, [label]);

	return (
		<div hidden={isHidden ?? false}>
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

export default FcTextInputField;
