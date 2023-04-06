import React from 'react';
import { Button } from '@material-ui/core';
import { ButtonsProps } from './Buttons.types';

export function StylizedButton({ children, onClick, onChange, onReset, variant, color }: ButtonsProps) {
  return (
    <Button variant={variant} color={color} onClick={onClick} onChange={onChange} onReset={onReset}>
      {children}
    </Button>
  );
}
