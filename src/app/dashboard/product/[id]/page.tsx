'use client';

import ProductForm from '@/app/components/product/ProductForm';
import { ScrollContext } from '@/hooks/context/ScrollContextProvider';
import { useContext } from 'react';

const ProductDetailPage = ({ params }: { params: { id: string } }) => {
	const scrollPosition = useContext(ScrollContext);

	return (
		<ProductForm
			scrollPosition={scrollPosition}
			idProduct={params.id}
		/>
	);
};

export default ProductDetailPage;
