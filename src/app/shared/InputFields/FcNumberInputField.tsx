import { GeneralInputStyle } from '@/assets/styles/inputStyle';
import { FNumberOrCurrencyInputComponentProps } from '@/lib/definition/props';
import { useEffect, useState } from 'react';

const NumberInputStyle: { label: string; icon: string; field: string } = {
	icon: `${GeneralInputStyle.icon} pl-3 text-secondaryTextColor`,
	label: `${GeneralInputStyle.label} text-secondaryTextColor`,
	field: `${GeneralInputStyle.field} w-1/3 pl-[38px] text-right`,
};

const FcNumberInputField = ({ label, placeholder, minValue, maxValue, isRequired, isDisabled, isReadonly }: FNumberOrCurrencyInputComponentProps) => {
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
					type='number'
					name={name}
					id={inputID}
					className={NumberInputStyle.field}
					placeholder={placeholder ?? ''}
					min={minValue}
					max={maxValue}
					required={isRequired}
					readOnly={isReadonly}
					disabled={isDisabled}
				/>
			</div>
		</div>
	);
};

export default FcNumberInputField;
