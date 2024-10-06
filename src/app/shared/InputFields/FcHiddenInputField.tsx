import { FInputComponentProps } from '@/lib/definition/props';

const FcHiddenInputField = ({ name }: FInputComponentProps) => {
	return (
		<input
			type='hidden'
			name={name}
		/>
	);
};

export default FcHiddenInputField;
