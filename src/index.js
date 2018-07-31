import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import App from './containers/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {searchRobots, requestRobots} from './reducers';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk'; // package to handle ajax calls

const logger = createLogger(); //middleware that listens for actions
//combines all reducers into one, by passing each reducer to the combineReducerS()
const rootReducer = combineReducers({searchRobots,requestRobots});
const store = createStore(rootReducer,applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
    //Provider takes care of passing down the store to all children down the tree of components
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
