import { TaskEntity, TasksStatsEntity } from 'domains/index';

export const TasksStatsMock: TasksStatsEntity = {
  total: 5,
  important: 4,
  done: 10,
};

export const TasksMock: TaskEntity[] = [
  {
    name: 'Wash',
    id: '222',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    isImportant: false,
    isCompleted: true,
  },
  {
    name: 'Clean',
    id: '666',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    isImportant: true,
    isCompleted: false,
  },
  {
    name: 'Watch',
    id: '444',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    isImportant: true,
    isCompleted: false,
  },
  {
    name: 'Make',
    id: '111',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    isImportant: false,
    isCompleted: false,
  },
];
