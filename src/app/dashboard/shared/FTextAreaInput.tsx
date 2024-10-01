import { GeneralInputStyle } from '@/assets/styles/inputStyle';
import { FInputProps } from '@/lib/definition';
import { useEffect, useState } from 'react';

const TextAreaInputStyle: { label: string; icon: string; field: string } = {
	icon: `${GeneralInputStyle.icon} pl-3 text-textColor-SecondaryText`,
	label: `${GeneralInputStyle.label} text-textColor-SecondaryText`,
	field: `${GeneralInputStyle.field} w-full min-h-[150px] pl-[38px]`,
};

const FTextAreaInput = ({ label, placeholder, icon, isRequired, isDisabled, isHidden, isReadonly }: FInputProps) => {
	const [inputID, setInputID] = useState('');
	const [name, setName] = useState('');

	useEffect(() => {
		const formattedLabel = label.toLowerCase().split(' ').join('-');

		setInputID(formattedLabel.concat('-id'));
		setName(formattedLabel.concat('-input'));
	}, [inputID, label]);

	return (
		<div>
			<label
				htmlFor={inputID}
				className={TextAreaInputStyle.label}>
				{label} {isRequired ? '*' : ''}
			</label>
			<div className='relative'>
				<div className={TextAreaInputStyle.icon}>{icon ? icon : <i className='fa-solid fa-font'></i>}</div>
				<textarea
					name={name}
					id={inputID}
					className={TextAreaInputStyle.field}
					placeholder={placeholder}
					required={isRequired}
					readOnly={isReadonly}
					hidden={isHidden}
					disabled={isDisabled}></textarea>
			</div>
		</div>
	);
};

export default FTextAreaInput;
