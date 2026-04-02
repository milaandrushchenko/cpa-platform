import { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import { SelectField } from '@/components/ui/SelectField/SelectField';
import { TextField } from '@/components/ui/TextField/TextField';
import { contactMethods } from '@/config/contactMethods';
import { useSubmitContactForm } from '@/hooks/useSubmitContactForm';
import { type ContactFormErrors, type ContactMethod } from '@/types/api';
import { mapZodErrors } from '@/utils/mapZodErrors';

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

type ApplicationFormProps = {
  setSuccessMessage: (val: string) => void;
};

export const ApplicationForm = ({
  setSuccessMessage,
}: ApplicationFormProps) => {
  const [formData, setFormData] =
    useState<ApplicationFormState>(INITIAL_VALUES);
  const [errors, setErrors] = useState<ContactFormErrors>({});

  const { t } = useTranslation();

  const { submit, isLoading, error: serverError } = useSubmitContactForm();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrors({});
    setSuccessMessage('');

    const validationResult = contactFormSchema.safeParse(formData);

    if (!validationResult.success) {
      const fieldErrors = validationResult.error.flatten().fieldErrors;
      setErrors(mapZodErrors<ContactFormErrors>(fieldErrors));
      return;
    }

    const result = await submit(validationResult.data);

    if (result.success) {
      setSuccessMessage(result.data.message);
      setFormData(INITIAL_VALUES);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <p className={styles.note}>
        <Trans
          i18nKey="form.collect.rule"
          components={{
            mark: <span className={styles.requiredMark} />,
          }}
        />
      </p>

      <div className={styles.submitErrorWrap}>
        {serverError && <p className={styles.submitError}>{serverError}</p>}
      </div>
      <div className={styles.formFields}>
        <TextField
          label={t('form.collect.placeholders.name')}
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
            label={t('form.collect.placeholders.contactMethod')}
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
            label={t('form.collect.placeholders.contact')}
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
          {isLoading ? t('globalCtas.submitting') : t('globalCtas.submit')}
        </Button>
      </div>
    </form>
  );
};
