import { createStore, compose, applayMiddleware, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
// const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_;

const store = createStore(reducer, 
    applyMiddleware(thunk)
);

export default store;