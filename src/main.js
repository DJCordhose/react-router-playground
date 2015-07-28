import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import HashHistory from 'react-router/lib/HashHistory';
import BrowserHistory from 'react-router/lib/BrowserHistory';

import routes from './Routes';

// Caution: new HashHistory()
const history = new HashHistory();
// const history = new BrowserHistory();

// https://github.com/rackt/react-router/issues/1332
ReactDOM.render(<Router history={history} children={routes}/>, document.getElementById('mount'));
