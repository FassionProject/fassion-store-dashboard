
import { FButtonComponentProps } from '@/lib/definition/props';
import { FButtonStyle } from '@/lib/enums';

const FButton = ({ classStyle, label, type, clickFn }: FButtonComponentProps) => {
	const getButtonStyle = (style: FButtonStyle): string => {
		switch (style) {
			case FButtonStyle.INFO:
				return 'text-white bg-BlueButton hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none';
			case FButtonStyle.WARNING:
				return 'focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5';
			case FButtonStyle.SUCCESS:
				return 'focus:outline-none text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5';
			case FButtonStyle.DANGER:
				return 'focus:outline-none text-white bg-RedButton hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5';
			case FButtonStyle.HELPER:
				return 'text-textColor-BlackText bg-white border border-primary-100 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5';
			default:
				return '';
		}
	};

	return type == 'lookup' ? (
		<button
			type='button'
			className='text-textColor-BlackText bg-white border border-primary-100 hover:bg-gray-50 font-medium rounded-lg text-sm px-4 py-3 flex gap-4 items-center w-full'
			onClick={clickFn}>
			<i className='fa-solid fa-pen-to-square text-textColor-SecondaryText'></i>
			<p>{label}</p>
		</button>
	) : (
		<button
			type={type}
			className={getButtonStyle(classStyle ?? FButtonStyle.INFO)}
			onClick={clickFn}>
			{label}
		</button>
	);
};

export default FButton;
