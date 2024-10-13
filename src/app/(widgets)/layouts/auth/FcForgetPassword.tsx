import { FeButtonStyleType } from '@/lib/enums';
import FcButton from '../../shared/FcButton';
import FcTextInputField from '../../shared/InputFields/FcTextInputField';

const FcForgetPassword = () => {
	return (
		<div className='w-full flex flex-col'>
			<div className='mb-8'>
				<p className='text-mainTextColor text-lg font-medium'>Forgot Pasword?</p>
				<p className='text-secondaryTextColor text-sm font-medium mt-2'>No worries, we’ll send you reset instruction.</p>
			</div>

			<form>
				<div className='mb-6'>
					<FcTextInputField
						label='Email'
						name='email'
						icon={<i className='fa-solid fa-envelope'></i>}
						placeholder={'johnDoe@mail.com'}
					/>
				</div>

				<FcButton
					label='Reset password'
					type='submit'
					classStyle={FeButtonStyleType.FASSION_SIGNATURE}
				/>

				<div className='w-full mt-6 flex justify-center'>
					<FcButton
						label='Back to sign in'
						type='link'
						classStyle={FeButtonStyleType.LINK}
						href='/signin'
					/>
				</div>
			</form>
		</div>
	);
};

export default FcForgetPassword;
