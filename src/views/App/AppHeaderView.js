import React from 'react';
import {withRouter} from "react-router-dom";
import {Icon,Modal} from 'antd';
import LoginStore from '../../stores/LoginStore';
import {logoutRequest} from 'api/LoginApi';
import './AppHeaderView.less';

const confirm = Modal.confirm;

class AppHeaderView extends React.Component {

    handleLogout = () => {
        const history = this.props.history;
        
        confirm({
            title: 'Log out ?',
            content: 'Are you sure you want to log out of the system?',
            onOk() {
                localStorage.removeItem('token');
                history.push('/login');
            },
            onCancel() {
            }
        });
    };

    render() {
        var actions = this.props.actions;
        var store = this.props.store;
        var isSideBarFold = store.isSideBarFold;

        return (
            <div className='ant-layout-header'>
                <div className="header-left floatLeft">
                    <div className="header-menu-fold" onClick={actions.toggleMenuFold}>
                        {isSideBarFold?<Icon type="menu-unfold" title="unfold"/>:<Icon type="menu-fold" title="fold"/> }
                    </div>
                </div>
                <div className="header-right">
                    <span className="logout" onClick={this.handleLogout}>
                        <Icon type="poweroff" className="poweroff"/>Logout</span>
                </div>
            </div>
        );
    }

}

export default withRouter(AppHeaderView);