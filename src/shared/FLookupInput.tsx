import React, { useState } from 'react';
import FButton from './FButton';
import FModal from './FModal';

const FLookupInput = () => {
	const [openModal, setOpenModal] = useState(false);

	return (
		<>
			<FButton
				label='Toggel Modal'
				type='lookup'
				clickFn={() => setOpenModal(true)}
			/>
			<input
				type='text'
				value={''}
				hidden
			/>

			<FModal
				openModal={openModal}
				setOpenModal={setOpenModal}
			/>
		</>
	);
};

export default FLookupInput;
