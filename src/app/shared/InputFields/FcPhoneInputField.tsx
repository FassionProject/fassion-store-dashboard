import { GeneralInputStyle } from '@/assets/styles/inputStyle';
import { FInputComponentProps } from '@/lib/definition/props';
import { useEffect, useState } from 'react';

const PhoneInputStyle: { label: string; icon: string; field: string } = {
	icon: `${GeneralInputStyle.icon} pl-3 text-textColor-SecondaryText`,
	label: `${GeneralInputStyle.label} text-textColor-SecondaryText`,
	field: `${GeneralInputStyle.field} w-1/2 pl-[38px]`,
};

const FcPhoneInputField = ({ label, placeholder, isRequired, isDisabled, isHidden, isReadonly }: FInputComponentProps) => {
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

export default FcPhoneInputField;
