import { GeneralInputStyle } from '@/assets/styles/inputStyle';
import { FInputComponentProps } from '@/lib/definition/props';
import { useEffect, useState } from 'react';

const PhoneInputStyle: { label: string; icon: string; field: string } = {
	icon: `${GeneralInputStyle.icon} pl-3 text-secondaryTextColor`,
	label: `${GeneralInputStyle.label} text-secondaryTextColor`,
	field: `${GeneralInputStyle.field} w-1/2 pl-[38px]`,
};

const FcPhoneInputField = ({ label, placeholder, isRequired, isDisabled, isReadonly }: FInputComponentProps) => {
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
					type='tel'
					name={name}
					id={inputID}
					className={PhoneInputStyle.field}
					placeholder={placeholder ?? '0812-3456-7890'}
					required={isRequired}
					readOnly={isReadonly}
					disabled={isDisabled}
					pattern='^0\d{2,3}[\s-]?\d{3,4}[\s-]?\d{4}$'
				/>
			</div>
		</div>
	);
};

export default FcPhoneInputField;
