function throttle () {
    let timer = null
    return function () {
        if (timer) return
        timer = setTimeout(() => {
            debugger
            //函数内改变this作用域
            fn.apply(this,args)
            timer = null
            //外部调用函数,改变this作用域
            // 谁里面的this.apply(this,(若有参数需要传入用逗号隔开))
        }, 1000);
    }
}


function fn () {
    let i = 0
    console.log(i++);
}