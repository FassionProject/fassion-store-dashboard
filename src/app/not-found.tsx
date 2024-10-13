'use client';

import { notFoundAnimation } from '@/assets';
import { FeButtonStyleType } from '@/lib/enums';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import FcButton from './(widgets)/shared/FcButton';

const NotFound = () => {
	const router = useRouter();

	return (
		<div className='w-screen h-screen flex flex-col gap-2 items-center justify-center'>
			<Image
				src={notFoundAnimation}
				alt='not-found'
				width={240}
			/>

			<FcButton
				type='link'
				label='Kembali'
				classStyle={FeButtonStyleType.HELPER}
				clickFn={() => router.back()}
			/>
		</div>
	);
};

export default NotFound;
