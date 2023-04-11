import { TaskAddEntity } from 'domains/index';

export const DEFAULT_ADD_FORM: TaskAddEntity = {
  name: '',
  info: '',
  isImportant: false,
  isCompleted: false,
};
