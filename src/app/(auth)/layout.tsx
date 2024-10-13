const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='w-full h-screen flex'>
			<div className='bg-red-100 hidden md:block flex-1'></div>

			<div className='flex-1 w-full h-full px-4 md:px-[5rem] py-4 flex items-center'>{children}</div>
		</div>
	);
};

export default AuthLayout;
