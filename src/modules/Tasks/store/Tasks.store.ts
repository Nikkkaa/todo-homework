import React from 'react';
import { computed, makeObservable, observable, action } from 'mobx';
import { SearchFormEntity, TaskEntity, TasksStatsEntity } from 'domains/index';
import { getInternalStats, mapToExternalParam, mapToExternalTasks } from 'helpers/index';
import { TaskAgentInstance } from 'http/index';

type PrivateFields = '_tasks' | '_tasksStats' | '_isTasksLoading' | '_searchForm';

class TaskStore {
  constructor() {
    makeObservable<this, PrivateFields>(this, {
      _tasks: observable,
      _tasksStats: observable,
      _isTasksLoading: observable,
      _searchForm: observable,

      tasks: computed,
      isTasksLoading: computed,

      updateTask: action,
      changeTaskImportant: action,
      changeTaskDone: action,
      deleteTask: action,
    });
  }
  // геттер загрузки
  private _isTasksLoading = false;

  get isTasksLoading(): boolean {
    return this._isTasksLoading;
  }

  // геттер тасок
  private _tasks: TaskEntity[] | null = [];

  get tasks(): TaskEntity[] | null {
    return this._tasks;
  }

  // геттер статистики
  private _tasksStats: TasksStatsEntity | null = {
    total: 0,
    important: 0,
    done: 0,
  };

  get tasksStats(): TasksStatsEntity | null {
    return this._tasksStats;
  }

  private _searchForm?: SearchFormEntity = {
    searchValue: '',
    filterType: 'Все',
  };

  // Получаем все таски
  getTasks = async (searchForm?: SearchFormEntity) => {
    const externalSearchParam = mapToExternalParam(searchForm);
    const result = await TaskAgentInstance.getAllTasks(externalSearchParam);
    return {
      tasks: mapToExternalTasks(result),
      tasksStats: getInternalStats(result),
    };
  };

  // Обновляем таски
  updateTask = async (searchForm?: SearchFormEntity) => {
    this._isTasksLoading = true;
    try {
      if (searchForm) this._searchForm = searchForm;

      const { tasks, tasksStats } = await this.getTasks(this._searchForm);

      this._tasks = tasks;
      this._tasksStats = tasksStats;
    } catch {
      this._tasks = null;
      this._tasksStats = null;
    } finally {
      this._isTasksLoading = false;
    }
  };

  // Важная таска
  changeTaskImportant = async (taskId: TaskEntity['id'], currentStatus: boolean) => {
    this._isTasksLoading = true;
    try {
      await TaskAgentInstance.updateTask(taskId, {
        isImportant: !currentStatus,
      });

      const { tasks, tasksStats } = await this.getTasks(this._searchForm);

      this._tasks = tasks;
      this._tasksStats = tasksStats;
    } catch {
      this._tasks = null;
      this._tasksStats = null;
    } finally {
      this._isTasksLoading = false;
    }
  };

  // Выполненная таска
  changeTaskDone = async (taskId: TaskEntity['id'], currentStatus: boolean) => {
    this._isTasksLoading = true;
    try {
      await TaskAgentInstance.updateTask(taskId, {
        isCompleted: !currentStatus,
        isImportant: currentStatus ? undefined : false,
      });

      const { tasks, tasksStats } = await this.getTasks(this._searchForm);

      this._tasks = tasks;
      this._tasksStats = tasksStats;
    } catch {
      this._tasks = null;
      this._tasksStats = null;
    } finally {
      this._isTasksLoading = false;
    }
  };

  // Удаляем таску
  deleteTask = async (taskId: TaskEntity['id']) => {
    this._isTasksLoading = true;

    try {
      await TaskAgentInstance.deleteTask(taskId);

      const { tasks, tasksStats } = await this.getTasks(this._searchForm);

      this._tasks = tasks;
      this._tasksStats = tasksStats;
    } catch {
      this._tasks = null;
      this._tasksStats = null;
    } finally {
      this._isTasksLoading = false;
    }
  };
}

export const TaskStoreInstance = new TaskStore();
