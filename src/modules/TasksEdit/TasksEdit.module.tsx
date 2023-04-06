import React, { MouseEvent, ChangeEvent, useEffect, useCallback } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { TaskEditStoreInstance } from './store';
import { DEFAULT_EDIT_FORM } from './TasksEdit.const';
import { taskEditSchema } from './TasksEdit.validation';
import { Checkbox, Loader, TextField } from 'components/index';
import { PATH_LIST } from 'constants/index';
import { TaskEditEntity } from 'domains/index';
import './TasksEdit.css';

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
    <>
      <form className="edit-form d-flex flex-column align-items-center justify-content-center">
        <Loader isLoading={TaskEditStoreInstance.isTasksLoading} variant="circle">
          <Controller
            control={control}
            name="name"
            render={({ field, fieldState: { error } }) => (
              <TextField
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
              <TextField
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
              <Checkbox
                label="Важная"
                containerClassName="edit-checkbox"
                onChange={changeIsImportant}
                disabled={isImportant}
                checked={field.value}
              />
            )}></Controller>

          <Controller
            control={control}
            name="isCompleted"
            render={({ field }) => (
              <Checkbox
                label="Выполненная"
                containerClassName="edit-checkbox"
                onChange={changeIsDone}
                disabled={isDone}
                checked={field.value}
              />
            )}></Controller>

          <button className="btn btn-secondary d-block ml-auto w-100" type="submit" onClick={changeIsTask}>
            Изменить задачу
          </button>

          <Link to={PATH_LIST.ROOT} className="btn btn-secondary d-block ml-auto w-100 mt-3">
            Вернутся на главную
          </Link>
        </Loader>
      </form>
    </>
  );
}

export const TaskEditModule = observer(TaskEditModuleProto);
