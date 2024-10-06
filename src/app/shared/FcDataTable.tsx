import { ScrollContext } from '@/hooks/context/ScrollContextProvider';
import { ProductModel } from '@/lib/model';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import FcButton from './FcButton';
import { FeButtonStyleType } from '@/lib/enums';
import FcSearchInputField from './InputFields/FcSearchInputField';

import dataTableStyle from 'assets/styles/components/FsDataTable.module.css';

const FcDataTable = ({ data }: { data: { items: Array<ProductModel> | null } }) => {
	const router = useRouter();
	const scrollPosition = useContext(ScrollContext);

	return (
		<div className={dataTableStyle['datatable-wrapper']}>
			<div className='sticky z-10 top-0'>
				<div className={`p-2 grid grid-cols-3 gap-4 ${scrollPosition > 0 ? 'bg-white bg-opacity-50 backdrop-blur-sm rounded-lg border-slate-200 border-[1px]' : ''}`}>
					<div className='col-start-1 flex items-center'>
						<FcButton
							type='button'
							label='Tambah'
							classStyle={FeButtonStyleType.INFO}
							clickFn={() => router.push('/dashboard/product/add')}
						/>
					</div>
					<div className='col-start-3'>
						<FcSearchInputField
							name='table-list-search'
							placeholder='Search here...'
							icon={<i className='fa-solid fa-magnifying-glass'></i>}
						/>
					</div>
				</div>
			</div>

			<table className='w-full text-sm text-left text-gray-500 rounded-4 relative'>
				<thead className={dataTableStyle['table-head']}>
					<tr>
						<th
							scope='col'
							className='px-6 py-3 rounded-l-md'>
							Product name
						</th>
						<th
							scope='col'
							className='px-6 py-3'>
							Stock
						</th>
						<th
							scope='col'
							className='px-6 py-3'>
							Price
						</th>
						<th
							scope='col'
							className='px-6 py-3 rounded-r-md'>
							Action
						</th>
					</tr>
				</thead>
				<tbody>
					{data.items == null || data.items.length == 0 ? (
						<tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
							<th
								scope='row'
								className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
								null
							</th>
							<td className='px-6 py-4'>null</td>
							<td className='px-6 py-4'>null</td>
							<td className='px-6 py-4'>null</td>
						</tr>
					) : (
						(data.items as Array<ProductModel>).map(({ name, stock, price }, index) => (
							<tr
								key={index}
								className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
								<th
									scope='row'
									className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
									{name}
								</th>
								<td className='px-6 py-4'>{stock}</td>
								<td className='px-6 py-4'>${price}</td>
								<td className='px-6 py-4'>
									<FcButton
										type='link'
										href={`/dashboard/product/${name?.split(' ').join('-')}_${index}`}
										classStyle={FeButtonStyleType.INFO}
										label='Edit'
									/>
								</td>
							</tr>
						))
					)}
				</tbody>
			</table>

			<nav
				className='fixed bottom-2 left-[270px] right-6 flex items-center flex-column flex-wrap md:flex-row justify-between p-2 bg-white bg-opacity-50 backdrop-blur-sm rounded-lg border-slate-200 border-[1px]'
				aria-label='Table navigation'>
				<span className='text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto'>
					Showing <span className='font-semibold text-gray-900'>1-10</span> of <span className='font-semibold text-gray-900'>1000</span>
				</span>
				<ul className='inline-flex -space-x-px rtl:space-x-reverse text-sm h-8'>
					<li>
						<a
							href='#'
							className='flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700'>
							<i className='fa-solid fa-chevron-left'></i>
						</a>
					</li>

					{Array.from(Array(10).keys()).map((num) => (
						<li key={num}>
							<a
								href='#'
								className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'>
								{num}
							</a>
						</li>
					))}

					<li>
						<a
							href='#'
							className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700'>
							<i className='fa-solid fa-chevron-right'></i>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default FcDataTable;
