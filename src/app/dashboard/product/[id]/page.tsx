'use client';

import FcProductForm from '@/app/(widgets)/layouts/product/FcProductForm';
import { ScrollContext } from '@/hooks/context/ScrollContextProvider';
import { useContext } from 'react';

const ProductDetailPage = ({ params }: { params: { id: string } }) => {
	const scrollPosition = useContext(ScrollContext);

	return (
		<FcProductForm
			scrollPosition={scrollPosition}
			idProduct={params.id}
		/>
	);
};

export default ProductDetailPage;
