import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import { PageContainer } from 'components/index';
import { TaskEditModule } from 'modules/index';

export function TasksEdit() {
  const { taskId } = useParams();

  return (
    <PageContainer>
      <Typography variant="h4" align="center" mb={4}>
        TODO LIST / TODO EDIT {taskId}
      </Typography>
      <TaskEditModule />
    </PageContainer>
  );
}
