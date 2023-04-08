import styled from '@emotion/styled';
import { Box, Button, ButtonGroup } from '@material-ui/core';
import { IconButton } from '@mui/material';
import { TaskLabelStyledProps } from 'domains/index';

export const TaskWrapperStyled = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonGroupStyled = styled(ButtonGroup)`
  min-width: 140px;
  display: flex;
  justify-content: space-between;
`;

export const TaskLabelStyled = styled.p<TaskLabelStyledProps>`
  word-break: break-word;
  margin: 0.5em 0 0.5em 0;
  text-decoration: ${(props) => (props.isCompleted ? 'line-through' : 'none')};
  color: ${(props) => (props.isCompleted ? '#6c757d' : 'inherit')};
  color: ${(props) => (props.isImportant ? 'primary' : 'inherit')};
  font-weight: ${(props) => (props.isImportant ? 'bold' : 'normal')};
`;

export const IconButtonStyled = styled(IconButton)`
  width: 30px;
  height: 30px;
`;

export const ButtonStyled = styled(Button)`
  float: right;
`;
