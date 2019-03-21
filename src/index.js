import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import App from './App';


// 关于队列
import queue from './reducers/Queue';

const myQueue = queue({});

const store = createStore(myQueue);

ReactDOM.render(  <Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));


