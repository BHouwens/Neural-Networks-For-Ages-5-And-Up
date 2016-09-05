import React from 'react';
import { render as renderToDom } from 'react-dom';

/*- Internal imports -*/

import { App } from './components';

renderToDom(
    <App />,
    document.getElementById('app')
);