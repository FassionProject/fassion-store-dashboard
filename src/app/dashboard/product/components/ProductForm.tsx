'use client';

import { FormEvent, useEffect } from 'react';
import FTextInput from '../../shared/FTextInput';
import FButton from '../../shared/FButton';
import { FButtonStyle } from '@/lib/enums';

// const formInputsState: { inputName: string; isValid: boolean } = { inputName: 'name-input', isValid: false };

const ProductForm = ({ scrollPosition }: { scrollPosition: number }) => {
	useEffect(() => {
		// setFormCredentials(formInputsCredential);
	}, []);

	const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData(event.target as HTMLFormElement);

		formData.entries().forEach((data) => {
			if (!data[1]) {
				alert(`Harap diisi data dari ${data[0]}`);
			}

			console.log(data);
		});
	};

	return (
		<form onSubmit={handleFormSubmit}>
			<div className={`mb-4 bg-white bg-opacity-10 backdrop-blur-sm flex gap-2 sticky top-0 z-10 p-2 rounded-lg ${scrollPosition > 0 ? 'border-slate-200 border-[1px]' : ''}`}>
				<FButton
					label='Simpan'
					classStyle={FButtonStyle.WARNING}
					type='submit'
				/>
			</div>

			<div className='grid gap-4 grid-cols-1 lg:grid-cols-1'>
				<FTextInput
					label='Name'
					placeholder='Judah Dasuki'
				/>
				<FTextInput
					label='Name'
					placeholder='Judah Dasuki'
				/>
				<FTextInput
					label='Name'
					placeholder='Judah Dasuki'
				/>
				<FTextInput
					label='Name'
					placeholder='Judah Dasuki'
				/>
				<FTextInput
					label='Name'
					placeholder='Judah Dasuki'
				/>
				<FTextInput
					label='Name'
					placeholder='Judah Dasuki'
				/>
				<FTextInput
					label='Name'
					placeholder='Judah Dasuki'
				/>
				<FTextInput
					label='Name'
					placeholder='Judah Dasuki'
				/>
				<FTextInput
					label='Name'
					placeholder='Judah Dasuki'
				/>
				<FTextInput
					label='Name'
					placeholder='Judah Dasuki'
				/>
				<FTextInput
					label='Name'
					placeholder='Judah Dasuki'
				/>
			</div>
		</form>
	);
};

export default ProductForm;
