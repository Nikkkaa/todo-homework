import { FILTER_TYPES } from 'constants/SearchFilterTypes';
import { SearchFormEntity, TaskEditEntity, TaskEntity, TasksStatsEntity } from 'domains/index';
import { GetAllTasksQuery, GetAllTasksResponse, GetTaskResponse } from 'http/model/index';

export const mapToExternalParam = (params?: SearchFormEntity): GetAllTasksQuery | undefined => {
  if (!params) return undefined;

  const { searchValue, filterType } = params;
  let isCompleted = undefined;

  if (filterType === FILTER_TYPES.DONE) isCompleted = true;
  else if (filterType === FILTER_TYPES.ACTIVE) isCompleted = false;

  return {
    name_like: searchValue,
    isImportant: filterType === FILTER_TYPES.IMPORTANT ? true : undefined,
    isCompleted,
  };
};

export const mapToExternalTaskChange = (task: GetTaskResponse): TaskEditEntity => {
  return {
    name: task.name || 'Неизвестно',
    info: task.info || 'Неизвестно',
    isImportant: task.isImportant || false,
    isDone: task.isCompleted || false,
  };
};

export const mapToExternalTasks = (tasks: GetAllTasksResponse): TaskEntity[] => {
  const internalTasks: TaskEntity[] = [];

  tasks.forEach((task) => {
    if (task.id) {
      internalTasks.push({
        id: String(task.id),
        name: task.name || 'Неизвестно',
        info: task.info || 'Неизвестно',
        isImportant: task.isImportant || false,
        isDone: task.isCompleted || false,
      });
    }
  });
  return internalTasks;
};

export const getInternalStats = (tasks: GetAllTasksResponse): TasksStatsEntity => {
  const total = tasks.length;
  const otherStats = tasks.reduce(
    (acc, task) => {
      return {
        important: task.isImportant ? acc.important + 1 : acc.important,
        done: task.isCompleted ? acc.done + 1 : acc.done,
      };
    },
    {
      important: 0,
      done: 0,
    }
  );

  return {
    total,
    ...otherStats,
  };
};
