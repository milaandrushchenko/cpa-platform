import clsx from 'clsx';

import { type KeyboardEvent, useEffect, useId, useRef, useState } from 'react';

import styles from './SelectField.module.scss';

type Option = {
  label: string;
  value: string;
};

type SelectFieldProps = {
  label: string;
  name?: string;
  value: string;
  options: Option[];
  onChange: (value: string) => void;
  isRequiredMark?: boolean;
  error?: string;
  className?: string;
  disabled?: boolean;
};

export const SelectField = ({
  label,
  name,
  value,
  options,
  onChange,
  isRequiredMark = false,
  error,
  className,
  disabled = false,
}: SelectFieldProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const rootRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const fieldId = useId();

  const selectedOption = options.find((option) => option.value === value);
  const hasValue = Boolean(selectedOption);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
        setHighlightedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!isOpen || highlightedIndex < 0) return;

    optionRefs.current[highlightedIndex]?.scrollIntoView({
      block: 'nearest',
    });
  }, [highlightedIndex, isOpen]);

  const openMenu = () => {
    setIsOpen(true);

    const selectedIndex = options.findIndex((option) => option.value === value);
    setHighlightedIndex(selectedIndex >= 0 ? selectedIndex : 0);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setHighlightedIndex(-1);
  };

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    closeMenu();
  };

  const moveHighlight = (direction: 'next' | 'prev') => {
    if (!options.length) return;

    setHighlightedIndex((prev) => {
      if (prev === -1) {
        return direction === 'next' ? 0 : options.length - 1;
      }

      if (direction === 'next') {
        return prev === options.length - 1 ? 0 : prev + 1;
      }

      return prev === 0 ? options.length - 1 : prev - 1;
    });
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();

        if (!isOpen) {
          openMenu();
          return;
        }

        moveHighlight('next');
        break;

      case 'ArrowUp':
        e.preventDefault();

        if (!isOpen) {
          openMenu();
          return;
        }

        moveHighlight('prev');
        break;

      case 'Enter':
      case ' ':
        e.preventDefault();

        if (!isOpen) {
          openMenu();
          return;
        }

        if (highlightedIndex >= 0) {
          handleSelect(options[highlightedIndex].value);
        }
        break;

      case 'Home':
        if (isOpen) {
          e.preventDefault();
          setHighlightedIndex(0);
        }
        break;

      case 'End':
        if (isOpen) {
          e.preventDefault();
          setHighlightedIndex(options.length - 1);
        }
        break;

      default:
        break;
    }
  };

  return (
    <div
      ref={rootRef}
      className={clsx(
        styles.wrapper,
        isOpen && styles.open,
        error && styles.error,
        className,
      )}
    >
      <input type="hidden" name={name} value={value} />

      <button
        id={fieldId}
        type="button"
        className={styles.trigger}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={`${fieldId}-listbox`}
        aria-invalid={Boolean(error)}
        disabled={disabled}
        aria-describedby={error ? `${fieldId}-error` : undefined}
        onClick={() => (isOpen ? closeMenu() : openMenu())}
        onKeyDown={handleKeyDown}
      >
        <span
          className={clsx(
            styles.label,
            !isOpen && hasValue && styles.labelHidden,
          )}
        >
          {label}
          {isRequiredMark && <span className={styles.required}>*</span>}
        </span>

        {!isOpen && hasValue && selectedOption && (
          <span>{selectedOption.label}</span>
        )}

        <span className={clsx(styles.arrow, isOpen && styles.arrowOpen)} />
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          <div className={styles.divider} />

          <ul
            id={`${fieldId}-listbox`}
            className={styles.list}
            role="listbox"
            aria-labelledby={fieldId}
          >
            {options.map((option, index) => {
              const isSelected = option.value === value;
              const isHighlighted = index === highlightedIndex;

              return (
                <li
                  key={option.value}
                  role="option"
                  aria-selected={isSelected}
                  className={styles.optionItem}
                >
                  <button
                    ref={(element) => {
                      optionRefs.current[index] = element;
                    }}
                    type="button"
                    className={clsx(
                      styles.option,
                      isSelected && styles.optionSelected,
                      isHighlighted && styles.optionHighlighted,
                    )}
                    onClick={() => handleSelect(option.value)}
                    onMouseEnter={() => setHighlightedIndex(index)}
                  >
                    {option.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {error && (
        <span id={`${fieldId}-error`} className={styles.errorText}>
          {error}
        </span>
      )}
    </div>
  );
};
