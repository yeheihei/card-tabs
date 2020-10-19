<!--
 * @Author: your name
 * @Date: 2020-09-29 10:45:04
 * @LastEditTime: 2020-10-19 20:32:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \card-tabs\examples\App.vue
-->
<template>
    <div id="app">
        <cardTabs ref="cardTabs" :cards="cards"></cardTabs>
    </div>
</template>

<script>
import { cardTabs } from '../packages/index.js';

export default {
    name: 'App',
    data() {
        return {
            cards: [
                {
                    url:
                        'https://cdn.jsdelivr.net/gh/yeheihei/picture/2020-10-19/1603107123273-wallhaven-xlq1rv.jpg',
                },
                {
                    url:
                        'https://cdn.jsdelivr.net/gh/yeheihei/picture/2020-10-19/1603107123295-backiee-98927.jpg',
                },
                {
                    url:
                        'https://cdn.jsdelivr.net/gh/yeheihei/picture/2020-10-19/1603107123209-backiee-102533.jpg',
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
