import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const StyledTextField = styled(TextField)<{ hasError: boolean }>(
  ({ hasError }) => `
  width: 100%;
  margin-bottom: 0.5rem;
  ${hasError ? 'color: #dc3545;' : ''}
`
);
export const StyledErrorText = styled.div`
  width: 100%;
  color: #dc3545;
`;
