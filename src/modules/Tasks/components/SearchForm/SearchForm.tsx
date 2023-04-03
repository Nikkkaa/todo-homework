import React, { MouseEvent, useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { observer } from 'mobx-react';
import { SearchFilter } from '../SearchFilter';
import { TaskStoreInstance } from '../../store';
import { DEFAULT_SEARCH } from './SearchForm.const';
import { SearchInput } from 'components/index';
import { FiltersTypeEntity } from 'domains/index';
import './SearchForm.css';

function SearchFormProto() {
  const { isTasksLoading, loadTasks } = TaskStoreInstance;
  const { control, reset, setValue, handleSubmit } = useForm({
    defaultValues: DEFAULT_SEARCH,
  });

  const changeHandler = (value: string) => {
    setValue('searchValue', value);
  };

  const changeFilterStatusHandler = useCallback((filterStatus: FiltersTypeEntity) => {
    setValue('filterType', filterStatus);
  }, []);

  const resetHandler = () => {
    setValue('searchValue', '');
  };

  const submitHandler = async (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    handleSubmit(async (dataTasks) => {
      await loadTasks(dataTasks);
      // reset();
    })();
  };

  return (
    <form className="search-form d-flex justify-content-between">
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
      <button type="submit" className="btn btn-primary" disabled={isTasksLoading} onClick={submitHandler}>
        Найти
      </button>
    </form>
  );
}

export const SearchForm = observer(SearchFormProto);
