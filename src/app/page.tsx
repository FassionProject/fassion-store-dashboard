'use client';

import { getProductCategories } from '@/services/product-category-service';
import Link from 'next/link';

const Login = () => {
	const redirectRoute = '/dashboard/product';

	const apiCallHandler = async () => {
		console.log('loading...');

		const products = await getProductCategories({ page: 1, pageSize: 10 });
		console.log(products);

		console.log('loaded...');
	};

	return (
		<div className='w-full h-screen bg-slate-100'>
			<button onClick={apiCallHandler}>click anjengg</button>

			<Link
				href={redirectRoute}
				className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-6'>
				Lanjut
			</Link>
		</div>
	);
};

export default Login;
