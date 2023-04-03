import React, { MouseEvent, memo } from 'react';
import { FilterStatusProps } from './SearchFilter.types';
import { FILTER_CLASSES } from './SearchFilter.const';
import { FILTER_TYPES } from 'constants/index';
import { FiltersTypeEntity } from 'domains/index';

function SearchFilterProto({ onChange, selectTypeTask, disabled }: FilterStatusProps) {
  const onChangeFilterStatus = (evt: MouseEvent<HTMLDivElement> & { target: HTMLButtonElement }) => {
    if (!disabled) onChange(evt.target.textContent as FiltersTypeEntity);
  };

  return (
    <div className="btn-group" onClick={onChangeFilterStatus}>
      <button
        type="button"
        className={selectTypeTask === FILTER_TYPES.ALL ? FILTER_CLASSES.ACTIVE : FILTER_CLASSES.SECONDARY}>
        {FILTER_TYPES.ALL}
      </button>
      <button
        type="button"
        className={selectTypeTask === FILTER_TYPES.ACTIVE ? FILTER_CLASSES.ACTIVE : FILTER_CLASSES.SECONDARY}>
        {FILTER_TYPES.ACTIVE}
      </button>
      <button
        type="button"
        className={selectTypeTask === FILTER_TYPES.DONE ? FILTER_CLASSES.ACTIVE : FILTER_CLASSES.SECONDARY}>
        {FILTER_TYPES.DONE}
      </button>
      <button
        type="button"
        className={selectTypeTask === FILTER_TYPES.IMPORTANT ? FILTER_CLASSES.ACTIVE : FILTER_CLASSES.SECONDARY}>
        {FILTER_TYPES.IMPORTANT}
      </button>
    </div>
  );
}

export const SearchFilter = memo(SearchFilterProto);
