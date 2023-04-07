import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const SearchPanel = styled.form`
  height: 36.5px;
`;

export const SearchInputWrapper = styled(TextField)`
  height: 36.5px;
  margin-right: 5px;
  width: auto;
  & button {
    height: 36.5px;
    width: 10px;
  }
  & div {
    height: 36.5px;
  }
`;
