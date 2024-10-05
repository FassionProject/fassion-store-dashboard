import FTableListData from '@/shared/FTableListData';
import { loadingAnimation } from '@/assets';
import { ProductModel } from '@/lib/model';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const getDummyData = (): ProductModel[] => {
	return [
		{
			storeId: '1',
			categoryId: '1',
			tagsId: ['1', '2'],
			name: 'Men T-Shirt Basic Black',
			description: 'High-quality cotton T-shirt in black. Perfect for everyday wear.',
			price: 150000,
			stock: 25,
		},
		{
			storeId: '1',
			categoryId: '1',
			tagsId: ['2', '3'],
			name: 'Women Casual Blouse White',
			description: 'Comfortable blouse with a casual design, made from soft fabric.',
			price: 200000,
			stock: 15,
		},
		{
			storeId: '2',
			categoryId: '2',
			tagsId: ['4'],
			name: 'Unisex Hoodie Grey',
			description: 'Warm and stylish unisex hoodie in grey, ideal for cold weather.',
			price: 350000,
			stock: 30,
		},
		{
			storeId: '2',
			categoryId: '2',
			tagsId: ['5'],
			name: 'Men Slim Fit Jeans Dark Blue',
			description: 'Dark blue slim-fit jeans made from stretchable denim for a perfect fit.',
			price: 400000,
			stock: 20,
		},
		{
			storeId: '3',
			categoryId: '3',
			tagsId: ['6', '7'],
			name: 'Women High-Waist Jeans Black',
			description: 'Fashionable high-waist black jeans, perfect for a stylish look.',
			price: 350000,
			stock: 18,
		},
		{
			storeId: '3',
			categoryId: '1',
			tagsId: ['8'],
			name: 'Men Polo Shirt Navy',
			description: 'Classic navy blue polo shirt, made from breathable fabric for maximum comfort.',
			price: 250000,
			stock: 22,
		},
		{
			storeId: '4',
			categoryId: '3',
			tagsId: ['9'],
			name: 'Women Floral Dress Pink',
			description: 'Light pink floral dress, perfect for casual outings or summer wear.',
			price: 300000,
			stock: 12,
		},
		{
			storeId: '4',
			categoryId: '4',
			tagsId: ['10'],
			name: 'Unisex Running Shoes Black',
			description: 'Durable and comfortable running shoes, suitable for all terrains.',
			price: 500000,
			stock: 40,
		},
		{
			storeId: '5',
			categoryId: '2',
			tagsId: ['5', '11'],
			name: 'Men Leather Jacket Brown',
			description: 'Stylish brown leather jacket, ideal for a rugged yet modern look.',
			price: 750000,
			stock: 10,
		},
		{
			storeId: '5',
			categoryId: '3',
			tagsId: ['12'],
			name: 'Women Cardigan Beige',
			description: 'Soft beige cardigan, perfect for layering during cooler days.',
			price: 280000,
			stock: 14,
		},
		{
			storeId: '5',
			categoryId: '3',
			tagsId: ['12'],
			name: 'Women Cardigan Beige',
			description: 'Soft beige cardigan, perfect for layering during cooler days.',
			price: 280000,
			stock: 14,
		},
		{
			storeId: '5',
			categoryId: '3',
			tagsId: ['12'],
			name: 'Women Cardigan Beige',
			description: 'Soft beige cardigan, perfect for layering during cooler days.',
			price: 280000,
			stock: 14,
		},
		{
			storeId: '5',
			categoryId: '3',
			tagsId: ['12'],
			name: 'Women Cardigan Beige',
			description: 'Soft beige cardigan, perfect for layering during cooler days.',
			price: 280000,
			stock: 14,
		},
		{
			storeId: '5',
			categoryId: '3',
			tagsId: ['12'],
			name: 'Women Cardigan Beige',
			description: 'Soft beige cardigan, perfect for layering during cooler days.',
			price: 280000,
			stock: 14,
		},
		{
			storeId: '5',
			categoryId: '3',
			tagsId: ['12'],
			name: 'Women Cardigan Beige',
			description: 'Soft beige cardigan, perfect for layering during cooler days.',
			price: 280000,
			stock: 14,
		},
		{
			storeId: '5',
			categoryId: '3',
			tagsId: ['12'],
			name: 'Women Cardigan Beige',
			description: 'Soft beige cardigan, perfect for layering during cooler days.',
			price: 280000,
			stock: 14,
		},
		{
			storeId: '5',
			categoryId: '3',
			tagsId: ['12'],
			name: 'Women Cardigan Beige',
			description: 'Soft beige cardigan, perfect for layering during cooler days.',
			price: 280000,
			stock: 14,
		},
		{
			storeId: '5',
			categoryId: '3',
			tagsId: ['12'],
			name: 'Women Cardigan Beige',
			description: 'Soft beige cardigan, perfect for layering during cooler days.',
			price: 280000,
			stock: 14,
		},
		{
			storeId: '5',
			categoryId: '3',
			tagsId: ['12'],
			name: 'Women Cardigan Beige',
			description: 'Soft beige cardigan, perfect for layering during cooler days.',
			price: 280000,
			stock: 14,
		},
		{
			storeId: '5',
			categoryId: '3',
			tagsId: ['12'],
			name: 'Women Cardigan Beige',
			description: 'Soft beige cardigan, perfect for layering during cooler days.',
			price: 280000,
			stock: 14,
		},
		{
			storeId: '5',
			categoryId: '3',
			tagsId: ['12'],
			name: 'Women Cardigan Beige',
			description: 'Soft beige cardigan, perfect for layering during cooler days.',
			price: 280000,
			stock: 14,
		},
		{
			storeId: '5',
			categoryId: '3',
			tagsId: ['12'],
			name: 'Women Cardigan Beige',
			description: 'Soft beige cardigan, perfect for layering during cooler days.',
			price: 280000,
			stock: 14,
		},
		{
			storeId: '5',
			categoryId: '3',
			tagsId: ['12'],
			name: 'Women Cardigan Beige',
			description: 'Soft beige cardigan, perfect for layering during cooler days.',
			price: 280000,
			stock: 14,
		},
		{
			storeId: '5',
			categoryId: '3',
			tagsId: ['12'],
			name: 'Women Cardigan Beige',
			description: 'Soft beige cardigan, perfect for layering during cooler days.',
			price: 280000,
			stock: 14,
		},
		{
			storeId: '5',
			categoryId: '3',
			tagsId: ['12'],
			name: 'Women Cardigan Beige',
			description: 'Soft beige cardigan, perfect for layering during cooler days.',
			price: 280000,
			stock: 14,
		},
		{
			storeId: '5',
			categoryId: '3',
			tagsId: ['12'],
			name: 'Women Cardigan Beige',
			description: 'Soft beige cardigan, perfect for layering during cooler days.',
			price: 280000,
			stock: 14,
		},
		{
			storeId: '5',
			categoryId: '3',
			tagsId: ['12'],
			name: 'Women Cardigan Beige',
			description: 'Soft beige cardigan, perfect for layering during cooler days.',
			price: 280000,
			stock: 14,
		},
		{
			storeId: '5',
			categoryId: '3',
			tagsId: ['12'],
			name: 'Women Cardigan Beige',
			description: 'Soft beige cardigan, perfect for layering during cooler days.',
			price: 280000,
			stock: 14,
		},
		{
			storeId: '5',
			categoryId: '3',
			tagsId: ['12'],
			name: 'Women Cardigan Beige',
			description: 'Soft beige cardigan, perfect for layering during cooler days.',
			price: 280000,
			stock: 14,
		},
	];
};

const ProductList = () => {
	const [listData, setListData] = useState<Array<ProductModel>>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setListData(getDummyData());
		setLoading(false);

		return () => {};
	}, []);

	return (
		<div className='w-full h-full'>
			{loading ? (
				<div className='h-full flex items-center justify-center'>
					<Image
						src={loadingAnimation}
						alt='loading...'
						width={100}
					/>
				</div>
			) : (
				<div>
					<FTableListData data={{ items: listData }} />
				</div>
			)}
		</div>
	);
};

export default ProductList;
