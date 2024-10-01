import { Table } from 'flowbite-react';
import FTextInput from './FTextInput';

type getDummyDataType = () => {
	productName: string;
	color: string;
	category: string;
	price: number;
}[];

const getDummyData: getDummyDataType = () => {
	return [
		{
			productName: 'Apple MacBook Pro 17"',
			color: 'Sliver',
			category: 'Laptop',
			price: 2999,
		},
		{
			productName: 'Microsoft Surface Pro',
			color: 'White',
			category: 'Laptop PC',
			price: 1999,
		},
		{
			productName: 'Magic Mouse 2',
			color: 'Black',
			category: 'Accessories',
			price: 99,
		},
		{
			productName: 'Magic Mouse 2',
			color: 'Black',
			category: 'Accessories',
			price: 99,
		},
		{
			productName: 'Magic Mouse 2',
			color: 'Black',
			category: 'Accessories',
			price: 99,
		},
		{
			productName: 'Magic Mouse 2',
			color: 'Black',
			category: 'Accessories',
			price: 99,
		},
		{
			productName: 'Magic Mouse 2',
			color: 'Black',
			category: 'Accessories',
			price: 99,
		},
	];
};
const FTableListData = () => {
	return (
		<div className='flex flex-col gap-4 relative'>
			<div className='grid grid-cols-3 gap-2 sticky z-10 top-0'>
				<div className='col-start-3'>
					<FTextInput
						placeholder='Search here...'
						icon={<i className='fa-solid fa-magnifying-glass'></i>}
					/>
				</div>
			</div>

			<Table>
				<Table.Head>
					<Table.HeadCell>Product name</Table.HeadCell>
					<Table.HeadCell>Color</Table.HeadCell>
					<Table.HeadCell>Category</Table.HeadCell>
					<Table.HeadCell>Price</Table.HeadCell>
					<Table.HeadCell>
						<span className='sr-only'>Edit</span>
					</Table.HeadCell>
				</Table.Head>
				<Table.Body className='divide-y'>
					{getDummyData().map(({ productName, category, color, price }, index) => (
						<Table.Row
							key={index}
							className='bg-white dark:border-gray-700 dark:bg-gray-800'>
							<Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>{productName}</Table.Cell>
							<Table.Cell>{color}</Table.Cell>
							<Table.Cell>{category}</Table.Cell>
							<Table.Cell>${price}</Table.Cell>
							<Table.Cell>
								<a
									href='#'
									className='font-medium text-cyan-600 hover:underline dark:text-cyan-500'>
									Edit
								</a>
							</Table.Cell>
						</Table.Row>
					))}
				</Table.Body>
			</Table>
			<nav
				className='flex items-center flex-column flex-wrap md:flex-row justify-between pt-4'
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

export default FTableListData;
