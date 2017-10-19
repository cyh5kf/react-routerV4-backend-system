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