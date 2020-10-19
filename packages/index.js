// 导入组件，组件必须声明 name
import cardTabs from './card-tabs/card-tabs.vue'

// 手动注册 use
const install = function(Vue) {
    if (install.installed) return;
    Vue.component('cardTabs', cardTabs)
};

export {
    cardTabs
}
// 默认导出组件  支持按需加载cardTabs
export default {
    install 
}
