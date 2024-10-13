import inputElementStyle from '@/styles/components/FsInputFields.module.css';
import { FTextInputComponentProps } from '@/lib/definition/props';

const FcTextInputField = ({ label, name, placeholder, icon, minLength, maxLength, isRequired, isDisabled, isReadonly, validationText }: FTextInputComponentProps) => {
	return (
		<div>
			<label
				htmlFor={`${name}-input-id`}
				className={inputElementStyle['input-label']}>
				{label} {isRequired ? '*' : ''}
			</label>
			<div className='relative'>
				<div className={inputElementStyle['input-icon']}>{icon ? icon : <i className='fa-solid fa-font'></i>}</div>
				<input
					type='text'
					name={name}
					id={`${name}-input-id`}
					className={`${inputElementStyle['input-field']} ${inputElementStyle['text-input-field']}`}
					autoComplete='false'
					autoCorrect='false'
					placeholder={placeholder ?? ''}
					required={isRequired ?? false}
					readOnly={isReadonly ?? false}
					disabled={isDisabled ?? false}
					minLength={minLength}
					maxLength={maxLength}
				/>
			</div>
			<span
				id={`${name}-error`}
				style={{ display: 'none' }}
				className='block w-full text-right text-RedButton text-xs'>
				{validationText ?? 'Input is not valid!'}
			</span>
		</div>
	);
};

export default FcTextInputField;
