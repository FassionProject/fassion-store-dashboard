import { GeneralInputStyle } from '@/assets/styles/inputStyle';
import { FInputProps } from '@/lib/definition';
import { useEffect, useState } from 'react';

const TextInputStyle = {
	icon: `${GeneralInputStyle.icon} pl-3 text-textColor-SecondaryText`,
	label: `${GeneralInputStyle.label} text-textColor-SecondaryText`,
	field: `${GeneralInputStyle.field} w-full pl-[38px]`,
};

const FTextInput = ({ label, placeholder, icon, isRequired, isDisabled, isHidden, isReadonly }: FInputProps) => {
	const [inputID, setInputID] = useState('');
	const [name, setName] = useState('');

	useEffect(() => {
		const formattedLabel = label?.toLowerCase().split(' ').join('-') ?? '_default';

		setInputID(formattedLabel.concat('-id'));
		setName(formattedLabel.concat('-input'));
	}, [inputID, label]);

	return (
		<div hidden={isHidden}>
			<label
				htmlFor={inputID}
				className={TextInputStyle.label}>
				{label} {isRequired ? '*' : ''}
			</label>
			<div className='relative'>
				<div className={TextInputStyle.icon}>{icon ? icon : <i className='fa-solid fa-font'></i>}</div>
				<input
					type='text'
					name={name}
					id={inputID}
					className={TextInputStyle.field}
					placeholder={placeholder}
					required={isRequired}
					readOnly={isReadonly}
					hidden={isHidden}
					disabled={isDisabled}
				/>
			</div>
		</div>
	);
};

export default FTextInput;
