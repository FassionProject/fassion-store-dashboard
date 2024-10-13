import { FeButtonStyleType } from '@/lib/enums';
import FcButton from '../../_shared/FcButton';
import FcTextInputField from '../../_shared/InputFields/FcTextInputField';

const FcSignUp = () => {
	return (
		<div className='w-full flex flex-col'>
			<div className='mb-8'>
				<p className='text-mainTextColor text-lg font-medium'>Selamat datang</p>
				<p className='text-secondaryTextColor text-sm font-medium mt-2'>Daftarkan akun anda secara gratis.</p>
			</div>

			<form>
				<div className='flex flex-col gap-4 mb-6'>
					<FcTextInputField
						label='Nama Lengkap'
						name='fullname'
						icon={<i className='fa-solid fa-user'></i>}
						placeholder={'John Doe'}
					/>
					<FcTextInputField
						label='Email'
						name='email'
						icon={<i className='fa-solid fa-envelope'></i>}
						placeholder={'johnDoe@mail.com'}
					/>
					<FcTextInputField
						label='Kata Sandi'
						name='password'
						icon={<i className='fa-solid fa-lock'></i>}
						placeholder={'• • • • • • •'}
					/>
					<FcTextInputField
						label='Konfirmasi Kata Sandi'
						name='confirm-password'
						icon={<i className='fa-solid fa-lock'></i>}
						placeholder={'• • • • • • •'}
					/>
				</div>

				<FcButton
					label='Daftar'
					type='submit'
					classStyle={FeButtonStyleType.FASSION_SIGNATURE}
				/>

				<div className='flex items-center mt-6'>
					<FcButton
						label='Masuk di sini'
						type='link'
						classStyle={FeButtonStyleType.LINK}
						href='/signin'
					/>
					<p>jika sudah punya akun.</p>
				</div>
			</form>
		</div>
	);
};

export default FcSignUp;
