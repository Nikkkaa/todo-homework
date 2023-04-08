import React from 'react';
import { Button } from '@material-ui/core';
import { ButtonsProps } from './Buttons.types';

export function ButtonStyled({ variant, color, size, children, onClick, onChange, onReset }: ButtonsProps) {
  return (
    <Button variant={variant} color={color} size={size} onClick={onClick} onChange={onChange} onReset={onReset}>
      {children}
    </Button>
  );
}
