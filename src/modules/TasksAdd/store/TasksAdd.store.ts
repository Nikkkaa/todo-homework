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
    this._isTasksLoading = true;
    try {
      await TaskAgentInstance.createTask(task);
      return true;
    } catch {
      return false;
    } finally {
      this._isTasksLoading = false;
    }
  };
}
export const TaskAddStoreInstance = new TaskAddStore();
