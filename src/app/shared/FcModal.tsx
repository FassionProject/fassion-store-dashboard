import { Modal } from 'flowbite-react';
import FcDataTable from './FcDataTable';

const FcModal = ({ openModal, setOpenModal }: { openModal: boolean; setOpenModal: React.Dispatch<React.SetStateAction<boolean>> }) => {
	return (
		<Modal
			dismissible
			show={openModal}
			size={'6xl'}
			onClose={() => setOpenModal(false)}>
			<Modal.Header>Terms of Service</Modal.Header>
			<Modal.Body>
				<FcDataTable />
			</Modal.Body>
		</Modal>
	);
};

export default FcModal;
