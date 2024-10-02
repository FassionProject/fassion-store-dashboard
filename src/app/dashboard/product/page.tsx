'use client';

import { useContext } from 'react';
import ProductForm from './components/ProductForm';
import { ScrollContext } from '../../../hooks/context/ScrollContextProvider';
// import FLookup from '../shared/FLookup';
// import FTableListData from '../../shared/FTableListData';

const ProductListPage = () => {
	const scrollPosition = useContext(ScrollContext);

	return <ProductForm scrollPosition={scrollPosition} />;
};

export default ProductListPage;
