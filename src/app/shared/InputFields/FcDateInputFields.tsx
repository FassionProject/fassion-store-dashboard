import { GeneralInputStyle } from '@/assets/styles/inputStyle';
import { FInputComponentProps } from '@/lib/definition/props';
import { useEffect, useState } from 'react';

const DateInputStyle = {
	icon: `${GeneralInputStyle.icon} pl-3 text-secondaryTextColor`,
	label: `${GeneralInputStyle.label} text-secondaryTextColor`,
	field: `${GeneralInputStyle.field} w-1/2 pl-[38px]`,
};

const FcDateInputFields = ({ label, placeholder, isRequired, isDisabled, isReadonly }: FInputComponentProps) => {
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
				className={DateInputStyle.label}>
				{label} {isRequired ? '*' : ''}
			</label>
			<div className='relative'>
				<div className={DateInputStyle.icon}>
					<i className='fa-solid fa-calendar-days'></i>
				</div>
				<input
					type='date'
					name={name}
					id={inputID}
					className={DateInputStyle.field}
					placeholder={placeholder}
					required={isRequired}
					readOnly={isReadonly}
					disabled={isDisabled}
				/>
			</div>
		</div>
	);
};

export default FcDateInputFields;
