import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import AppHeaderView from './AppHeaderView';
import AppSidebarView from './AppSidebarView';
import AppBreadcrumbView from './AppBreadcrumbView';
import './AppView.less';

import Page1Composer from '../page1/Page1Composer';
import Page2Composer from '../page2/Page2Composer';

export default class AppView extends React.Component {


    render() {
        var actions = this.props.actions;
        var store = this.props.store;
        return (
            <div className="AppView">
                <AppSidebarView actions={actions} store={store} />
                <div className="ant-layout-body">
                    <AppHeaderView actions={actions} store={store}/>
                    <div className="ant-layout-main">
                        <AppBreadcrumbView actions={actions} store={store} />
                        <div className="ant-layout-content">
                            <Switch>
                                <Route path="/home/page1" component={Page1Composer} />
                                <Route path="/home/page2" component={Page2Composer} />
                            </Switch>
                            <div className="clear20"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
