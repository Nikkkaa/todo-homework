import React, { MouseEvent, memo } from 'react';
import { ButtonGroup } from '@material-ui/core';
import { FilterStatusProps } from './SearchFilter.types';
import { FILTER_TYPES } from 'constants/index';
import { FiltersTypeEntity } from 'domains/index';
import { StylizedButton } from 'components/Buttons';

function SearchFilterProto({ onChange, selectTypeTask, disabled }: FilterStatusProps) {
  const onChangeFilterStatus = (event: MouseEvent<HTMLDivElement> & { target: HTMLButtonElement }) => {
    if (!disabled) onChange(event.target.textContent as FiltersTypeEntity);
  };

  return (
    <ButtonGroup onClick={onChangeFilterStatus}>
      <StylizedButton variant="contained" color={selectTypeTask === FILTER_TYPES.ALL ? 'primary' : 'inherit'}>
        {FILTER_TYPES.ALL}
      </StylizedButton>
      <StylizedButton variant="contained" color={selectTypeTask === FILTER_TYPES.ACTIVE ? 'primary' : 'inherit'}>
        {FILTER_TYPES.ACTIVE}
      </StylizedButton>
      <StylizedButton variant="contained" color={selectTypeTask === FILTER_TYPES.DONE ? 'primary' : 'inherit'}>
        {FILTER_TYPES.DONE}
      </StylizedButton>
      <StylizedButton variant="contained" color={selectTypeTask === FILTER_TYPES.IMPORTANT ? 'primary' : 'inherit'}>
        {FILTER_TYPES.IMPORTANT}
      </StylizedButton>
    </ButtonGroup>
  );
}
export const SearchFilter = memo(SearchFilterProto);
