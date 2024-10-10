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
import { bindFormValues, checkFormValidation } from '@/utils';
import { getProducts } from '@/data/product';

const ProductForm = ({ scrollPosition, idProduct }: { scrollPosition: number; idProduct: string }) => {
	const router = useRouter();
	const [productFormData, setProductFormData] = useState<ProductModel | null>(null);

	useEffect(() => {
		getProducts().forEach((product) => {
			if (product.id === idProduct) {
				setProductFormData(product as ProductModel);
			}
		});
	}, [idProduct]);

	// Effect untuk melacak perubahan pada productFormData
	useEffect(() => {
		if (productFormData) {
			bindFormValues(productFormData, '#product-form-element');
		}
	}, [productFormData]);

	const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData(event.target as HTMLFormElement);

		if (checkFormValidation(event.target as HTMLFormElement, formData)) {
			alert('Form valid');
		} else {
			alert('Form invalid');
		}
	};

	if (!productFormData) return <div>Loading..</div>;

	return (
		<form
			onSubmit={handleFormSubmit}
			id='product-form-element'
			noValidate>
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

			<div
				className='grid gap-4 grid-cols-1 lg:grid-cols-1'
				id='input-wrapper'>
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
					// isRequired
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
