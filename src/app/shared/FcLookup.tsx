import React, { useState } from 'react';
import FcButton from './FcButton';
import FcModal from './FcModal';
import FcDataTable from './FcDataTable';
import { FInputComponentProps } from '@/lib/definition/props';

const FcLookup = ({ name }: FInputComponentProps) => {
	const [openModal, setOpenModal] = useState(false);
	const [inputValue, setInputValue] = useState(null);

	return (
		<>
			<FcButton
				label='Toggel Modal'
				type='lookup'
				clickFn={() => setOpenModal(true)}
			/>
			<input
				type='text'
				value={inputValue ?? '_default-value'}
				name={name}
				hidden
			/>

			<FcModal
				openModal={openModal}
				setOpenModal={setOpenModal}
				title='Hello Panda'>
				<FcDataTable />
			</FcModal>
		</>
	);
};

export default FcLookup;
