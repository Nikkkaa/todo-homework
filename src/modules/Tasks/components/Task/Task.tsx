import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CheckIcon from '@mui/icons-material/Check';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { TaskProps } from './Task.types';
import { ButtonStyled, StackStyled, TaskLabelStyled, TaskWrapperStyled } from './Task.styles';
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

        <StackStyled textAlign="left" direction="row" spacing={0.5}>
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

          <Link to={`${ROOT}${EDIT}/${id}`}>
            <ButtonStyled variant="outlined" size="small" color="primary">
              <EditIcon color="primary" />
            </ButtonStyled>
          </Link>
        </StackStyled>
      </TaskWrapperStyled>

      <TaskLabelStyled isImportant={isImportant} isCompleted={isCompleted}>
        {info}
      </TaskLabelStyled>
    </>
  );
}

export const Task = memo(TaskProto);
