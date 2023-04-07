import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { PageContainer } from 'components/index';
import { PATH_LIST } from 'constants/index';
import { Tasks } from 'modules/index';

export function TasksPage() {
  return (
    <PageContainer>
      <Typography variant="h4" align="center">
        TODO LIST
      </Typography>
      <Tasks />
      <Link className="btn btn-secondary d-block ml-auto" to={PATH_LIST.ADD}>
        Добавить задачу
      </Link>
    </PageContainer>
  );
}
