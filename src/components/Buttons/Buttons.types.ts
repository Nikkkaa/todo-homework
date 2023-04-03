import { MouseEvent } from 'react';

export interface ButtonsProps {
  type: 'button' | 'submit' | 'reset';
  className?: string;
  onChange?: () => void;
  onReset?: () => void;
  onClick?: (evt: MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
}
