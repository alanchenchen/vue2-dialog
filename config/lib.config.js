/**
 * @module 配置package.json的参数和webpack.config的参数。
 * 
 */
module.exports = {
    libraryName: 'vue2-dialog', // npm包名，首字母不允许大写，支持驼峰和短杆写法
    bundleName: 'VueDialog', // 打包后文件名，也是UMD script直接引入挂在windows对象的key名
    version: '1.1.0', // 版本号
    description: 'A plugin for vue dialog', // 包描述
    keywords: ['vue-dialog', 'vue', 'alert', 'confirm', 'toast', 'address-picker', 'CascadingPicker', 'action-sheet', 'scroller'], // 关键词
    author: 'Alan Chen', // 作者
    repository: { // 仓库地址和首页地址
        type: 'git',
        url: 'https://github.com/alanchenchen/vue2-dialog'
    }
}