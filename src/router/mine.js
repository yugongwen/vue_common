
import Vue from 'vue';
import Router from 'vue-router'
import happymine from '../views/pages/mine/happymine.vue'
Vue.use(Router)
export const constantRoutes =[{
    path:'/',
    component:happymine,

}]
export default new Router({
    mode:'history',
    routes:constantRoutes
})