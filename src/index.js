import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import App from './containers/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {searchRobots} from './reducers';
import {createLogger} from 'redux-logger';

const logger = createLogger(); //middleware that listens for actions
const store = createStore(searchRobots,applyMiddleware(logger));

ReactDOM.render(
    //Provider takes care of passing down the store to all children down the tree of components
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
