import AjaxUtils from 'utils/AjaxUtils';

//根据筛选条件获取表格数据
export const getDailyRequest = function (data) {
    return AjaxUtils.doPostRequest('/daily', data);
};

//根据筛选条件获取表格数据
export const getDailyAllRequest = function () {
    return AjaxUtils.doGetRequest('/daily/all');
}