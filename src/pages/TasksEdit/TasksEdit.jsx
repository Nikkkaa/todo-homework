import React from 'react';
import { useParams } from 'react-router-dom';
import { PageContainer } from 'components/index';
import { TaskEditModule } from 'modules/index';

export function TasksEdit() {
  const { taskId } = useParams();

  return (
    <PageContainer>
      <h1 className="text-center">TODO LIST / TODO EDIT {taskId} </h1>
      <TaskEditModule />
    </PageContainer>
  );
}
