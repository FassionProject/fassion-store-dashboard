import inputElementStyle from '@/styles/components/FsInputFields.module.css';
import { FLookupInputComponentProps } from '@/lib/definition/props';

const FcLookupInputField = ({ label, name, placeholder, icon, value, isRequired, isDisabled, validationText, clickFn }: FLookupInputComponentProps) => {
	return (
		<>
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
						className={`${inputElementStyle['input-field']} ${inputElementStyle['lookup-input-field']}`}
						value={value}
						autoComplete='false'
						autoCorrect='false'
						placeholder={placeholder ?? ''}
						required={isRequired ?? false}
						readOnly={isDisabled == true ? false : true}
						disabled={isDisabled ?? false}
						onClick={clickFn}
					/>
				</div>
				<span
					id={`${name}-error`}
					style={{ display: 'none' }}
					className='block w-full text-right text-RedButton text-xs'>
					{validationText ?? 'Input lookup is not valid!'}
				</span>
			</div>
		</>
	);
};

export default FcLookupInputField;
