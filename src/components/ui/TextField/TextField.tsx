import clsx from 'clsx';

import { type InputHTMLAttributes, useId } from 'react';

import styles from './TextField.module.scss';

type TextFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'placeholder'
> & {
  label: string;
  error?: string;
  isRequiredMark?: boolean;
  className?: string;
};

export const TextField = ({
  label,
  error,
  isRequiredMark = false,
  className,
  id,
  value,
  defaultValue,
  ...props
}: TextFieldProps) => {
  const generatedId = useId();
  const fieldId = id ?? generatedId;

  const isControlled = value !== undefined;

  const currentValue = isControlled ? value : defaultValue;

  const hasValue = String(currentValue ?? '').trim().length > 0;

  return (
    <div className={clsx(styles.fieldWrapper, className)}>
      <div className={clsx(styles.field, error && styles.error)}>
        <input
          id={fieldId}
          className={styles.control}
          value={value}
          defaultValue={defaultValue}
          placeholder=" "
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${fieldId}-error` : undefined}
          data-has-value={hasValue}
          {...props}
        />

        <label htmlFor={fieldId} className={styles.label}>
          {label}
          {isRequiredMark && <span className={styles.required}>*</span>}
        </label>
      </div>

      {error && (
        <span id={`${fieldId}-error`} className={styles.errorText}>
          {error}
        </span>
      )}
    </div>
  );
};
