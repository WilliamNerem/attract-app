import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Button } from "./components/atoms/button";
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Button buttonTest={'Button'}/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
