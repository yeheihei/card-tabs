<!--
 * @Author: your name
 * @Date: 2020-09-29 10:45:04
 * @LastEditTime: 2020-10-19 20:28:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \card-tabs\examples\App.vue
-->
<template>
    <div id="app">
        <dv-full-screen-container>
            <h1 style="color: #fff; text-align: center; font-size: 50px;">某**系统</h1>
            <cardTabs ref="cardTabs-datav" :cards="cardsAndDatav" :showIcon="false">
                <dv-border-box-1 slot="box1">
                    <div class="box">
                        相关业务处理
                    </div>
                </dv-border-box-1>
                <dv-border-box-1 slot="box2">
                    <div class="box">
                        相关业务处理
                        <p>可以自定义任何内容</p>
                    </div>
                </dv-border-box-1>
                <dv-border-box-1 slot="box3">
                    <div class="box">
                        相关业务处理
                    </div>
                </dv-border-box-1>
            </cardTabs>
        </dv-full-screen-container>

    </div>
</template>

<script>
import { cardTabs } from '../packages/index.js';

export default {
    name: 'App',
    data() {
        return {
            cardsAndDatav: [
                {
                    slotName: 'box1',
                },
                {
                    slotName: 'box2',
                },
                {
                    slotName: 'box3',
                },
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

<style>
#dv-full-screen-container {
    background: #282c34;
}
.box {
    padding: 20px;
    color: #ffffff;
}
</style>
