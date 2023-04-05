import { action, makeObservable, observable } from 'mobx';
import { TaskAddEntity } from 'domains/index';
import { TaskAgentInstance } from 'http/agent/index';

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
    try {
      await TaskAgentInstance.createTask(task);

      return true;
    } catch {
      return false;
    }
  };
}
export const TaskAddStoreInstance = new TaskAddStore();
