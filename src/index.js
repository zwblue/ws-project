import React from 'react';
import ReactDOM from 'react-dom';


// redux的引入
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from 'react-redux'
import reducer from './reducer'


// import './config';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);
registerServiceWorker();
