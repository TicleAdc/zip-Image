/**
 * arr 需要去重的数组
 */
// 常规JavaScript写法
// function unique(arr) {
//     var res = []
//     for (var i = 0; i < arr.length; i++) {
//         if (res.indexOf(arr[i]) == -1) {
//             res.push(arr[i])
//         }
//     }
//     console.log(res);
//     // return res
// }
// unique(["前端","js","html","js","css","html"])

// ES6写法
// const uniqueArr = (arr) => { return [...new Set(arr)]}
// console.log(uniqueArr(["前端","js","html","js","css","html"]));

/**
 * 截取url中的参数
 */
// const getParamters = url => {
//     let params = `{"${decodeURI(url.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"')}"}`
//     return JSON.parse(params)
// }
// console.log(getParamters('https://www.baidu.com?name=张三&age=25'));

/**
 * 检查对象是否为空
 */
// const isEmpty = obj => {return Reflect.ownKeys(obj).length === 0 && obj.constructor === Object}
// console.log(isEmpty({}));
// console.log(isEmpty({name: '张三'}));

/**
 * 生成随机16进制颜色
 */
// const randomHexColor = () => {return `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0')}`}
// console.log(randomHexColor());

/**
 * 检测设备
 */
// const judgeDeviceType =
//       () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent) ? 'Mobile' : 'PC';

// console.log(judgeDeviceType() ); // PC | Mobile

/**
 * 计算两个日期之间相差几天
 */
// const dayDiff = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);

// let diff = dayDiff(new Date("2021-10-21"), new Date("2021-10-29"))

// console.log(diff);

