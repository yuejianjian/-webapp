import React from 'react';
import ReactDOM from 'react-dom';
import './css/base.css';
import 'antd-mobile/dist/antd-mobile.css';
import Login from './pages/login';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Login />, document.getElementById('root'));
serviceWorker.unregister();
