import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './containers/App'
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { Provider } from 'react-redux';
//  Creating the redux store 
import { CreateStore } from redux;
import { SearchRobots } from './reducers.js';
ReactDOM.render(
        <App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister(); 