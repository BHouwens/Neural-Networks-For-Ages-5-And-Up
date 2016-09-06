import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render as renderToDom } from 'react-dom';

/*- Internal imports -*/

import { App } from './components';
import { reducer } from './reducer';

const store = createStore(
    reducer,
    window.devToolsExtension ? window.devToolsExtension() : undefined
);

renderToDom(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);