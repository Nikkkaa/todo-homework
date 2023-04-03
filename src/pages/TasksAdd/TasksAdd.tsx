import React from 'react';
import { useParams } from 'react-router-dom';
import { PageContainer } from 'components/index';
import { TasksAddModule } from 'modules/index';

export function TasksAdd() {
  return (
    <PageContainer>
      <h1 className="text-center">TODO LIST / TODO ADD </h1>
      <TasksAddModule />
    </PageContainer>
  );
}
