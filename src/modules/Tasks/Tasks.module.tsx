import { useEffect } from 'react';
import { observer } from 'mobx-react';
import { TasksStats, TasksList, SearchForm } from './components';
import { TaskStoreInstance } from './store';

function TasksModuleProto() {
  useEffect(() => {
    TaskStoreInstance.loadTasks();
  }, []);

  return (
    <>
      <SearchForm />
      <TasksStats />
      <TasksList />
    </>
  );
}

export const Tasks = observer(TasksModuleProto);
