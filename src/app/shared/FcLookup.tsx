import React, { useState } from 'react';
import FcButton from './FcButton';
import FcModal from './FcModal';

const FcLookup = () => {
	const [openModal, setOpenModal] = useState(false);

	return (
		<>
			<FcButton
				label='Toggel Modal'
				type='lookup'
				clickFn={() => setOpenModal(true)}
			/>
			<input
				type='text'
				value={''}
				hidden
			/>

			<FcModal
				openModal={openModal}
				setOpenModal={setOpenModal}
			/>
		</>
	);
};

export default FcLookup;
