import FcDataTable from '@/app/shared/FcDataTable';
import { loadingAnimation } from '@/assets';
import { getProducts } from '@/data/product';
import { ProductModel } from '@/lib/model';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ProductList = () => {
	const [listData, setListData] = useState<Array<ProductModel>>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setListData(getProducts());
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
					<FcDataTable
						data={listData}
						columns={[
							{ title: 'Name', property: 'name' },
							{ title: 'Harga', property: 'price' },
							{ title: 'Stok barang', property: 'stock' },
						]}
					/>
				</div>
			)}
		</div>
	);
};

export default ProductList;
