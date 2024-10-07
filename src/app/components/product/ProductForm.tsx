'use client';

import { FormEvent, useEffect, useState } from 'react';
import FcTextInputField from '../../shared/InputFields/FcTextInputField';
import FcButton from '../../shared/FcButton';
import { FeButtonStyleType } from '@/lib/enums';
import { ProductModel } from '@/lib/model';
import { useRouter } from 'next/navigation';
import FcTextAreaInputField from '@/app/shared/InputFields/FcTextAreaInputField';
import FcCurrencyInputField from '@/app/shared/InputFields/FcCurrencyInputField';
import FcNumberInputField from '@/app/shared/InputFields/FcNumberInputField';

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
	const router = useRouter();

	useEffect(() => {
		// setProductFormData();, ngambil data dari API
		// assign value ke semua <input/> element dari form submit
		// bindFormValues(productFormData, '#product-form-element');
	});

	const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		Array.from(((event.target as HTMLInputElement).children[1] as HTMLInputElement).children).forEach((element) => {
			const isValid: boolean = ((element as HTMLInputElement).children[1] as HTMLInputElement).reportValidity();

			if (isValid) {
				console.log('Valid');
			} else {
				console.log('Tidak Valid');
				const inputName = ((element as HTMLInputElement).children[1] as HTMLInputElement).getAttribute('name');
				console.log(inputName);
			}
		});

		// const formData = new FormData(event.target as HTMLFormElement);

		// formData.entries().forEach((data) => {
		// 	console.log(data);
		// });
	};

	return (
		<form
			onSubmit={handleFormSubmit}
			id='product-form-element'>
			<div className={`mb-4 bg-white bg-opacity-10 backdrop-blur-sm flex gap-2 sticky top-0 z-10 p-2 rounded-lg ${scrollPosition > 0 ? 'border-slate-200 border-[1px]' : ''}`}>
				<FcButton
					label='Simpan'
					classStyle={FeButtonStyleType.SUCCESS}
					type='submit'
				/>
				<FcButton
					label='Kembali'
					classStyle={FeButtonStyleType.HELPER}
					type='link'
					clickFn={() => router.back()}
				/>
			</div>

			<div className='grid gap-4 grid-cols-1 lg:grid-cols-1'>
				<FcTextInputField
					name='name'
					label='Name'
					placeholder='Judah Dasuki'
					isRequired
				/>
				<FcTextInputField
					name='storeId'
					label='Store ID'
					placeholder='1234asdf'
					isRequired
				/>
				<FcTextInputField
					name='categoryId'
					label='Category ID'
					placeholder='asdf3423'
					isRequired
				/>
				<FcTextAreaInputField
					name='description'
					label='Description'
					placeholder='Barang yang paling yahutt..'
					isRequired
				/>
				<FcCurrencyInputField
					label='Price'
					name='price'
					placeholder='1,400,000'
					isRequired
				/>
				<FcNumberInputField
					label='Stock'
					name='stock'
					placeholder='1'
					isRequired
				/>
			</div>
		</form>
	);
};

export default ProductForm;
