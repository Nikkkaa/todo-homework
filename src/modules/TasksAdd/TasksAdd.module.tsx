import React, { ChangeEvent, MouseEvent, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Stack } from '@mui/material';
import { TaskAddStoreInstance } from './store/TasksAdd.store';
import { DEFAULT_ADD_FORM } from './TasksAdd.const';
import { taskAddSchema } from './TasksAdd.validation';
import { ButtonStyled, CheckboxStyled, LoaderStyled, TextFieldStyled } from 'components/index';
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

  const addIsTask = useCallback(
    async (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      await handleSubmit(async (data) => {
        const result = await TaskAddStoreInstance.addTask(data);
        result ? navigate(PATH_LIST.ROOT) : navigate(PATH_LIST.ERROR);
      })();
    },
    [handleSubmit, navigate]
  );

  return (
    <Stack spacing={1}>
      <Controller
        control={control}
        name="name"
        render={({ field, fieldState: { error } }) => (
          <TextFieldStyled
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
          <TextFieldStyled
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
          <CheckboxStyled color="primary" label="Важная" onChange={addIsImportant} checked={field.value} />
        )}></Controller>

      <LoaderStyled isLoading={TaskAddStoreInstance.isTasksLoading}>
        <ButtonStyled
          disabled={TaskAddStoreInstance.isTasksLoading}
          fullWidth={true}
          variant="contained"
          color="primary"
          onClick={addIsTask}>
          Добавить задачу
        </ButtonStyled>
      </LoaderStyled>

      <Button fullWidth={true} component={Link} to={PATH_LIST.ROOT} variant="contained" color="info">
        Вернуться на главную
      </Button>
    </Stack>
  );
}

export const TasksAddModule = observer(TasksAddModuleProto);
