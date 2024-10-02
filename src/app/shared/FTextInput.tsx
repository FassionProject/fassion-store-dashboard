import { GeneralInputStyle } from '@/assets/styles/inputStyle';
import { FInputComponentProps } from '@/lib/definition/props';
import { useEffect, useState } from 'react';

const TextInputStyle = {
	icon: `${GeneralInputStyle.icon} pl-3 text-textColor-SecondaryText`,
	label: `${GeneralInputStyle.label} text-textColor-SecondaryText`,
	field: `${GeneralInputStyle.field} w-full pl-[38px]`,
};

const FTextInput = ({ label, name, placeholder, icon, isRequired, isDisabled, isHidden, isReadonly }: FInputComponentProps) => {
	const [inputID, setInputID] = useState('');

	// Set ID & Name of <input/> element
	useEffect(() => {
		const formattedLabel = label?.toLowerCase().split(' ').join('-') ?? '_default';

		setInputID(formattedLabel.concat('-id'));
	}, [label]);

	return (
		// <div hidden={isHidden}>
		<div>
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

export default FTextInput;
