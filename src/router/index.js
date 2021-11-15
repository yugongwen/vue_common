
import Vue from 'vue';
import Router from 'vue-router'
import oneHome from '../views/oneHome'
Vue.use(Router)
export const constantRoutes =[{
    path:'/',
    component:oneHome,

}]
export default new Router({
    mode:'history',
    routes:constantRoutes
})