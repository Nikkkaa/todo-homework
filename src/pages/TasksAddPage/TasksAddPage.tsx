import React from 'react';
import { Typography } from '@mui/material';
import { PageContainer } from 'components/index';
import { TasksAddModule } from 'modules/index';

export function TasksAdd() {
  return (
    <PageContainer>
      <Typography variant="h4" align="center" mb={4}>
        TODO LIST / TODO ADD
      </Typography>
      <TasksAddModule />
    </PageContainer>
  );
}
