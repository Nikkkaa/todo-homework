import React, { ChangeEvent, MouseEvent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TaskAddStoreInstance } from './store/TasksAdd.store';
import { DEFAULT_ADD_FORM } from './TasksAdd.const';
import { taskAddSchema } from './TasksAdd.validation';
import { Checkbox, Loader, TextField } from 'components/index';
import { PATH_LIST } from 'constants/index';
import { TaskAddEntity } from 'domains/index';

export function TasksAddModuleProto() {
  const navigate = useNavigate();

  const { control, handleSubmit, setValue } = useForm<TaskAddEntity>({
    mode: 'all',
    defaultValues: DEFAULT_ADD_FORM,
    resolver: yupResolver(taskAddSchema),
  });

  const addTaskNameValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue('name', event.target.value);
  };

  const addTaskDescriptionValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue('info', event.target.value);
  };

  const addIsImportant = (event: ChangeEvent<HTMLInputElement>) => {
    setValue('isImportant', event.target.checked);
  };

  const addIsTask = useCallback(async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    handleSubmit(async (data) => {
      const result = await TaskAddStoreInstance.addTask(data);
      if (result) navigate(PATH_LIST.ROOT);
    })();
  }, []);

  return (
    <>
      <form>
        <Controller
          control={control}
          name="name"
          render={({ field, fieldState: { error } }) => (
            <TextField
              label="Имя задачи"
              placeholder="Напишите имя задачи"
              value={field.value}
              onChange={addTaskNameValue}
              errorText={error?.message}
            />
          )}></Controller>

        <Controller
          control={control}
          name="info"
          render={({ field, fieldState: { error } }) => (
            <TextField
              label="Описание задачи"
              placeholder="Напишите описание задачи"
              value={field.value}
              onChange={addTaskDescriptionValue}
              errorText={error?.message}
            />
          )}></Controller>

        <Controller
          control={control}
          name="isImportant"
          render={({ field }) => (
            <Checkbox label="Важная" onChange={addIsImportant} checked={field.value} />
          )}></Controller>
        <button className="btn btn-secondary d-block ml-auto w-100" onClick={addIsTask}>
          <Loader isLoading={TaskAddStoreInstance.isTasksLoading} variant="circle">
            Add task
          </Loader>
        </button>
      </form>
    </>
  );
}

export const TasksAddModule = observer(TasksAddModuleProto);
