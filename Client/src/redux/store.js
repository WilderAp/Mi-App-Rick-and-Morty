import { createStore, applyMiddleware, compose } from "redux";
import reducer from './reducer';
import thunkMiddleWare from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE || compose;

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleWare))
);

export default store;