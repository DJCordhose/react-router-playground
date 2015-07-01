import React from 'react';
import { Router } from 'react-router';
import HashHistory from 'react-router/lib/HashHistory';

import routes from './Routes';

// https://github.com/rackt/react-router/issues/1332
// Caution: new HashHistory()
React.render(<Router history={new HashHistory()} children={routes}/>, document.getElementById('mount'));
