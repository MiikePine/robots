import React from 'react';
import { createRoot } from "react-dom/client";
import 'tachyons';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {cartoes} from './cartoes';
import RobotList from './robotList';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);




root.render (
//   <RobotList  cartoes={cartoes}/>
    <App />

);

reportWebVitals();
