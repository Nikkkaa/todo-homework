import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const SearchPanelStyled = styled.form`
  height: 36.5px;
  width: 100%;
  min-width: 25%;
`;

export const SearchInputWrapperStyled = styled(TextField)`
  height: 36.5px;
  margin-right: 5px;
  width: 100%;
  & div {
    height: 36.5px;
  }
  & input {
    padding: 6px 8px;
  }
  & button {
    height: 36.5px;
    width: 10px;
  }
`;
