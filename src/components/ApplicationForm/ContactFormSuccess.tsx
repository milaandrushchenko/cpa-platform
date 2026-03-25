import { useTranslation } from 'react-i18next';

import { Button } from '../ui/Button';
import styles from './ContactFormSuccess.module.scss';

type ContactFormSuccessProps = {
  onDone: () => void;
};

const ContactFormSuccess = ({ onDone }: ContactFormSuccessProps) => {
  const { t } = useTranslation();
  return (
    <section className={styles.success} aria-live="polite" aria-atomic="true">
      <h2 className={styles.title}>{t('form.submit.title')}</h2>

      <p className={styles.description}>{t('form.submit.description')}</p>

      <Button
        shape="primary"
        type="button"
        onClick={onDone}
        className={styles.doneBtn}
      >
        {t('globalCtas.done')}
      </Button>
    </section>
  );
};

export default ContactFormSuccess;
