import Vue from 'vue'
import Router from 'vue-router'
import signin from '@/components/pages/signin'
import Dashboard from '@/components/Dashboard'
import Products from '@/components/pages/Products'
import Orders from '@/components/pages/Orders'
import Coupon from '@/components/pages/coupon'
import CustomerOrder from '@/components/pages/CustomerOrder'
import CustomCheckout from '@/components/pages/CustomCheckout'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/signin'
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: Dashboard,
      children:[
        {
          path: 'products',
          name: 'products',
          component: Products,
          meta: { requiresAuth: true}
        },
        {
          path: 'coupon',
          name: 'coupon',
          component: Coupon,
          meta: { requiresAuth: true}
        },
        {
          path: 'orders',
          name: 'orders',
          component: Orders,
          meta: { requiresAuth: true}
        }
      ]
    },
    {
      path: '/signin',
      name: 'signin',
      component: signin
    },
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      children:[
        {
          path: 'customer_order',
          name: 'CustomerOrder',
          component: CustomerOrder,
        },
        {
          path: 'custom_checkout/:orderId',
          name: 'custom_checkout',
          component: CustomCheckout,
        }
      ]
    },
  ]
})
