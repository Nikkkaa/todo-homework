import React from 'react';
import { Button } from '@material-ui/core';
import { ButtonsProps } from './Buttons.types';

export function ButtonStyled({
  fullWidth,
  variant,
  color,
  size,
  children,
  disabled,
  onClick,
  onChange,
  onReset,
}: ButtonsProps) {
  return (
    <Button
      disabled={disabled}
      fullWidth={fullWidth}
      variant={variant}
      color={color}
      size={size}
      onClick={onClick}
      onChange={onChange}
      onReset={onReset}>
      {children}
    </Button>
  );
}
