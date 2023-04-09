import React from 'react';
import { observer } from 'mobx-react';
import { Typography } from '@material-ui/core';
import { StyledBox, StyledText } from './TaskStats.styles';
import { TaskStoreInstance } from 'modules/Tasks/store/index';
import { LoaderStyled } from 'components/index';

export function TasksStatsProto() {
  const { isTasksLoading, tasksStats } = TaskStoreInstance;

  return (
    <StyledBox>
      {tasksStats ? (
        <>
          <Typography variant="body1">
            Все:
            <LoaderStyled isLoading={isTasksLoading}>
              <StyledText>{tasksStats.total}</StyledText>
            </LoaderStyled>
          </Typography>
          <Typography variant="body1">
            Важные:
            <LoaderStyled isLoading={isTasksLoading}>
              <StyledText>{tasksStats.important}</StyledText>
            </LoaderStyled>
          </Typography>
          <Typography variant="body1">
            Выполненные:
            <LoaderStyled isLoading={isTasksLoading}>
              <StyledText>{tasksStats.done}</StyledText>
            </LoaderStyled>
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
