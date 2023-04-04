import React from 'react';
import { computed, makeObservable, observable, action } from 'mobx';
import { SearchFormEntity, TaskEntity, TasksStatsEntity } from 'domains/index';
import { TasksMock, TasksStatsMock } from '__mocks__/Tasks.mock';
import { delay } from 'helpers/index';

type PrivateFields = '_tasks' | '_tasksStats' | '_isTasksLoading';

class TaskStore {
  constructor() {
    makeObservable<this, PrivateFields>(this, {
      _tasks: observable,
      _tasksStats: observable,
      _isTasksLoading: observable,

      tasks: computed,
      isTasksLoading: computed,

      changeTaskDone: action,
      loadTasks: action,
      changeTaskImportant: action,
      deleteTask: action,
    });
  }
  // геттер загрузки
  private _isTasksLoading = false;

  get isTasksLoading(): boolean {
    return this._isTasksLoading;
  }

  // геттер тасок
  private _tasks: TaskEntity[] = [];

  get tasks(): TaskEntity[] {
    return this._tasks;
  }

  // геттер статистики
  private _tasksStats: TasksStatsEntity = {
    total: 0,
    important: 0,
    done: 0,
  };

  get tasksStats(): TasksStatsEntity {
    return this._tasksStats;
  }

  // Загружаем таски
  loadTasks = async (searchForm?: SearchFormEntity) => {
    this._isTasksLoading = true;
    this._tasks = TasksMock;
    this._tasksStats = TasksStatsMock;

    await delay(1500);

    this._isTasksLoading = false;
  };

  // Важная таска
  changeTaskImportant = async (taskId: TaskEntity['id'], currentStatus: boolean) => {
    this._isTasksLoading = true;

    const idTask = TasksMock.findIndex((mock) => mock.id === taskId);
    TasksMock[idTask].isImportant = !currentStatus;

    console.log('Важная: ', taskId, !currentStatus);
    await this.loadTasks();
  };

  // Выполненная таска
  changeTaskDone = async (taskId: TaskEntity['id'], currentStatus: boolean) => {
    this._isTasksLoading = true;

    const idTask = TasksMock.findIndex((mock) => mock.id === taskId);
    TasksMock[idTask].isDone = !currentStatus;

    console.log('Выполненная: ', taskId, !currentStatus);
    await this.loadTasks();
  };

  // Удаляем таску
  deleteTask = (taskId: TaskEntity['id']) => {
    this._isTasksLoading = true;

    console.log('Удаление выполнено: ', taskId);

    this.loadTasks();
  };
}

export const TaskStoreInstance = new TaskStore();
