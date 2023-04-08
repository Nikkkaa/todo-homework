import { FILTER_TYPES } from 'constants/index';

export interface TaskEntity {
  name: string;
  id: string;
  info: string;
  isImportant: boolean;
  isCompleted: boolean;
}

export interface TasksStatsEntity {
  total: number;
  important: number;
  done: number;
}

export type FiltersTypeEntity = typeof FILTER_TYPES[keyof typeof FILTER_TYPES];

export interface SearchFormEntity {
  searchValue: string;
  filterType: FiltersTypeEntity;
}

export interface TaskEditEntity {
  name: string;
  info: string;
  isImportant: boolean;
  isCompleted: boolean;
}

export interface TaskAddEntity {
  name: string;
  info: string;
  isImportant: boolean;
}

export interface TaskLabelStyledProps {
  isImportant: boolean;
  isCompleted: boolean;
}
