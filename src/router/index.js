import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import duo1 from '@/components/duo1'
import duo2 from '@/components/duo2'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }, {
        path: '/home',
        // name: 'Home',
        component: Home,
        children: [{
            path: '/',
            name:'home',
            component: Home,
            }, {
                path: 'hi1',
                name:'hi1',
                component: Hi1,
            }, {
                path: 'hi2',
                name:'hi2',
                component: Hi2,
        }]
  },{
      path:'/duo1',
      name:'duo1',
      components:{
            default: duo1,
            a:duo1,
            b:duo2

      }

  }
]
})
