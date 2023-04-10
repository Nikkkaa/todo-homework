import React, { MouseEvent, ChangeEvent, useEffect, useCallback } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Controller, useForm } from 'react-hook-form';
import { Button, Stack } from '@mui/material';
import { TaskEditStoreInstance } from './store';
import { DEFAULT_EDIT_FORM } from './TasksEdit.const';
import { taskEditSchema } from './TasksEdit.validation';
import { ButtonStyled, CheckboxStyled, LoaderStyled, TextFieldStyled } from 'components/index';
import { PATH_LIST } from 'constants/index';
import { TaskEditEntity } from 'domains/index';

function TaskEditModuleProto() {
  const { control, handleSubmit, setValue, reset, watch } = useForm<TaskEditEntity>({
    mode: 'all',
    defaultValues: DEFAULT_EDIT_FORM,
    resolver: yupResolver(taskEditSchema),
  });

  const { taskId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    TaskEditStoreInstance.taskId = taskId ?? null;
    if (TaskEditStoreInstance.taskId) TaskEditStoreInstance.getTask();
  }, []);

  useEffect(() => {
    if (TaskEditStoreInstance.taskForm) reset(TaskEditStoreInstance.taskForm);
  }, [TaskEditStoreInstance.taskForm]);

  const changeTaskNameValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue('name', event.target.value);
  };

  const changeTaskDescriptionValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue('info', event.target.value);
  };

  const changeIsImportant = (event: ChangeEvent<HTMLInputElement>) => {
    setValue('isImportant', event.target.checked);
  };

  const changeIsDone = (event: ChangeEvent<HTMLInputElement>) => {
    setValue('isCompleted', event.target.checked);
  };

  const changeIsTask = useCallback(
    async (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      handleSubmit(async (data) => {
        const result = await TaskEditStoreInstance.editTask(data);
        result ? navigate(PATH_LIST.ROOT) : navigate(PATH_LIST.ERROR);
      })();
    },
    [handleSubmit, navigate]
  );

  const isDone = watch('isImportant');
  const isImportant = watch('isCompleted');

  return (
    <Stack spacing={1}>
      <Controller
        control={control}
        name="name"
        render={({ field, fieldState: { error } }) => (
          <TextFieldStyled
            label="Имя задачи"
            placeholder="Напишите имя задачи"
            containerClassName="text-field"
            value={field.value}
            onChange={changeTaskNameValue}
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
            containerClassName="text-field"
            value={field.value}
            onChange={changeTaskDescriptionValue}
            errorText={error?.message}
          />
        )}></Controller>

      <Controller
        control={control}
        name="isImportant"
        render={({ field }) => (
          <CheckboxStyled
            color="primary"
            label="Важная"
            onChange={changeIsImportant}
            disabled={isImportant}
            checked={field.value}
          />
        )}></Controller>

      <Controller
        control={control}
        name="isCompleted"
        render={({ field }) => (
          <CheckboxStyled
            color="primary"
            label="Выполненная"
            onChange={changeIsDone}
            disabled={isDone}
            checked={field.value}
          />
        )}></Controller>

      <ButtonStyled
        disabled={TaskEditStoreInstance.isTasksLoading}
        fullWidth={true}
        variant="contained"
        color="primary"
        onClick={changeIsTask}>
        <LoaderStyled isLoading={TaskEditStoreInstance.isTasksLoading}>Изменить задачу</LoaderStyled>
      </ButtonStyled>

      <Button fullWidth={true} component={Link} to={PATH_LIST.ROOT} variant="contained" color="info">
        Вернуться на главную
      </Button>
    </Stack>
  );
}

export const TaskEditModule = observer(TaskEditModuleProto);
