import React from 'react';
import { ButtonsProps } from './Buttons.types';

export default function Buttons({ type, className, children, onClick, onChange, onReset }: ButtonsProps) {
  return (
    <button type={type} className={className} onClick={onClick} onChange={onChange} onReset={onReset}>
      {children}
    </button>
  );
}
