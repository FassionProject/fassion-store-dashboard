'use client';

import { ScrollContext } from '@/hooks/context/ScrollContextProvider';
import { useContext } from 'react';
import FcProductForm from '../_components/FcProductForm';

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
