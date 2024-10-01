import { GeneralInputStyle } from '@/assets/styles/inputStyle';
import { FInputProps } from '@/lib/definition';
import { useEffect, useState } from 'react';

const PhoneInputStyle: { label: string; icon: string; field: string } = {
	icon: `${GeneralInputStyle.icon} pl-3 text-textColor-SecondaryText`,
	label: `${GeneralInputStyle.label} text-textColor-SecondaryText`,
	field: `${GeneralInputStyle.field} w-1/2 pl-[38px]`,
};

const FPhoneInput = ({ label, placeholder, isRequired, isDisabled, isHidden, isReadonly }: FInputProps) => {
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
				className={PhoneInputStyle.label}>
				{label} {isRequired ? '*' : ''}
			</label>
			<div className='relative'>
				<div className={PhoneInputStyle.icon}>
					<i className='fa-solid fa-phone'></i>
				</div>
				<input
					name={name}
					type='text'
					id={inputID}
					className={PhoneInputStyle.field}
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

export default FPhoneInput;
