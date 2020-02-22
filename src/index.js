import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/containers/app';

import reducer from "./reducer/reducer";
import {createStore} from "redux";
import {Provider} from 'react-redux';


const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
