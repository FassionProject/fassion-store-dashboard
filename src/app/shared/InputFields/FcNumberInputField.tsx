import { GeneralInputStyle } from '@/assets/styles/inputStyle';
import { FInputComponentProps } from '@/lib/definition/props';
import { useEffect, useState } from 'react';

const NumberInputStyle: { label: string; icon: string; field: string } = {
	icon: `${GeneralInputStyle.icon} pl-3 text-secondaryTextColor`,
	label: `${GeneralInputStyle.label} text-secondaryTextColor`,
	field: `${GeneralInputStyle.field} w-1/3 pl-[38px] text-right`,
};

const FcNumberInputField = ({ label, placeholder, isRequired, isDisabled, isHidden, isReadonly }: FInputComponentProps) => {
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
				className={NumberInputStyle.label}>
				{label} {isRequired ? '*' : ''}
			</label>
			<div className='relative'>
				<div className={NumberInputStyle.icon}>
					<i className='fa-solid fa-arrow-up-9-1'></i>
				</div>
				<input
					name={name}
					type='number'
					id={inputID}
					className={NumberInputStyle.field}
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

export default FcNumberInputField;
