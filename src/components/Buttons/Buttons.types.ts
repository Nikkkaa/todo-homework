import { PropTypes } from '@material-ui/core';
import { MouseEvent } from 'react';

export interface ButtonsProps {
  type?: 'button' | 'submit' | 'reset';
  className?: string | undefined;
  variant?: 'text' | 'contained' | 'outlined' | undefined;
  color?: PropTypes.Color | undefined;
  size?: 'small' | 'medium' | 'large';
  children?: React.ReactNode;
  disabled?: boolean;
  onChange?: () => void;
  onReset?: () => void;
  onClick?: (evt: MouseEvent<HTMLButtonElement>) => void;
}
