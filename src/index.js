import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import {film, films} from './mock/mock';

ReactDOM.render(
    <App film={film} films={films}/>,
    document.querySelector(`#root`)
);
