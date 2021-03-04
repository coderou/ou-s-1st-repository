import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../views/About/About.vue'
import Home from '../views/Home/Home.vue'
import Messages from '../views/Messages/Messages.vue'
import News from '../views/News/News.vue'
import Content from '../views/Content/Content.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '/home/messages',
          component: Messages,
          children: [
            {
              name: 'Content',
              path: 'content/:id',
              component: Content,
              props($route) {
                return {
                  ...$route.params,
                  ...$route.query,
                }
              },
            },
          ],
        },
        {
          path: '/home/News',
          component: News,
        },
      ],
    },
    {
      path: '/about',
      component: About,
    },
    {
      path: '*',
      redirect: '/home',
    },
  ],
})

export default router
