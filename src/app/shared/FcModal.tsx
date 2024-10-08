import { Modal } from 'flowbite-react';

const FcModal = ({ openModal, setOpenModal, title, children }: { openModal: boolean; setOpenModal: React.Dispatch<React.SetStateAction<boolean>>; title: string; children: React.ReactNode }) => {
	return (
		<Modal
			dismissible
			show={openModal}
			size={'6xl'}
			onClose={() => setOpenModal(false)}>
			<Modal.Header>{title}</Modal.Header>
			<Modal.Body>{children}</Modal.Body>
		</Modal>
	);
};

export default FcModal;
