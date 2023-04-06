import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PATH_LIST } from 'constants/index';
import { TasksPage, TasksEdit, TasksAdd, TasksError } from 'pages/index';

export function Router() {
  return (
    <Routes>
      <Route path={PATH_LIST.ROOT} element={<TasksPage />} />
      <Route path={PATH_LIST.EDIT} element={<TasksEdit />} />
      <Route path={PATH_LIST.ADD} element={<TasksAdd />} />
      <Route path={PATH_LIST.ERROR} element={<TasksError />}></Route>
    </Routes>
  );
}
