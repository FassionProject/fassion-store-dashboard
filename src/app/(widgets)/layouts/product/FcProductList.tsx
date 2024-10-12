import FcDataTable from '@/app/(widgets)/shared/FcDataTable';
import { loadingAnimation } from '@/assets';
import { getProducts } from '@/data/product';
import { ProductModel } from '@/lib/model';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const FcProductList = () => {
	const [listData, setListData] = useState<Array<ProductModel> | null>(null);

	useEffect(() => {
		setListData(getProducts());
	}, []);

	if (!listData) {
		return (
			<div className='h-full flex items-center justify-center'>
				<Image
					src={loadingAnimation}
					alt='loading...'
					width={100}
				/>
			</div>
		);
	}

	return (
		<div className='w-full h-full'>
			<FcDataTable
				data={listData}
				columns={[
					{ title: 'Name', property: 'name' },
					{ title: 'Harga', property: 'price' },
					{ title: 'Stok barang', property: 'stock' },
				]}
			/>
		</div>
	);
};

export default FcProductList;
