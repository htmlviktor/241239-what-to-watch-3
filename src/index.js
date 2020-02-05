import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import {film} from './mock/mock';

ReactDOM.render(
    <App film={film}/>,
    document.querySelector(`#root`)
);
