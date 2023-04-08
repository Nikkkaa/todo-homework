import styled from '@emotion/styled';
import { Box, Typography } from '@material-ui/core';

export const StyledBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
`;

export const StyledText = styled(Typography)`
  display: inline-block;
  width: 24px;
  height: 24px;
  background-color: #6c757d;
  color: #fff;
  border-radius: 4px;
  margin: 4px;
  text-align: center;
`;
