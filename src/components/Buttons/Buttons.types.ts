import { PropTypes } from '@material-ui/core';
import React, { MouseEvent } from 'react';

export interface ButtonsProps {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'text' | 'contained' | 'outlined' | undefined;
  color?: PropTypes.Color | undefined;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  onChange?: () => void;
  onReset?: () => void;
  onClick?: (evt: MouseEvent<HTMLButtonElement>) => void;
}
