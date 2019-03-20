import React from 'react';
import ReactDOM from 'react-dom';
import './css/base.css';
import 'antd-mobile/dist/antd-mobile.css';
import Router from './router/router';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import CRM from "./reduce/reduce"

// const store = createStore(CRM);

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router />, 
        document.getElementById('root'));
serviceWorker.unregister();
