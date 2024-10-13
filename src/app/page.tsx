'use client';

import { getProducts } from '@/services/product-service';
import FcSignIn from './(widgets)/layouts/auth/FcSignIn';

const Login = () => {
	const redirectRoute = '/dashboard/product';

	const apiCallHandler = async () => {
		console.log('loading...');

		const products = await getProducts({ page: 1, pageSize: 10 });
		console.log(products);

		console.log('loaded...');
	};

	return (
		<div className='w-full h-screen flex'>
			<div className='bg-red-100 flex-1'></div>

			<div className='bg-slate4-400 flex-1'>
				<FcSignIn />
			</div>
		</div>
	);
};

export default Login;
