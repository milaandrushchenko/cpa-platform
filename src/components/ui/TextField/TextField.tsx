import clsx from 'clsx';

import { type InputHTMLAttributes, forwardRef, useId } from 'react';

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

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      error,
      isRequiredMark = false,
      className,
      id,
      value,
      defaultValue,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const fieldId = id ?? generatedId;

    const hasValue =
      value !== undefined
        ? String(value).trim().length > 0
        : defaultValue !== undefined
          ? String(defaultValue).trim().length > 0
          : false;

    return (
      <div className={clsx(styles.fieldWrapper, className)}>
        <div className={clsx(styles.field, error && styles.error)}>
          <input
            id={fieldId}
            ref={ref}
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
  },
);

TextField.displayName = 'TextField';
