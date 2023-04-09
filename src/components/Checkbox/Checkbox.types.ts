import { ChangeEventHandler } from 'react';

export interface CheckboxProps {
  color?: 'primary' | 'secondary' | 'default' | undefined;
  label: string;
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
}
