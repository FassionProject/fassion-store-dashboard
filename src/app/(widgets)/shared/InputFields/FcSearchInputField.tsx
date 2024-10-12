import { FInputComponentProps } from '@/lib/definition/props';
import { useEffect, useState } from 'react';
import inputElementStyle from 'assets/styles/components/FsInputFields.module.css';

const FcSearchInputField = ({ label, name, placeholder, icon, isRequired, isDisabled, isReadonly }: FInputComponentProps) => {
	const [inputID, setInputID] = useState('');

	// Set ID & Name of <input/> element
	useEffect(() => {
		const formattedLabel = label?.toLowerCase().split(' ').join('-') ?? '_default';

		setInputID(formattedLabel.concat('-id'));
	}, [label]);

	return (
		<div className='relative'>
			<div className={inputElementStyle['input-icon']}>{icon ? icon : <i className='fa-solid fa-font'></i>}</div>
			<input
				type='search'
				name={name}
				id={`${name}-input-id`}
				className={`${inputElementStyle['input-field']} ${inputElementStyle['search-input-field']}`}
				placeholder={placeholder ?? 'Type here..'}
				required={isRequired ?? false}
				readOnly={isReadonly ?? false}
				disabled={isDisabled ?? false}
			/>
		</div>
	);
};

export default FcSearchInputField;
