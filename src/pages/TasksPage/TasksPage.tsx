import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';
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
      <Button component={Link} to={PATH_LIST.ADD} variant="contained" color="primary">
        Добавить задачу
      </Button>
    </PageContainer>
  );
}
