import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CheckIcon from '@mui/icons-material/Check';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { TaskProps } from './Task.types';
import { ButtonGroupStyled, ButtonStyled, TaskLabelStyled, TaskWrapperStyled } from './Task.styled';
import { EDIT, ROOT } from 'constants/index';

function TaskProto({ task, deleteTask, changeTaskDone, changeTaskImportant }: TaskProps) {
  const { name, info, isImportant, isCompleted, id } = task;

  const onButtonImportantClick = () => changeTaskImportant(id, isImportant);

  const onButtonDoneClick = () => changeTaskDone(id, isCompleted);

  const onButtonDeleteClick = () => deleteTask(id);

  return (
    <>
      <TaskWrapperStyled>
        <TaskLabelStyled isImportant={isImportant} isCompleted={isCompleted}>
          {name}
        </TaskLabelStyled>

        <ButtonGroupStyled>
          <ButtonStyled
            variant={isImportant ? 'contained' : 'outlined'}
            color="primary"
            size="small"
            disabled={isCompleted}
            onClick={onButtonImportantClick}>
            <PriorityHighIcon />
          </ButtonStyled>

          <ButtonStyled
            variant={isCompleted ? 'contained' : 'outlined'}
            color="secondary"
            size="small"
            onClick={onButtonDoneClick}>
            <CheckIcon />
          </ButtonStyled>

          <ButtonStyled variant="outlined" size="small" color="secondary" onClick={onButtonDeleteClick}>
            <DeleteForeverIcon />
          </ButtonStyled>

          <ButtonStyled variant="outlined" size="small" color="primary">
            <Link to={`${ROOT}${EDIT}/${id}`}>
              <EditIcon color="primary" />
            </Link>
          </ButtonStyled>
        </ButtonGroupStyled>
      </TaskWrapperStyled>

      <TaskLabelStyled isImportant={isImportant} isCompleted={isCompleted}>
        {info}
      </TaskLabelStyled>
    </>
  );
}

export const Task = memo(TaskProto);
