import React from 'react';
import { CircularProgress, CircularProgressProps } from '@material-ui/core';
import { LoaderProps } from './Loader.types';

export function Loader({ isLoading, children }: LoaderProps) {
  const circularProgressProps: CircularProgressProps = {
    size: 30,
    color: 'primary',
  };

  return isLoading ? <CircularProgress {...circularProgressProps}></CircularProgress> : <>{children}</>;
}
