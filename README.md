# card-tabs

    一个基于vue的可视化tabs切换组件，可用于图片/照片展示，可视化业务处理，系统门户等。效果完全基于CSS3动画，扩展性高
    
    
  github地址：[https://github.com/yeheihei/card-tabs](https://github.com/yeheihei/card-tabs)

## 示例

1. 作为图片预览

![](https://cdn.jsdelivr.net/gh/yeheihei/picture/2020-10-19/1603110538087-image.png)

2. 自定义业务
   ![](https://cdn.jsdelivr.net/gh/yeheihei/picture/2020-10-19/1603110499826-image.png)

## 安装

```
npm install cardtabs
```

## 注册

```
// 全局注册
import cardTabs from 'cardtabs'
Vue.use(cardTabs)

// 局部注册
import {cardTabs} from 'cardtabs'
components: {
  cardTabs
}
```

## 使用

    示例代码

```
<template>
    <div id="app">
        <cardTabs ref="cardTabs" :cards="cards">
          <div slot="customSlot">
            自定义内容
          </div>
        </cardTabs>
    </div>
</template>

<script>
import { cardTabs } from 'cardtabs';

export default {
    name: 'App',
    data() {
        return {
            cards: [
                {
                    url: 'https://cdn.jsdelivr.net/gh/yeheihei/picture/2020-10-19/1603107123273-wallhaven-xlq1rv.jpg',
                },
                {
                    url: 'https://cdn.jsdelivr.net/gh/yeheihei/picture/2020-10-19/1603107123295-backiee-98927.jpg',
                },
                {
                    url: 'https://cdn.jsdelivr.net/gh/yeheihei/picture/2020-10-19/1603107123209-backiee-102533.jpg',
                },
                {
                  slotName: 'customSlot'
                }
            ],
        };
    },
    components: {
        cardTabs,
    },
    methods: {},
    mounted() {
        this.$refs.cardTabs.setIndex(1);
    },
};
</script>
```

参数：

| 参数名   | 类型    | 是否必填 | 默认值 | 说明                        |
| -------- | ------- | -------- | ------ | --------------------------- |
| cards    | Array   | 是       | []     | 对象数组，控制组件展示      |
| height   | Number  | 否       | 500    | 组件高度，非实际高度（bug） |
| showIcon | Boolean | 否       | true   | 左右切换按钮是否默认显示    |

cards：
| 参数名 | 类型 | 是否必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| slotName | String | 否 | null | 自定义内容的自定义插槽名，和 url 同时有且只能有一个 |
| url | Streing | 否 | null | 作为图片展示是的预览 url |

插槽：
| 插槽名 | 说明 |
| --- | --- |
| leftIcon | 自定义左侧切换按钮 |
| rightIcon | 自定义右侧切换按钮 |
| 自定义插槽名 | 根据 cards 数据配置的 slotName 来确定 |

方法：
| 方法名 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| leftTog | 无 | 无 | 左切换 |
| rightTog | 无 | 无 | 右切换 |
| setIndex | index | 无 | 切换到第几个索引 |

## 本项目启动

```
// 安装依赖
npm install

// 启动
npm run serve

// 文档打包
npm run build

// cardtabs 打包
npm run lib
```
