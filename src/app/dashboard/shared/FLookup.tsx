import { Modal } from 'flowbite-react';
import React, { useState } from 'react';
import FButton from './FButton';
import FTextInput from './FTextInput';
import FTableListData from './FTableListData';

const FLookup = () => {
	const [openModal, setOpenModal] = useState(false);

	return (
		<>
			<FButton
				label='Toggel Modal'
				type='lookup'
				clickFn={() => setOpenModal(true)}
			/>
			<FTextInput isHidden />

			<ModalBody
				openModal={openModal}
				setOpenModal={setOpenModal}
			/>
		</>
	);
};

const ModalBody = ({ openModal, setOpenModal }: { openModal: boolean; setOpenModal: React.Dispatch<React.SetStateAction<boolean>> }) => {
	return (
		<Modal
			dismissible
			show={openModal}
			size={'6xl'}
			onClose={() => setOpenModal(false)}>
			<Modal.Header>Terms of Service</Modal.Header>
			<Modal.Body>
				<FTableListData />
			</Modal.Body>
		</Modal>
	);
};

export default FLookup;
