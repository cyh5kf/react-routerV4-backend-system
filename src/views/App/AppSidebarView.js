import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import _ from 'underscore';
const SubMenu = Menu.SubMenu;
import { menuEnum } from '../../enum/menuEnum';
import { getCurrentOpenKeys } from '../../utils/utils'
import './AppSidebarView.less';


export default class AppSidebarView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: '',
            openKeys: []
          }
    }

    componentWillMount() {
        const { menuCurrent } = this.props.store;
        let currentOpenKeys = getCurrentOpenKeys(menuCurrent, menuEnum);
        console.log(`currentOpenKeys: ${currentOpenKeys}`);

        this.setState({
            current: menuCurrent,
            openKeys: currentOpenKeys
        });
    }
    
    handleClick = (e) => {
        console.log('Clicked: ', e);
        this.setState({ current: e.key });
    }

    onOpenChange = (openKeys) => {
        const state = this.state;
        const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
        const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

        let nextOpenKeys = [];
        if (latestOpenKey) {
            nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
        }
        if (latestCloseKey) {
            nextOpenKeys = this.getAncestorKeys(latestCloseKey);
        }
        this.setState({ openKeys: nextOpenKeys });
    }
    
    getAncestorKeys = (key) => {
        const map = {
            
        };
        return map[key] || [];
    }

    render() {

        var { isSideBarFold } = this.props.store;

        return (
            <div className={`ant-layout-siderbar  sidebar-fold-${isSideBarFold}`}>

                <div className="header">
                    <div className="header-logo">antd Management System</div>
                </div>

                <Menu
                mode="inline"
                openKeys={this.state.openKeys}
                selectedKeys={[this.state.current]}
                style={{ width: 240 }}
                onOpenChange={this.onOpenChange}
                onClick={this.handleClick}
                >
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                        <Menu.Item key="/home/page1"><Link to="/home/page1"><Icon type="home" />page1</Link></Menu.Item>
                        <Menu.Item key="/home/page2"><Link to="/home/page2"><Icon type="line-chart" />page2</Link></Menu.Item>
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }

}
