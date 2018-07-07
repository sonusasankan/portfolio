import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/bootstrap.css';
import '../node_modules/devicon/devicon.css';
import './styles/scss/main.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root')); 
registerServiceWorker();   
              