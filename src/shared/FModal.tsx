import { Modal } from 'flowbite-react';
import FTableListData from './FTableListData';

const FModal = ({ openModal, setOpenModal }: { openModal: boolean; setOpenModal: React.Dispatch<React.SetStateAction<boolean>> }) => {
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

export default FModal;
