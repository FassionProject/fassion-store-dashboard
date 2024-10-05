'use client';

import { notFoundAnimation } from '@/assets';
import { FButtonStyle } from '@/lib/enums';
import FButton from '@/shared/FButton';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const NotFound = () => {
	const router = useRouter();

	return (
		<div className='w-full h-screen flex flex-col gap-2 items-center justify-center'>
			<Image
				src={notFoundAnimation}
				alt='not-found'
				width={240}
			/>

			<FButton
				type='link'
				label='Kembali'
				classStyle={FButtonStyle.HELPER}
				clickFn={() => router.back()}
			/>
		</div>
	);
};

export default NotFound;
