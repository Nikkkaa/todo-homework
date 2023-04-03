import React from 'react';
import { observer } from 'mobx-react';
import { Task } from '../Task';
import { Loader } from 'components/index';
import { TaskStoreInstance } from 'modules/Tasks/store';
import './TasksList.css';

export function TasksListProto() {
  const { tasks, isTasksLoading, deleteTask, changeTaskDone, changeTaskImportant } = TaskStoreInstance;

  return (
    <div className="tasks-wrapper d-flex align-items-center justify-content-center">
      <Loader isLoading={isTasksLoading}>
        <ul className="list-group todo-list mb-3">
          {tasks.map((task) => (
            <li key={task.id} className="list-group-item">
              <Task
                key={task.id}
                task={task}
                changeTaskImportant={changeTaskImportant}
                changeTaskDone={changeTaskDone}
                deleteTask={deleteTask}
              />
            </li>
          ))}
        </ul>
      </Loader>
    </div>
  );
}

export const TasksList = observer(TasksListProto);
