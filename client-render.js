/**
 * Created by Yujia on 2015/12/14.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';

import { routes } from './routes';

import createBrowserHistory from 'history/lib/createBrowserHistory';

ReactDOM.render(
    <Router routes={routes} history={createBrowserHistory()} />,
    document.getElementById('app')
);