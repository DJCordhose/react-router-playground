import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';

import routes from './Routes';

import createHistory from 'history/lib/createBrowserHistory';
//import createHistory from 'history/lib/createHashHistory';
const history = createHistory();

ReactDOM.render(<Router history={history} children={routes}/>, document.getElementById('mount'));
//ReactDOM.render(<Router children={routes}/>, document.getElementById('mount'));
