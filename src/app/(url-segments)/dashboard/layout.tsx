'use client';

import FcDashboardHeader from '@/app/(widgets)/layouts/dashboard/FcDashboardHeader';
import FcDashboardSidebar from '@/app/(widgets)/layouts/dashboard/FcDashboardSidebar';
import { ScrollContextProvider } from '@/hooks/context/ScrollContextProvider';
import React, { useState } from 'react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	const [scrollPosition, setScrollPosition] = useState(0);

	const scrollHandler = (e: React.UIEvent<HTMLDivElement>) => {
		const { scrollTop, scrollHeight, clientHeight } = e.target as HTMLElement;
		const position = Math.ceil((scrollTop / (scrollHeight - clientHeight)) * 100);

		setScrollPosition(position);
	};

	return (
		<div className='w-full h-screen overflow-hidden bg-white relative'>
			<FcDashboardHeader />

			<FcDashboardSidebar />

			<div className='sm:ml-64 mt-[72px] absolute top-0 left-0 right-0 bottom-0'>
				<div
					className='w-full h-full sm:p-2 md:p-4 relative overflow-x-hidden overflow-y-scroll'
					onScroll={scrollHandler}>
					<ScrollContextProvider scrollPosition={scrollPosition}>{children}</ScrollContextProvider>
				</div>
			</div>
		</div>
	);
};

export default DashboardLayout;
