<!--
 * @Author: lmx
 * @Date: 2020-06-01 09:47:29
 * @LastEditTime: 2020-10-05 18:25:23
 * @LastEditors: Please set LastEditors
 * @Description: 卡片切换效果
 * @FilePath: \aiku\examples\components\doc\doc-src\card-tabs\card-tabs.vue
--> 
<style lang='less' scoped>
    @import './card-tabs.less';
</style>

<template>
    <div class="card-tabs" :style="{perspective: perspectiveWidth * 4 + 'px', height: height + 'px', transform: `translateY(${height/4}px)`}"> 
        <div @click="leftTog" class="left-icon" v-if="showIcon">
            <slot v-if="showCustomLeftIcon" name="leftIcon"></slot>
            <img v-else src="./right.svg" alt="">
        </div>
        <div ref="modules"
            class="modules" 
            :style="{'transform': 'rotateY('+ ((-viewIndex + 1) * rotateNum) +'deg)'}">
            <transition-group name="list" tag="div">
                <div :style="{transform: 'rotateY('+( rotateNum * (index - 1) )+'deg) translateZ('+ perspectiveWidth +'px)'}" 
                    v-show="index == viewIndex || index == viewIndex + 1 || index == viewIndex - 1" 
                    v-for="(item,index) in cards" 
                    :key="index"
                    class="module"
                    @click="cardClick(index)">
                    <slot v-if="item.slotName" :name="item.slotName"></slot>
                    <div class="phone-content" v-else>
                        <img class="phone" :src="item.url" alt="">
                    </div>
                </div>
            </transition-group>
        </div>
        <div @click="rightTog" class="right-icon" v-if="showIcon">
            <slot v-if="showCustomRightIcon" name="rightIcon"></slot>
            <img v-else src="./left.svg" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'care-tabs',
    props: {
        // 卡片列表
        cards: {
            type: Array,
            default() {
                return [];
            }
        },
        height: {
            type: Number,
            default() {
                return 500;
            }
        },
        showIcon: {
            type: Boolean,
            default() {
                return true
            }
        }
    },
    data() {
        return {
            // 视图宽度
            perspectiveWidth: 0,
            // 视图高度
            perspectiveHeight: 0,
            // 当前视图索引
            viewIndex: 1,
            // 旋转角度
            rotateNum:60
        }
    },
    computed: {
        // 是否显示自定义左侧图标
        showCustomLeftIcon() {
            return this.$slots.leftIcon;
        },
        // 是否显示自定义右侧图标
        showCustomRightIcon() {
            return this.$slots.rightIcon;
        }
    },
    methods: {
        // 获取视图大小
        getPresSize() {
            this.$nextTick(() => {
                this.perspectiveWidth = this.$refs.modules.clientWidth;
                this.perspectiveHeight = this.$refs.modules.clientHeight;
            })
            window.onresize = ()=>{
                this.$nextTick(() => {
                    this.perspectiveWidth = this.$refs.modules.clientWidth;
                    this.perspectiveHeight = this.$refs.modules.clientHeight;
                })
            }
        },
        // 左切换
        leftTog() {
            if (this.viewIndex > 0) {
                this.viewIndex -= 1;
            }
        },
        // 右切换
        rightTog() {
            if (this.viewIndex < this.cards.length - 1) {
                this.viewIndex += 1;
            }
        },
        // 卡片点击
        cardClick(index) {
            this.viewIndex = index;
        }
    },
    created() {
    },
    mounted() {
        this.getPresSize();
    },
    watch: {
        viewIndex(val) {
            this.$emit('on-toggle', val);
        }
    }
}
</script>
