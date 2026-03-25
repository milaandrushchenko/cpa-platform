import { Button } from '../ui/Button';
import styles from './ContactFormSuccess.module.scss';

type ContactFormSuccessProps = {
  onDone: () => void;
};

const ContactFormSuccess = ({ onDone }: ContactFormSuccessProps) => {
  return (
    <section className={styles.success} aria-live="polite" aria-atomic="true">
      <h2 className={styles.title}>We have received your application!</h2>

      <p className={styles.description}>
        We will process your request and get in touch with you
      </p>

      <Button
        shape="primary"
        type="button"
        onClick={onDone}
        className={styles.doneBtn}
      >
        Done
      </Button>
    </section>
  );
};

export default ContactFormSuccess;
