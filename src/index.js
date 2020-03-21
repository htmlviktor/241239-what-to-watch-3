import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/containers/app';

import {Operation as DataOperation} from "./reducer/data/reducer";
import {Operation as UserOperation} from "./reducer/user/reducer";

import reducer from './reducer/reducer';
import {createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux';

import thunk from "redux-thunk";
import createApi from "./api/api";
import {AppRoute} from "./const";
import {pushHistory} from "./utils";

const api = createApi(() => pushHistory(AppRoute.LOGIN));

const store = createStore(reducer, applyMiddleware(thunk.withExtraArgument(api)));

store.dispatch(DataOperation.loadFilms());
store.dispatch(UserOperation.checkAuthorization());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
