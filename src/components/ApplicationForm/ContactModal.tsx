import { useState } from 'react';

import { Modal } from '../ui/Modal';
import { ApplicationForm } from './ApplicationForm';
import ContactFormSuccess from './ContactFormSuccess';
import styles from './ContactModal.module.scss';

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [successMessage, setSuccessMessage] = useState('');

  const handleClose = () => {
    onClose();
    setSuccessMessage('');
  };
  return (
    <Modal isOpen={isOpen} onClose={handleClose} className={styles.modal}>
      {successMessage.length > 0 ? (
        <ContactFormSuccess onDone={handleClose} />
      ) : (
        <ApplicationForm setSuccessMessage={setSuccessMessage} />
      )}
    </Modal>
  );
};

export default ContactModal;
