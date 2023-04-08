import React, { MouseEvent } from 'react';
import { Stack } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { observer } from 'mobx-react';
import { SearchFilter } from '../SearchFilter';
import { TaskStoreInstance } from '../../store';
import { DEFAULT_SEARCH } from './SearchForm.const';
import { SearchInput, ButtonStyled } from 'components/index';
import { FiltersTypeEntity } from 'domains/index';

function SearchFormProto() {
  const { isTasksLoading, updateTask } = TaskStoreInstance;
  const { control, setValue, handleSubmit } = useForm({
    defaultValues: DEFAULT_SEARCH,
  });

  const changeHandler = (value: string) => {
    setValue('searchValue', value);
  };

  const changeFilterStatusHandler = (filterStatus: FiltersTypeEntity) => {
    setValue('filterType', filterStatus);
  };

  const resetHandler = () => {
    setValue('searchValue', '');
  };

  const submitHandler = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    handleSubmit((dataTasks) => {
      updateTask(dataTasks);
    })();
  };

  return (
    <Stack direction="row" spacing={0.8} mt={2} mb={2} width="100%">
      <Controller
        control={control}
        name="searchValue"
        render={({ field }) => (
          <SearchInput disabled={isTasksLoading} value={field.value} onChange={changeHandler} onReset={resetHandler} />
        )}
      />
      <Controller
        control={control}
        name="filterType"
        render={({ field }) => (
          <SearchFilter disabled={isTasksLoading} selectTypeTask={field.value} onChange={changeFilterStatusHandler} />
        )}
      />
      <ButtonStyled variant="contained" color="secondary" disabled={isTasksLoading} onClick={submitHandler}>
        Найти
      </ButtonStyled>
    </Stack>
  );
}

export const SearchForm = observer(SearchFormProto);
