import { useState } from 'react';

import { SelectField } from '@/components/ui/SelectField/SelectField';
import { TextField } from '@/components/ui/TextField/TextField';
import {
  type ContactFormErrors,
  type ContactFormPayload,
  type ContactMethod,
  contactMethods,
} from '@/types/api';

import { Button } from '../ui/Button';
import styles from './ApplicationForm.module.scss';
import { applicationFormSchema } from './ApplicationForm.schema';

type ApplicationFormState = {
  name: string;
  method: ContactMethod | '';
  contact: string;
};

const INITIAL_VALUES: ApplicationFormState = {
  name: '',
  method: '',
  contact: '',
};

export const ApplicationForm = () => {
  const [formData, setFormData] =
    useState<ApplicationFormState>(INITIAL_VALUES);
  const [errors, setErrors] = useState<ContactFormErrors>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrors({});

    const validationResult = applicationFormSchema.safeParse(formData);

    if (!validationResult.success) {
      const fieldErrors = validationResult.error.flatten().fieldErrors;
      const nextErrors: ContactFormErrors = {};

      (Object.keys(fieldErrors) as Array<keyof ContactFormPayload>).forEach(
        (key) => {
          nextErrors[key] = fieldErrors[key]?.[0];
        },
      );

      setErrors(nextErrors);
      return;
    }

    console.log('valid payload', validationResult.data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p className={styles.note}>
        Fields with an asterisk (<span className={styles.requiredMark}>*</span>)
        are mandatory
      </p>

      <TextField
        label="Your Name"
        name="name"
        value={formData.name ?? ''}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, name: e.target.value }))
        }
        error={errors.name}
      />

      <div className={styles.row}>
        <SelectField
          className={styles.contactMethod}
          label="Contact Method"
          name="method"
          value={formData.method}
          onChange={(value) =>
            setFormData((prev) => ({
              ...prev,
              method: value as ContactFormPayload['method'],
            }))
          }
          isRequiredMark
          options={contactMethods.map((method) => ({
            label: method.charAt(0).toUpperCase() + method.slice(1),
            value: method,
          }))}
          error={errors.method}
        />

        <TextField
          className={styles.contactValue}
          label="Your Contact"
          name="contact"
          value={formData.contact}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, contact: e.target.value }))
          }
          isRequiredMark
          required
          error={errors.contact}
        />
      </div>

      <Button shape="primary" type="submit" className={styles.submitBtn}>
        Submit
      </Button>
    </form>
  );
};
