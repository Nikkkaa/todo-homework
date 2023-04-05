import React from 'react';
import { Link } from 'react-router-dom';
import { PageContainer } from 'components/index';
import { PATH_LIST } from 'constants/index';
import { Tasks } from 'modules/index';

export function TasksPage() {
  return (
    <PageContainer>
      <h1 className="text-center">TODO LIST</h1>
      <Tasks />
      <Link className="btn btn-secondary d-block ml-auto" to={PATH_LIST.ADD}>
        Добавить задачу
      </Link>
    </PageContainer>
  );
}
