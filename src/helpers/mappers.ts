import { FILTER_TYPES } from 'constants/SearchFilterTypes';
import { SearchFormEntity } from 'domains/index';
import { GetAllTasksQuery } from 'http/model';

export const mapToExternalParam = (params?: SearchFormEntity): GetAllTasksQuery | undefined => {
  if (!params) return undefined;

  const { searchValue, filterType } = params;
  let isDone = undefined;

  if (filterType === FILTER_TYPES.DONE) isDone = true;
  else if (filterType === FILTER_TYPES.ACTIVE) isDone = false;
};
