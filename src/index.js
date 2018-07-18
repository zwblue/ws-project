import React from 'react';
import ReactDOM from 'react-dom';

// redux的引入
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from 'react-redux'
import reducer from './reducer'

// router的引入
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import IsLogin from './component/islogin/islogin'

// import './config';
import './index.scss';
import Home from './container/home';
import Login from './container/login/login';

const store = createStore(reducer, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <IsLogin></IsLogin>
                <Switch>
                    <Route path='/home' component={Home}></Route>
                    <Route path='/login' component={Login}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>, document.getElementById('root')
);
