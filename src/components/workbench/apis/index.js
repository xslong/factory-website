const lbt1 = require('assets/images/lbt1.jpg');
const lbt2 = require('assets/images/lbt2.jpg');
/**获取轮播图的接口 */

export async function getBannerUrls() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([lbt1, lbt2]);
    }, 300);
  });
}

import $http from '@/vendors/axios';
import { sortGroupByfnc, transDataIdPid } from '@/utils/index';
let baseDir = '/server/public/v1';
/**接口标识 */

// if (process.env.NODE_ENV !== 'production') {

// }
baseDir = '/api';

// if (process.env.NODE_ENV === 'production') {
//   baseDir = '/server/public/v1';
// }

// const baseDir = '/api';
// let baseDir = '/server/public/v1';

/**菜单栏 */
export function getNavMenusList() {
  const menus = [
    {
      name: '首页',
      state: '/workbench',
      id: 80001,
      pid: -1,
    },
    {
      name: '职位',
      state: '/workbench/job1',
      id: 80002,
      pid: -1,
    },
    {
      name: '职位1',
      state: '/workbench/job1',
      id: 80101,
      pid: 80002,
    },
    {
      name: '职位2',
      state: '/workbench/job2',
      id: 80102,
      pid: 80002,
    },
    {
      name: '职位3',
      state: '/workbench/job3',
      id: 80103,
      pid: 80002,
    },
    {
      name: '订单',
      state: '/workbench/order',
      id: 80003,
      pid: -1,
    },
    {
      name: '企业',
      state: '/workbench/enterprise',
      id: 80004,
      pid: -1,
    },
    {
      name: '帐号',
      state: '/workbench/account',
      id: 80005,
      pid: -1,
    }
  ];

  return new Promise(resolve => {
    resolve(menus);
  });
}

/**获取公司展示信息 */
export function getCompanyInfo() {
  return $http.get(`${baseDir}/company/info`, null, true);
}

/**获取公司历史展示信息 */
export function getCompanyHistoryInfo() {
  return $http.get(`${baseDir}/company/history/list`, null, true).then(
    /**@param {[]} list*/
    list => {
      list.forEach(item => {
        let date = new Date(item.timestamp * 1000);

        item.year = date.getFullYear();
        item.month = date.getMonth() + 1;
      });

      return sortGroupByfnc(list, 'year');
    },
  );
}

/**获取车间面貌展示信息 */
export function getWorkshopList() {
  return $http.get(`${baseDir}/workshop/get`, null, true);
}

/**获取产品菜单种类展示信息 */
export function getProductTypesList(params) {
  return $http.get(`${baseDir}/products/nav/get`, params, true).then(list => {
    list.forEach(item => {
      item.label = item.name;
    });

    return transDataIdPid(list, 'id', 'pid', 'children');
  });
}

/**获取产品展示信息 */
export function getProductList(params) {
  return $http.get(`${baseDir}/products/item/get`, params, true);
}

/**获取新闻展示信息 */
export function getNewsInfoList(params) {
  return $http.get(`${baseDir}/company/news/list`, params, true).then(_ => {
    _.data.forEach(d => {
      let date = new Date(d.time * 1000);

      d.formattime = `${date.getFullYear()}-${date.getMonth() +
        1}-${date.getDay()}`;

      return d;
    });

    return _;
  });
}

/**获取新闻展示信息 */
export function getNewsInfoByid(params) {
  return $http.get(`${baseDir}/company/news/get`, params, true).then(_ => {
    let date = new Date(_.time * 1000);

    _.formattime = `${date.getFullYear()}-${date.getMonth() +
      1}-${date.getDay()}`;

    return _;
  });
}

/**获取常见问题解答展示信息 */
export function getFaqQuestionList(params) {
  return $http.get(`${baseDir}/faq/get`, params, true);
}

/**提交反馈 */
export function setFeedback(params) {
  return $http.post(`${baseDir}/feedback/submit`, params);
}

/**获取客户信息 */
export function getCustomer(params) {
  return $http.get(`${baseDir}/customer/get`, params, true);
}

// export function test() {
//   return Promise.all([
//     getNavMenusList(),
//     getCompanyInfo(),
//     getCompanyHistoryInfo(),
//     getProductTypesList(),
//     getProductList(),
//     getNewsInfoList(),
//     getFaqQuestionList(),
//     getWorkshopList(),
//   ]);
// }
