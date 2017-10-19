import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { LocaleProvider, message } from 'antd';
import createHistory from 'history/createBrowserHistory';
import enUS from 'antd/lib/locale-provider/en_US';
import AjaxUtils from 'utils/AjaxUtils';
import AuthorizedRoute from './AuthorizedRoute';

// Layouts
import LoginComposer from './views/Login/LoginComposer';
import AppComposer from './views/App/AppComposer';
import './views/index.less';

const history = createHistory();

AjaxUtils.init(function(){
    message.error("Login information has expired, please login again.");
    history.push('/login');
});

ReactDOM.render(
    <LocaleProvider locale={enUS}>
        <Router>
            <Switch>
                <Route path="/login" component={LoginComposer}/>
                <AuthorizedRoute path="/home" component={AppComposer} />
                <Redirect to="/login" />
            </Switch>
        </Router>
    </LocaleProvider>,
    document.getElementById('root')
);
