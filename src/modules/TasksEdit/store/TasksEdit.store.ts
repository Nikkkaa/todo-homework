import React from 'react';
import { makeObservable, observable, action, computed } from 'mobx';
import { TaskEditEntity } from 'domains/index';
import { TasksMock } from '__mocks__/index';
import { delay } from 'helpers/index';

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

  _taskForm: TaskEditEntity = {
    name: '',
    info: '',
    isImportant: false,
    isDone: false,
  };

  set taskForm(value: TaskEditEntity) {
    this._taskForm = value;
  }

  get taskForm(): TaskEditEntity {
    return this._taskForm;
  }

  getTask = async () => {
    const changeMockID = TasksMock.findIndex((mock) => mock.id === this.taskId);

    this._isTasksLoading = true;
    await delay(2000);
    this._taskForm = TasksMock[changeMockID];

    this._isTasksLoading = false;
  };

  editTask = async (task: TaskEditEntity) => {
    const changeMockID = TasksMock.findIndex((mock) => mock.id === this.taskId);

    this._isTasksLoading = true;
    await delay(3000);

    if (this._taskId) {
      TasksMock[changeMockID] = {
        id: this._taskId,
        name: task.name,
        info: task.info,
        isImportant: task.isImportant,
        isDone: task.isDone,
      };
    }
    this._isTasksLoading = false;
    return true;
  };
}

export const TaskEditStoreInstance = new TaskEditStore();
