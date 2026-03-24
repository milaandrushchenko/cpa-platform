import { useState } from 'react';

import { SelectField } from '@/components/ui/SelectField/SelectField';
import { TextField } from '@/components/ui/TextField/TextField';
import { contactMethods } from '@/config/contactMethods';
import { useSubmitContactForm } from '@/hooks/useSubmitContactForm';
import {
  type ContactFormErrors,
  type ContactFormPayload,
  type ContactMethod,
} from '@/types/api';

import { contactFormSchema } from '../../config/schemas/contactForm.schema';
import { Button } from '../ui/Button';
import styles from './ApplicationForm.module.scss';

type ApplicationFormState = {
  name?: string;
  method: ContactMethod | '';
  contact: string;
};

const INITIAL_VALUES: ApplicationFormState = {
  method: '',
  contact: '',
};

export const ApplicationForm = () => {
  const [formData, setFormData] =
    useState<ApplicationFormState>(INITIAL_VALUES);
  const [errors, setErrors] = useState<ContactFormErrors>({});

  const [successMessage, setSuccessMessage] = useState('');

  const { submit, isLoading, error: serverError } = useSubmitContactForm();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrors({});
    setSuccessMessage('');

    const validationResult = contactFormSchema.safeParse(formData);

    if (!validationResult.success) {
      const fieldErrors = validationResult.error.flatten().fieldErrors;

      setErrors({
        name: fieldErrors.name?.[0],
        method: fieldErrors.method?.[0],
        contact: fieldErrors.contact?.[0],
      });

      return;
    }

    if (validationResult.data.method === '') {
      return;
    }

    const payload: ContactFormPayload = {
      name: validationResult.data.name || undefined,
      method: validationResult.data.method,
      contact: validationResult.data.contact,
    };

    const result = await submit(payload);

    if (result.success) {
      setSuccessMessage(result.data.message);
      setFormData(INITIAL_VALUES);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <p className={styles.note}>
        Fields with an asterisk (<span className={styles.requiredMark}>*</span>)
        are mandatory
      </p>

      {serverError && <p className={styles.submitError}>{serverError}</p>}

      {successMessage && (
        <p className={styles.successMessage}>{successMessage}</p>
      )}

      <TextField
        label="Your Name"
        name="name"
        value={formData.name}
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
              method: value as ApplicationFormState['method'],
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
          error={errors.contact}
        />
      </div>

      <Button
        shape="primary"
        type="submit"
        className={styles.submitBtn}
        disabled={isLoading}
      >
        {isLoading ? 'Submitting...' : 'Submit'}
      </Button>
    </form>
  );
};
