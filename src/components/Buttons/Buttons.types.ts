import { PropTypes } from '@material-ui/core';
import { MouseEvent } from 'react';

export interface ButtonsProps {
  type?: 'button' | 'submit' | 'reset';
  onChange?: () => void;
  onReset?: () => void;
  onClick?: (evt: MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  variant?: 'text' | 'contained' | 'outlined' | undefined;
  color?: PropTypes.Color | undefined;
}
