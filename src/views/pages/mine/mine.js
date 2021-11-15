import Vue from 'vue';
import mine from './mine.vue';
import router from '../../../router/mine'
Vue.config.productionTip =false;
new Vue({
    router,
    render: h => h(mine),
  }).$mount('#mine')