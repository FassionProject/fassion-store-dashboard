import { GeneralInputStyle } from '@/assets/styles/inputStyle';
import { FInputProps } from '@/lib/definition';
import { useEffect, useState } from 'react';

const NumberInputStyle: { label: string; icon: string; field: string } = {
	icon: `${GeneralInputStyle.icon} pl-3 text-textColor-SecondaryText`,
	label: `${GeneralInputStyle.label} text-textColor-SecondaryText`,
	field: `${GeneralInputStyle.field} w-1/3 pl-[38px] text-right`,
};

const FNumberInput = ({ label, placeholder, isRequired, isDisabled, isHidden, isReadonly }: FInputProps) => {
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

export default FNumberInput;
