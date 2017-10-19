export const getCurrentOpenKeys = (menuCurrent, menuEnum) => {
    let currentOpenKeys = [];
    for( let key in menuEnum) {
        for( let item of menuEnum[key]) {
            if (item.indexOf(menuCurrent) !== -1) {
                currentOpenKeys.push(key);
                break;
            }
        }
    }
    return currentOpenKeys;
}