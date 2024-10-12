'use client';

import { FormEvent, useEffect, useState } from 'react';
import FcButton from '../../shared/FcButton';
import { FeButtonStyleType } from '@/lib/enums';
import { ProductModel } from '@/lib/model';
import { useRouter } from 'next/navigation';
import { bindFormValues, checkFormValidation } from '@/utils';
import { getProducts } from '@/data/product';
import FcLookupInputField from '../../shared/InputFields/FcLookupInputField';
import FcModal from '../../shared/FcModal';
import Loading from '@/assets/animation/loading-animation.gif';
import Image from 'next/image';

const FcProductForm = ({ scrollPosition, idProduct }: { scrollPosition: number; idProduct: string }) => {
	const router = useRouter();
	const [productFormData, setProductFormData] = useState<ProductModel | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

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

	if (!productFormData)
		return (
			<div className='h-full flex items-center justify-center'>
				<Image
					src={Loading}
					alt='loading...'
					width={100}
				/>
			</div>
		);

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
				<FcLookupInputField
					label='Product Tag'
					name='product-tag'
					value='asdf'
					clickFn={() => setIsModalOpen(true)}
				/>
			</div>

			<FcModal
				title='Aduhhh'
				openModal={isModalOpen}
				setOpenModal={setIsModalOpen}>
				<p>helloo panda</p>
			</FcModal>
		</form>
	);
};

export default FcProductForm;
