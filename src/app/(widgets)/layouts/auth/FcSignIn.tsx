import { FeButtonStyleType } from '@/lib/enums';
import FcButton from '../../shared/FcButton';
import FcTextInputField from '../../shared/InputFields/FcTextInputField';

const FcSignIn = () => {
	return (
		<div className='w-full flex flex-col'>
			<div className='flex flex-col gap-2 mb-8'>
				<p className='text-mainTextColor text-lg font-medium'>Heelooowww</p>
				<div className='flex items-center'>
					<FcButton
						label='Buat akun di sini'
						type='link'
						classStyle={FeButtonStyleType.LINK}
						href='/signup'
					/>
					<p>atau masuk dengan e-mail ke Fassion.</p>
				</div>
			</div>

			<form>
				<div className='flex flex-col gap-4 mb-6'>
					<FcTextInputField
						label='Email atau Username'
						name='Username'
						icon={<i className='fa-solid fa-envelope'></i>}
						placeholder={'johnDoe@mail.com'}
					/>
					<div>
						<FcTextInputField
							label='Password'
							name='Username'
							icon={<i className='fa-solid fa-lock'></i>}
							placeholder={'• • • • • • •'}
						/>
						<div className='flex justify-between mt-2'>
							<FcButton
								label='Lupa password?'
								type='link'
								classStyle={FeButtonStyleType.LINK}
								href='/ouchhiforgetmypassword'
							/>
							<div className='flex items-center'>
								<input
									id='default-checkbox'
									type='checkbox'
									value=''
									className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500'
								/>
								<label
									htmlFor='default-checkbox'
									className='ms-2 text-sm font-medium text-gray-900'>
									Ingat saya
								</label>
							</div>
						</div>
					</div>
				</div>

				<FcButton
					label='Masuk'
					type='submit'
					classStyle={FeButtonStyleType.FASSION_SIGNATURE}
				/>
			</form>
		</div>
	);
};

export default FcSignIn;
