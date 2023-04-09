import React from 'react';
import { observer } from 'mobx-react';
import { Typography } from '@mui/material';
import { Task } from '../Task';
import { TasksListItemStyled, TasksListStyled, TasksListWrapperStyled } from './TaskList.styles';
import { LoaderStyled } from 'components/index';
import { TaskStoreInstance } from 'modules/Tasks/store/index';

export function TasksListProto() {
  const { tasks, isTasksLoading, deleteTask, changeTaskDone, changeTaskImportant } = TaskStoreInstance;

  return (
    <TasksListWrapperStyled>
      <LoaderStyled isLoading={isTasksLoading}>
        {tasks?.length ? (
          <TasksListStyled>
            {tasks.map((task) => (
              <TasksListItemStyled key={task.id}>
                <Task
                  key={task.id}
                  task={task}
                  changeTaskImportant={changeTaskImportant}
                  changeTaskDone={changeTaskDone}
                  deleteTask={deleteTask}
                />
              </TasksListItemStyled>
            ))}
          </TasksListStyled>
        ) : (
          <Typography variant="h5">Задачи не найдены</Typography>
        )}
      </LoaderStyled>
    </TasksListWrapperStyled>
  );
}

export const TasksList = observer(TasksListProto);
