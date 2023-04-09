import React from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import { CheckboxProps } from './Checkbox.types';

export function CheckboxStyled({ color, label, checked, onChange, disabled }: CheckboxProps) {
  return (
    <FormControlLabel
      label={label}
      control={<Checkbox color={color} checked={checked} disabled={disabled} onChange={onChange} />}
    />
  );
}
