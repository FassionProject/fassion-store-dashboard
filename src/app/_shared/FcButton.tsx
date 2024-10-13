import { FButtonComponentProps } from '@/lib/definition/props';
import { FeButtonStyleType } from '@/lib/enums';
import Link from 'next/link';

const FcButton = ({ classStyle, label, type, href, clickFn }: FButtonComponentProps) => {
	const getButtonStyle = (style: FeButtonStyleType): string => {
		switch (style) {
			case FeButtonStyleType.INFO:
				return 'text-white bg-BlueButton hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none';
			case FeButtonStyleType.WARNING:
				return 'focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5';
			case FeButtonStyleType.SUCCESS:
				return 'focus:outline-none text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5';
			case FeButtonStyleType.DANGER:
				return 'focus:outline-none text-white bg-RedButton hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5';
			case FeButtonStyleType.HELPER:
				return 'text-mainTextColor bg-white border border-primary-100 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5';
			case FeButtonStyleType.LINK:
				return 'text-BlueButton bg-white hover:bg-gray-50 hover:font-semibold hover:underline font-medium rounded-lg text-sm pr-2';
			case FeButtonStyleType.FASSION_SIGNATURE:
				return 'w-full text-white bg-secondary-600 hover:bg-secondary-700 focus:ring-4 focus:ring-secondary-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none';
			default:
				return 'text-mainTextColor bg-white hover:font-semibold hover:underline focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-4';
		}
	};

	switch (type) {
		case 'lookup':
			return (
				<button
					type='button'
					className='text-mainTextColor bg-white border border-primary-100 hover:bg-gray-50 font-medium rounded-lg text-sm px-4 py-3 flex gap-4 items-center w-full'
					onClick={clickFn}>
					<i className='fa-solid fa-pen-to-square text-secondaryTextColor'></i>
					<p>{label}</p>
				</button>
			);

		case 'link':
			return clickFn == undefined || clickFn == null ? (
				<Link
					href={`${href}`}
					className={getButtonStyle(classStyle ?? FeButtonStyleType.INFO)}>
					{label}
				</Link>
			) : (
				<button
					type='button'
					className={getButtonStyle(classStyle ?? FeButtonStyleType.INFO)}
					onClick={clickFn}>
					{label}
				</button>
			);

		default:
			return (
				<button
					type={type}
					className={getButtonStyle(classStyle ?? FeButtonStyleType.INFO)}
					onClick={clickFn}>
					{label}
				</button>
			);
	}
};

export default FcButton;
