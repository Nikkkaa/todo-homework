import { action, makeObservable, observable } from 'mobx';
import { TaskAddEntity } from 'domains/index';
import { delay } from 'helpers/index';
import { TasksMock } from '__mocks__/index';

type PrivateFields = '_isTasksLoading';

class TaskAddStore {
  constructor() {
    makeObservable<this, PrivateFields>(this, {
      _isTasksLoading: observable,

      addTask: action,
    });
  }

  private _isTasksLoading = false;

  get isTasksLoading(): boolean {
    return this._isTasksLoading;
  }

  addTask = async (task: TaskAddEntity) => {
    this._isTasksLoading = true;
    await delay(1000);

    TasksMock.push({
      id: `${Date.now()}`,
      name: task.name,
      info: task.info,
      isImportant: task.isImportant,
      isDone: false,
    });
    this._isTasksLoading = false;
    return true;
  };
}
export const TaskAddStoreInstance = new TaskAddStore();
