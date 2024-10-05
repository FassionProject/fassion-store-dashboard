'use client';

import { FormEvent, useEffect, useState } from 'react';
import FcTextInputField from '../../shared/InputFields/FcTextInputField';
import FcButton from '../../shared/FcButton';
import { FeButtonStyleType } from '@/lib/enums';
import { ProductModel } from '@/lib/model';
import { useRouter } from 'next/navigation';

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

		const formData = new FormData(event.target as HTMLFormElement);
		// const productData: ProductModel = productFormData;

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
				/>
				<FcTextInputField
					name='storeId'
					label='Store ID'
					placeholder='081364555'
				/>
				<FcTextInputField
					name='description'
					label='Description'
					placeholder='description 123'
				/>
				<FcTextInputField
					name='description'
					label='Description'
					placeholder='description 123'
				/>
				<FcTextInputField
					name='description'
					label='Description'
					placeholder='description 123'
				/>
				<FcTextInputField
					name='description'
					label='Description'
					placeholder='description 123'
				/>
				<FcTextInputField
					name='description'
					label='Description'
					placeholder='description 123'
				/>
				<FcTextInputField
					name='description'
					label='Description'
					placeholder='description 123'
				/>
				<FcTextInputField
					name='description'
					label='Description'
					placeholder='description 123'
				/>
				<FcTextInputField
					name='description'
					label='Description'
					placeholder='description 123'
				/>
			</div>
		</form>
	);
};

export default ProductForm;
