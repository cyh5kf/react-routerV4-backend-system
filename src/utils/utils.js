//遍历导航菜单，找出当前路由所在的SubMenu，即openKeys
export const getCurrentOpenKeys = (menuCurrent, menuList) => {
    let currentOpenKeys = [];
    for( let sub of menuList) {
        for( let item of sub.menuItem) {
            let itemPath = item.path;
            if (itemPath.indexOf(menuCurrent) !== -1) {
                currentOpenKeys.push(sub.subKey);
                break;
            }
        }
    }
    return currentOpenKeys;
}