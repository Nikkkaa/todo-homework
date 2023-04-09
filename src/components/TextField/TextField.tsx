import React from 'react';
import { Stack } from '@mui/system';
import { TextFieldProps } from './TextField.types';
import { StyledErrorText, StyledTextField } from './TextField.styles';

export function TextFieldStyled({ label, placeholder, inputType, value, onChange, errorText }: TextFieldProps) {
  const hasError = Boolean(errorText);
  return (
    <Stack>
      <StyledTextField
        id={label}
        label={label}
        variant="outlined"
        placeholder={placeholder}
        type={inputType}
        value={value}
        onChange={onChange}
        hasError={hasError}
        error={hasError}
      />
      {errorText && <StyledErrorText>{errorText}</StyledErrorText>}
    </Stack>
  );
}
