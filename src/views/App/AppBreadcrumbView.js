import React from 'react';
import {withRouter} from "react-router-dom";
import {Button} from 'antd';

class AppBreadcrumbView extends React.Component {

    getMenuItemName = (routes) =>{
        var routeArray = routes.substr(1);
        var menuItem = routeArray.split("/")[1];
        return menuItem;
    };

    render() {
        var routes = this.props.location.pathname || {};
        var routeInfo = this.getMenuItemName(routes);

        return (
            <div className="ant-breadcrumb">
                <div className="item">
                    {routeInfo}
                </div>
                <div className="floatRight">
                </div>
            </div>
        );
    }

}

export default withRouter(AppBreadcrumbView);
