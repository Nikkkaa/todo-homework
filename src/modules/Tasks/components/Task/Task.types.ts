import { TaskEntity } from 'domains/index';

export type TaskProps = {
  task: TaskEntity;
  changeTaskImportant: (taskId: TaskEntity['id'], currentStatus: boolean) => void;
  changeTaskDone: (taskId: TaskEntity['id'], currentStatus: boolean) => void;
  deleteTask: (taskId: TaskEntity['id']) => void;
};
