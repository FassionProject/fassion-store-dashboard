'use client'

import ProductForm from '@/app/components/product/ProductForm';
import { ScrollContext } from '@/hooks/context/ScrollContextProvider';
import { useContext } from 'react';

const ProductDetailPage = ({ params }: { params: { id: string } }) => {
	console.log(params.id);
	const scrollPosition = useContext(ScrollContext);

	return <ProductForm scrollPosition={scrollPosition} />;
};

export default ProductDetailPage;
