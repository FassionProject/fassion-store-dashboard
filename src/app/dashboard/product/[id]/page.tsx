'use client'

import { ScrollContext } from '@/hooks/context/ScrollContextProvider';
import ProductForm from '../components/ProductForm';
import { useContext } from 'react';

const ProductDetailPage = ({ params }: { params: { id: string } }) => {
	console.log(params.id);
	const scrollPosition = useContext(ScrollContext);

	return <ProductForm scrollPosition={scrollPosition} />;
};

export default ProductDetailPage;
