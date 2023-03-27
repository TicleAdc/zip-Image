function getFile(file) {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function (e) {
        const img = new Image()
        // 图片压缩质量,默认0.5
        const quality = 0.5

        // 准备处理压缩
        // 创建一个canvas
        const canvas = document.createElement("canvas")
        const ctx = canvas.getContext("2d")
        // this.result就是reader.readAsDataURL
        img.src = this.result //result就是base64编码

        // 图片预览，可以选择直接显示压缩后的图片，把此处注释掉就ok
        let picDom = document.getElementById("img")
        picDom.src = window.URL.createObjectURL(file);

        // 压缩图片操作
        img.onload = function () {
            canvas.height = 300 // 可以自定义
            canvas.width = 400 // 可以自定义
            // canvas绘图
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

            // 设置字体，颜色
            ctx.font = "24px 黑体"
            ctx.fillStyle = "#ffffff"
            // 设置右对齐
            ctx.textAlign = 'right'
            // 在指定位置绘制文字，这里指定距离右下角20坐标的地方
            ctx.fillText(/**这里放水印内容 */'2023-03-20', canvas.width - 20, canvas.height - 20)

            // 如果上传不预览原图，使用此处的canvas放在上传预览处
            let cav = document.getElementById("canvas")
            cav.appendChild(canvas)

            // 压缩图片
            let imgData = canvas.toDataURL('image/png', quality)

            // 将base64编码转换回文件流，用来传参
            let resultFile = dataURLtoFile(imgData, file.name)

            // 后面就可以蒋result作为上传参数调用上传方法
        }

        // 蒋base64编码回转为文件流的方法，接收一个base64编码参数，一个文件名称参数
        function dataURLtoFile(dataurl, filename) {
            var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new File([u8arr], filename, { type: mime });
        }
    }
}