import { TaskEditEntity } from 'domains/index';

export const DEFAULT_EDIT_FORM: TaskEditEntity = {
  name: '',
  info: '',
  isImportant: false,
  isDone: false,
};
