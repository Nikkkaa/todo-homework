import styled from '@emotion/styled';
import { Box, List } from '@material-ui/core';
import { ListItem } from '@mui/material';
export const TasksListWrapperStyled = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
`;

export const TasksListStyled = styled(List)`
  width: 100%;
`;

export const TasksListItemStyled = styled(ListItem)`
  position: relative;
  display: block;
  border: 1px solid rgba(0, 0, 0, 0.125);
`;
