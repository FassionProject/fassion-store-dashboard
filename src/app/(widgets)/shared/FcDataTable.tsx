import { ScrollContext } from '@/hooks/context/ScrollContextProvider';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import FcButton from './FcButton';
import { FeButtonStyleType } from '@/lib/enums';
import FcSearchInputField from './InputFields/FcSearchInputField';

import dataTableStyle from 'assets/styles/components/FsDataTable.module.css';
import { FcDataTableProps } from '@/lib/definition/props';

const FcDataTable = <T extends object>({ data, columns }: FcDataTableProps<T>) => {
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
						{columns.map(({ title }, index) => (
							<th
								key={index}
								scope='col'
								className='px-6 py-3 rounded-l-md'>
								{title}
							</th>
						))}

						<th
							scope='col'
							className='px-6 py-3 rounded-r-md'>
							Action
						</th>
					</tr>
				</thead>
				<tbody>
					{data?.map((row, rowIndex) => (
						<tr key={rowIndex}>
							{columns.map(({ property }, colIndex) => (
								<td
									key={colIndex}
									className='px-6 py-4'>
									{String(row[property as keyof T])}
								</td>
							))}
							<td className='px-6 py-4'>
								<FcButton
									label='Edit'
									classStyle={FeButtonStyleType.INFO}
									type='link'
									href={`/dashboard/product/${String(row['id' as keyof T])}`}
								/>
							</td>
						</tr>
					))}
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
