/** 函数防抖 */
// function ajax (content) {
//     console.log('ajax request: '+ content);
// }

// /**
//  *降频函数
//  *这个 debounce 函数在给定的时间间隔内只允许你提供的回调函数执行一次，以此降低它的执行频率。
//  *调用:	debounce(function() {}, 250) 
//  * @param {*} func回调函数
//  * @param {*} wait等待时间,推荐250
//  * @param {*} immediate
//  * @returns
//  */
// function debounce(func, wait, immediate) {
//     var timeout
//     return function() {
//         var context = this, args = arguments
//         var later = function() {
//             timeout = null
//             if (!immediate) func.apply(context, args)
//         }
//         var callNow = immediate && !timeout
//         clearTimeout(timeout)
//         timeout = setTimeout(later, wait)
//         if (callNow) func.apply(context, args)
//     }
// }

// let input = document.getElementById('input')

// let debounceAjax = debounce(ajax, 500)

// input.addEventListener('keyup', function (e) {
//     debounceAjax(e.target.value)
// })

/** 函数节流 */

// function axios () {
//     let date = new Date()
//     let time = date
//     console.log('ajax request: '+ time);
// }
// /**
//  * 一定时间内只能触发一次事件
//  * @param {*} func 回调函数
//  * @param {*} wait 等待延时
//  */
// function throttle (func, wait) {
//     let last, defferTimer
//     return function (args) {
//         let _this = this
//         let _args = arguments
//         let now = +new Date()
//         if (last && now < last + wait) {
//             clearTimeout(defferTimer)
//             defferTimer = setTimeout(() => {
//                 last = now
//                 func.apply(_this,_args)
//             }, wait);
//         } else {
//             last = now
//             func.apply(_this, _args)
//         }
//     }
// }

// let throttleAxios = throttle(axios, 2000)

// let btn = document.getElementById('btn')
// console.log(btn);

// btn.addEventListener('click', function(e) {
//     throttleAxios()
// })


// 监控浏览器窗口是否处于后台，在切换回页面时弹出提示。可用于防作弊的答题系统
var count = 0
document.addEventListener("visibilitychange", function () {
    var string = document.visibilityState
    console.log(string)
    if (string === 'hidden') {  // 当页面由前端运行在后端时，出发此代码
        console.log('我被隐藏了')
        count++
        if (count < 3) {
            return
        } else {
            window.close()
        }
    }
    if (string === 'visible') {   // 当页面由隐藏至显示时
        console.log('欢迎回来')
        alert('当前切换窗口'+count+'次, 超出三次将关闭当前窗口')
    }
});

