<!--
 * @Author: lmx
 * @Date: 2020-06-01 09:47:29
 * @LastEditTime: 2020-10-19 21:37:56
 * @LastEditors: Please set LastEditors
 * @Description: 卡片切换效果
 * @FilePath: \aiku\examples\components\doc\doc-src\card-tabs\card-tabs.vue
--> 
<style lang='less' scoped>
    @import './card-tabs.less';
</style>

<template>
    <div class="card-tabs" :style="{perspective: perspectiveWidth * 4 + 'px', height: height + 'px', justifyContent: showIcon ? 'space-between' : 'center', transform: `translateY(${height/4}px)`}"> 
        <div @click="leftTog" class="left-icon" v-if="showIcon">
            <slot v-if="showCustomLeftIcon" name="leftIcon"></slot>
            <img v-else src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADMUlEQVR4Xu2ayYoVMRSGv34GQRBFRFBQ242CK8HhCRxQGxxxAseFCwdcqCCoi144LhxxxIXoG6gLV4IuHEFRQdSN4DPIgVugt5M6J7ldqdStCtQqqeT8X07l3iT/CC0vIy3XTwegy4CWE4j9BOYAS4CVwOyaGX4FngIvgc+hsYQCOApsBEZDB0rU/h1wHzhrHc8KYD5wF1hk7bjmdq+BzcAHLQ4LgJPACa2jTOsl9lNlsWkApgM/MhVnDWsG8NPXWAPwGFhtHSnTdk+ANTEA9gGXMhUVGtZ+4LLrpbIMkAVkXuhImbb/CMhCPqH4AIhwdQXNVKwvLAEgIP4rPgC7gKsNE6iFuxu4ZgVwG9ii9diw+jvAViuAZ8DyhgnUwn0OrOgAGNeAlBnwHrgOPOj91ZY0HdOmM6I+ywwQ8ev7fnHWAo8iBGqvZAfAJb4Q8aWCbXZWAMrETwN+adMZUZ8NgDLxoquq3WcWADTxx4HTEbNreaV2AJr4w8A5i5LINrUC0MQfAsYjhVlfqw2AJv4AcMGqYoB2tQDQxO8BrgwgKuTV5AA08Ttdu7MQRYFtkwLQxG8DbgUKGLR5UgCbeufzrqClTo7YU5dkAP4AUzzqNgAPUyvvjZcMwG9gapsBiHbZ0cmReis/ARHd+kXQAiH1wWuyNeDftNcyYa/vwqKChbIWAJZMOAicr0Bwf5e1AbBAGOrNUDET2udwJMTYEJExtWaAFcJQH4hYIQz1kZgFwizgW0SKa69k8QlYfyLfAAs1RYH12QHw/TrInaTcTE12yRJAAUFuguTqeh2wDFg12eqBbAFUoNXZZQcg5Hr8BrA91dQkGucmsKN/LJ9FRuyw9xIFlmoY5zGdD4CYoT+liizROHNdZuoym9zbjE3RoczERO38X1EGQJzhZ0JHyrT9Md9GS7PKvmqQQ9zHXpzji32VGgAxF8o2tsllQZnpUwMgwsUqLzu0JhaxypfGbgEgwsU2f7FBznFxiMuts9cmX8ymFUDRXhzk8uRqohYvsLjCnc5wVwqHAij6EABLe8/Mmr+N78CL3jPBDK3FFgtA67cx9R2AxkxVRYF2GVAR2MZ0+xeOGMRB08KWaQAAAABJRU5ErkJggg==" alt="">
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
                    @click="setIndex(index)">
                    <slot v-if="item.slotName" :name="item.slotName"></slot>
                    <div class="phone-content" v-else>
                        <img class="phone" :src="item.url" alt="">
                    </div>
                </div>
            </transition-group>
        </div>
        <div @click="rightTog" class="right-icon" v-if="showIcon">
            <slot v-if="showCustomRightIcon" name="rightIcon"></slot>
            <img v-else src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADHUlEQVR4Xu2auaoWMRiGn3MLgo2KoKLgWihYWah3oFiIK66Fa2GhgqAW4lJYeFzADVdwweUKXMBK0MYNFEREEQTvQV6ZH87xTCbJf+ZPvjkzA1Mlk3zvk28yk+QdouXXUMv10wHoMqDlBPp9BWYDS4GVwMzMDL8Cz4DXwJfYWGIBHALWAwtiO0pU/z1wFzgV2l8ogHnAbWBxaMOZ670FNgIffXGEADgGHPU1ZLRcsR+vis0HYCrww6i40LCmAT9dlX0AHgOrQnsyWu8JsLofALuB80ZFxYa1B7hQ9lBVBmgCmRvbk9H6nwBN5GMuFwAJ986gRsW6whIAgRh1uQDsAC43TKAv3J3AlVAAN4FNvhYbVn4L2BwK4DmwvGECfeG+AFZ0AALngEFlwD1Ar5d+VdcB24H5vqGrqdxEBqwBHo0QpJn5QSII2QFo2TqrZDRTQcgOQNqnAL8yQTABQCszrdDKrkFnggkAEn4EOJEBghkA0n4QOJMYgikA0n4AOJsQgjkA0r4PGE4EwSQAad8FXEoAwSwAadfq8+qAIZgGIO1bgBsDhGAegLRrK/uOA4LOI1xlIcuFRgCQkLXAfYeiP8CkELUldSYEgN/A5IkMoOoV0Nb2yJVkLAfzGdDqSbB0w7IY4roWSWYzQAcwFwf4+es1bRLAfuBcAvHqwhyAVi+GZLQ4nWjkzb0Crd4Qaf2W2AzgW0nq1/Wpq/o5yj4JvgMWZRJv5iugszmNRO9KMfKmJsGnwEvgYbEJopOiVh2NxS5g6qyffQ6oU0w/bUUBuAZs7acXw89cB7b9H5/LIjPe7SeLHDYUNtpRsbkAyAz92aKKccQ0p8xMXWWT03fbqik6loNM1AvLHqoCoAXLydiejNY/7HKQ+6yybxrkEHexlx1niavQB0B/ah+MjmpoWPrRcpo+fQDUiazyLlNDaBC56lWtPv/FFAJA9WSb1yluU5zjcojvrbLJ90YkFECvvjYwdVs1UcsLLFd4qTM89itQlbYCsKy4p+fK76Lf78Cr4h5jhvbFFpsBvvYaV94BaNyQ1RxwlwE1A21cc38ByWCuQXfj/esAAAAASUVORK5CYII=" alt="">
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
        // 设置当前索引
        setIndex(index) {
            this.viewIndex = index
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
