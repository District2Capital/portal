import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlobalState from './context/GlobalState';

ReactDOM.render(<BrowserRouter><GlobalState><App /></GlobalState></BrowserRouter>, document.getElementById('root'));
