import { CssBaseline } from '@mui/material';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from 'router/index';

export function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Router />
    </BrowserRouter>
  );
}
