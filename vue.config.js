/*
 * @Author: your name
 * @Date: 2020-09-29 11:04:19
 * @LastEditTime: 2020-10-19 21:28:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \card-tabs\vue.config.js
 */
module.exports = {
    // 修改 src 为 examples
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    css: { extract: false }
}