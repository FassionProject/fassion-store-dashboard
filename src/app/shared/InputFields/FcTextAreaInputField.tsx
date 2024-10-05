import { GeneralInputStyle } from '@/assets/styles/inputStyle';
import { FInputComponentProps } from '@/lib/definition/props';
import { useEffect, useState } from 'react';

const TextAreaInputStyle: { label: string; icon: string; field: string } = {
	icon: `${GeneralInputStyle.icon} pl-3 text-textColor-SecondaryText`,
	label: `${GeneralInputStyle.label} text-textColor-SecondaryText`,
	field: `${GeneralInputStyle.field} w-full min-h-[150px] pl-[38px]`,
};

const FcTextAreaInputField = ({ label, placeholder, icon, isRequired, isDisabled, isHidden, isReadonly }: FInputComponentProps) => {
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
					placeholder={placeholder ?? ''}
					required={isRequired ?? false}
					readOnly={isReadonly ?? false}
					hidden={isHidden ?? false}
					disabled={isDisabled ?? false}></textarea>
			</div>
		</div>
	);
};

export default FcTextAreaInputField;
