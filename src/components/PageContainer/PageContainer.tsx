import React from 'react';
import { PageContainerProps } from './PageContainer.types';
import { PageContainerStyled } from './PageContainer.styled';

export function PageContainer({ children }: PageContainerProps) {
  return <PageContainerStyled>{children}</PageContainerStyled>;
}
