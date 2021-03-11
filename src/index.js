import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"
import './index.css';
import './App.css'
import App from './Components/App';
import 'semantic-ui-css/semantic.min.css'
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <App />,
  </Router>,
  document.getElementById('root')
);

