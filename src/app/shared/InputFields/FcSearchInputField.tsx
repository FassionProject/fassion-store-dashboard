import { GeneralInputStyle } from '@/assets/styles/inputStyle';
import { FInputComponentProps } from '@/lib/definition/props';
import { useEffect, useState } from 'react';

const TextInputStyle = {
	icon: `${GeneralInputStyle.icon} pl-3 text-secondaryTextColor`,
	label: `${GeneralInputStyle.label} text-secondaryTextColor`,
	field: `${GeneralInputStyle.field} w-full pl-[38px]`,
};

const FcSearchInputField = ({ label, name, placeholder, icon, isRequired, isDisabled, isReadonly }: FInputComponentProps) => {
	const [inputID, setInputID] = useState('');

	// Set ID & Name of <input/> element
	useEffect(() => {
		const formattedLabel = label?.toLowerCase().split(' ').join('-') ?? '_default';

		setInputID(formattedLabel.concat('-id'));
	}, [label]);

	return (
		<div className='relative'>
			<div className={TextInputStyle.icon}>{icon ? icon : <i className='fa-solid fa-font'></i>}</div>
			<input
				type='search'
				name={name}
				id={inputID}
				className={TextInputStyle.field}
				placeholder={placeholder}
				required={isRequired}
				readOnly={isReadonly}
				disabled={isDisabled}
			/>
		</div>
	);
};

export default FcSearchInputField;
