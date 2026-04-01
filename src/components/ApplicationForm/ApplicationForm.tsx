import { useState } from 'react';

import { SelectField } from '@/components/ui/SelectField/SelectField';
import { TextField } from '@/components/ui/TextField/TextField';

import { Button } from '../ui/Button';
import styles from './ApplicationForm.module.scss';

export const ApplicationForm = () => {
  const [name, setName] = useState('');
  const [contactMethod, setContactMethod] = useState('');
  const [contact, setContact] = useState('');

  return (
    <form className={styles.form}>
      <p className={styles.note}>
        Fields with an asterisk (<span className={styles.requiredMark}>*</span>)
        are mandatory
      </p>
      <TextField
        label="Your Name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div className={styles.row}>
        <SelectField
          className={styles.contactMethod}
          label="Contact Method"
          name="contactMethod"
          value={contactMethod}
          onChange={setContactMethod}
          isRequiredMark
          options={[
            { label: 'Telegram', value: 'telegram' },
            { label: 'Email', value: 'email' },
            { label: 'Phone', value: 'phone' },
          ]}
        />

        <TextField
          className={styles.contactValue}
          label="Your Contact"
          name="contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          isRequiredMark
          required
        />
      </div>

      <Button shape="primary" type="submit" className={styles.submitBtn}>
        Submit
      </Button>
    </form>
  );
};
