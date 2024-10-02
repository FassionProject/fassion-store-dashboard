'use client';

import { FormEvent, useEffect, useState } from 'react';
import FTextInput from '../../../shared/FTextInput';
import FButton from '../../../shared/FButton';
import { FButtonStyle } from '@/lib/enums';
import { ProductModel } from '@/lib/model';

const ProductForm = ({ scrollPosition }: { scrollPosition: number }) => {
	const [productFormData, setProductFormData] = useState<ProductModel>({
		storeId: '12312313',
		categoryId: '123123123',
		tagsId: [''],
		name: 'Product Name 1',
		description: 'Product description 1',
		price: 0,
		stock: 0,
	});

	useEffect(() => {
		// setFormCredentials(formInputsCredential);
		// setProductFormData();, ngambil data dari API
		// assign value ke semua <input/> element dari form submit
		// bindFormValues(productFormData, '#product-form-element');
	});

	const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData(event.target as HTMLFormElement);
		const productData: ProductModel = productFormData;

		formData.entries().forEach((data) => {
			if (!data[1]) {
				alert(`Harap diisi data dari ${data[0]}`);
			}
		});
	};

	return (
		<form
			onSubmit={handleFormSubmit}
			id='product-form-element'>
			<div className={`mb-4 bg-white bg-opacity-10 backdrop-blur-sm flex gap-2 sticky top-0 z-10 p-2 rounded-lg ${scrollPosition > 0 ? 'border-slate-200 border-[1px]' : ''}`}>
				<FButton
					label='Simpan'
					classStyle={FButtonStyle.WARNING}
					type='submit'
				/>
			</div>

			<div className='grid gap-4 grid-cols-1 lg:grid-cols-1'>
				<FTextInput
					name='name'
					label='Name'
					placeholder='Judah Dasuki'
				/>
				<FTextInput
					name='storeId'
					label='Store ID'
					placeholder='081364555'
				/>
				<FTextInput
					name='description'
					label='Description'
					placeholder='description 123'
				/>
			</div>
		</form>
	);
};

export default ProductForm;
