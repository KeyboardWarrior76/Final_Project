import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import AuthProvider from './providers/AuthProvider';
import ProjectProvider from './providers/ProjectProvider';
import './css/Sidebar.css';
import './css/Estimator.css';

ReactDOM.render(

  <AuthProvider>
    <ProjectProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </ProjectProvider>
  </AuthProvider>,

  document.getElementById('root')
);
