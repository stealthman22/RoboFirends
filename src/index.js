import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//  Creating the redux store 
// add middleware access to the store
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { searchRobots } from './reducers';
import thunkMiddleware from 'redux-thunk';

import './index.css';
import App from './containers/App'
import * as serviceWorker from './serviceWorker';
import 'tachyons';




// Creating a store
const store = createStore(searchRobots, applyMiddleware(thunkMiddleware, logger));

const logger = createLogger();

ReactDOM.render(
        <Provider store={store}>
                <App />
        </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// install redux-logger
// install redux-thunk
