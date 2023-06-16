import React from 'react';
/*
import ReactDOM from 'react-dom';*/
import { createRoot } from 'react-dom/client';
import './style/index.scss';
import MyRoutes from "./components/Router"
const container = document.getElementById('root');
const root = createRoot(container);


root.render(
  <React.StrictMode>
    <MyRoutes/>
  </React.StrictMode>
)
