import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/containers/app';

import films, {film} from './mock/mock';

ReactDOM.render(
    <App film={film} films={films}/>,
    document.querySelector(`#root`)
);
