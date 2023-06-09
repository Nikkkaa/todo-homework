import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { TaskProps } from './Task.types';
import { EDIT, ROOT } from 'constants/index';
import './Task.css';

function TaskProto({ task, deleteTask, changeTaskDone, changeTaskImportant }: TaskProps) {
  const { name, info, isImportant, isCompleted, id } = task;

  const onButtonImportantClick = () => changeTaskImportant(id, isImportant);

  const onButtonDoneClick = () => changeTaskDone(id, isCompleted);

  const onButtonDeleteClick = () => deleteTask(id);

  return (
    <div>
      <div className="task mb-2">
        <p
          className={`task__label ${isCompleted ? 'text-decoration-line-through text-secondary' : ''} ${
            isImportant ? 'text-success fw-bold' : ''
          }`}>
          {name}
        </p>

        <div className="task__btns">
          <button
            type="button"
            className={`task__btn btn ${
              isImportant ? 'btn-success' : 'btn-outline-success'
            } btn-sm float-right btn-important`}
            disabled={isCompleted}
            onClick={onButtonImportantClick}>
            <i className="fa fa-exclamation" />
          </button>

          <button
            type="button"
            className={`task__btn btn ${isCompleted ? 'btn-danger' : 'btn-outline-danger'} btn-sm float-right`}
            onClick={onButtonDoneClick}>
            <i className="fa fa-check" />
          </button>

          <button
            type="button"
            className="task__btn btn btn-outline-danger btn-sm float-right btn-delete"
            onClick={onButtonDeleteClick}>
            <i className="fa fa-trash-o" />
          </button>

          <Link className="task__btn btn btn-outline-secondary btn-sm float-right" to={`${ROOT}${EDIT}/${id}`}>
            <i className="fa fa-pencil" />
          </Link>
        </div>
      </div>
      <p
        className={`${isCompleted ? 'text-decoration-line-through text-secondary' : ''} ${
          isImportant ? 'text-success fw-bold' : ''
        }`}>
        {info}
      </p>
    </div>
  );
}

export const Task = memo(TaskProto);
