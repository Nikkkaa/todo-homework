import React from 'react';
import { makeObservable, observable, action, computed } from 'mobx';
import { TaskAddEntity, TaskEditEntity } from 'domains/index';
import { mapToExternalTaskChange } from 'helpers/index';
import { TaskAgentInstance } from 'http/agent/index';

type PrivateFields = '_taskId' | '_taskForm' | '_isTasksLoading';

class TaskEditStore {
  constructor() {
    makeObservable<this, PrivateFields>(this, {
      _taskId: observable,
      _taskForm: observable,
      _isTasksLoading: observable,

      taskId: computed,
      taskForm: computed,
      isTasksLoading: computed,

      editTask: action,
      getTask: action,
    });
  }

  private _isTasksLoading = false;

  get isTasksLoading(): boolean {
    return this._isTasksLoading;
  }

  set isTasksLoading(value: boolean) {
    this._isTasksLoading = value;
  }

  _taskId: string | null = null;

  set taskId(value: string | null) {
    this._taskId = value;
  }
  get taskId(): string | null {
    return this._taskId;
  }

  _taskForm: TaskEditEntity | null = {
    name: '',
    info: '',
    isImportant: false,
    isDone: false,
  };

  set taskForm(value: TaskEditEntity | null) {
    this._taskForm = value;
  }

  get taskForm(): TaskEditEntity | null {
    return this._taskForm;
  }

  // Получаем таску по id
  getTask = async () => {
    this._isTasksLoading = true;
    try {
      if (!this._taskId) throw new Error();
      const result = await TaskAgentInstance.getTask(this.taskId);
      this._taskForm = mapToExternalTaskChange(result);
    } catch {
      this._taskForm = null;
    } finally {
      this._isTasksLoading = false;
    }
  };

  // изменяем таску
  editTask = async (task: TaskAddEntity): Promise<boolean> => {
    this._isTasksLoading = true;

    try {
      if (!this._taskId) throw new Error();
      await TaskAgentInstance.updateTask(this._taskId, task);

      return true;
    } catch {
      return false;
    } finally {
      this._isTasksLoading = false;
    }
  };
}

export const TaskEditStoreInstance = new TaskEditStore();
