import { FInputComponentProps } from '@/lib/definition/props';
import { useEffect, useState } from 'react';

const fileInputStyle: { label: string; icon: string; field: string; helperText: string } = {
	label: 'block mb-2 text-sm text-primary-800',
	icon: 'absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none',
	field: 'block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none',
	helperText: 'mt-1 text-sm text-gray-500',
};

const FcFileInputField = ({ label, helperText, isRequired, isDisabled, isHidden, isReadonly, isDropzone }: FInputComponentProps) => {
	const [inputID, setInputID] = useState('');
	const [name, setName] = useState('');
	const [ariaDescribedby, setAriaDescribedby] = useState('');

	useEffect(() => {
		const formattedLabel = label?.toLowerCase().split(' ').join('-') ?? '_default';

		setInputID(formattedLabel.concat('-id'));
		setName(formattedLabel.concat('-input'));
		setAriaDescribedby(formattedLabel.concat('-aria-describedby'));
	}, [inputID, label]);

	if (isDropzone) {
		return (
			<div className='flex items-center justify-center w-full'>
				<label
					htmlFor='dropzone-file'
					className='flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50'>
					<div className='flex flex-col items-center justify-center pt-5 pb-6'>
						<svg
							className='w-8 h-8 mb-4 text-gray-500'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 20 16'>
							<path
								stroke='currentColor'
								strokeLinecap={'round'}
								strokeLinejoin={'round'}
								strokeWidth={2}
								d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
							/>
						</svg>
						<p className='mb-2 text-sm text-gray-500'>
							<span className='font-semibold'>Click to upload</span> or drag and drop
						</p>
						<p className='text-xs text-gray-500'>SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
					</div>
					<input
						id='dropzone-file'
						type='file'
						className='hidden'
					/>
				</label>
			</div>
		);
	} else {
		<div>
			<label
				className={fileInputStyle.label}
				htmlFor={`${name}-input-id`}>
				{label} {isRequired ? '*' : ''}
			</label>
			<input
				name={name}
				type='file'
				id={`${name}-input-id`}
				className={fileInputStyle.field}
				aria-describedby={`${inputID}-aria-describedby`}
				required={isRequired ?? false}
				readOnly={isReadonly ?? false}
				hidden={isHidden ?? false}
				disabled={isDisabled ?? false}
			/>
			<div
				className={fileInputStyle.helperText}
				id={ariaDescribedby}>
				{helperText}
			</div>
		</div>;
	}
};

export default FcFileInputField;
