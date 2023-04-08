import React, { MouseEvent, memo } from 'react';
import { ButtonGroup } from '@material-ui/core';
import { FilterStatusProps } from './SearchFilter.types';
import { FILTER_TYPES } from 'constants/index';
import { FiltersTypeEntity } from 'domains/index';
import { ButtonStyled } from 'components/index';

function SearchFilterProto({ onChange, selectTypeTask, disabled }: FilterStatusProps) {
  const onChangeFilterStatus = (event: MouseEvent<HTMLDivElement> & { target: HTMLButtonElement }) => {
    if (!disabled) onChange(event.target.textContent as FiltersTypeEntity);
  };

  return (
    <ButtonGroup onClick={onChangeFilterStatus}>
      <ButtonStyled variant="contained" color={selectTypeTask === FILTER_TYPES.ALL ? 'primary' : 'inherit'}>
        {FILTER_TYPES.ALL}
      </ButtonStyled>
      <ButtonStyled variant="contained" color={selectTypeTask === FILTER_TYPES.ACTIVE ? 'primary' : 'inherit'}>
        {FILTER_TYPES.ACTIVE}
      </ButtonStyled>
      <ButtonStyled variant="contained" color={selectTypeTask === FILTER_TYPES.DONE ? 'primary' : 'inherit'}>
        {FILTER_TYPES.DONE}
      </ButtonStyled>
      <ButtonStyled variant="contained" color={selectTypeTask === FILTER_TYPES.IMPORTANT ? 'primary' : 'inherit'}>
        {FILTER_TYPES.IMPORTANT}
      </ButtonStyled>
    </ButtonGroup>
  );
}
export const SearchFilter = memo(SearchFilterProto);
