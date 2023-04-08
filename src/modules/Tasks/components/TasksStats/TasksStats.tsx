import React from 'react';
import { observer } from 'mobx-react';
import { Typography } from '@material-ui/core';
import { StyledBox, StyledText } from './TaskStats.styles';
import { TaskStoreInstance } from 'modules/Tasks/store/index';
import { Loader } from 'components/index';

export function TasksStatsProto() {
  const { isTasksLoading, tasksStats } = TaskStoreInstance;

  return (
    <StyledBox>
      {tasksStats ? (
        <>
          <Typography variant="body1">
            Все:
            <Loader isLoading={isTasksLoading}>
              <StyledText>{tasksStats.total}</StyledText>
            </Loader>
          </Typography>
          <Typography variant="body1">
            Важные:
            <Loader isLoading={isTasksLoading}>
              <StyledText>{tasksStats.important}</StyledText>
            </Loader>
          </Typography>
          <Typography variant="body1">
            Выполненные:
            <Loader isLoading={isTasksLoading}>
              <StyledText>{tasksStats.done}</StyledText>
            </Loader>
          </Typography>
        </>
      ) : (
        <StyledBox>
          <Typography variant="body1">Статистика не доступна</Typography>
        </StyledBox>
      )}
    </StyledBox>
  );
}

export const TasksStats = observer(TasksStatsProto);
