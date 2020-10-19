<!--
 * @Author: your name
 * @Date: 2020-09-29 10:45:04
 * @LastEditTime: 2020-10-05 16:52:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \card-tabs\examples\App.vue
-->
<template>
  <div id="app">
    <cardTabs :cards="cards">
      <div slot="card2" class="card1">
        <div>
          11111111111
        </div>
      </div>
    </cardTabs>
  </div>
</template>

<script>
import {cardTabs} from '../packages/index.js'

export default {
  name: 'App',
  data() {
    return {
      cards: [
        {
          // slotName: 'card1',
          url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=202925631,2725838857&fm=26&gp=0.jpg'
        },{
          slotName: 'card2'
        }, {
          url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3262742216,1287274998&fm=15&gp=0.jpg'
        }, {
          url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3262742216,1287274998&fm=15&gp=0.jpg'
        }, {
          url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3262742216,1287274998&fm=15&gp=0.jpg'
        }, {
          url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3262742216,1287274998&fm=15&gp=0.jpg'
        }, {
          url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3262742216,1287274998&fm=15&gp=0.jpg'
        }
      ]
    }
  },
  components: {
    cardTabs
  }
}
</script>

<style>

</style>
