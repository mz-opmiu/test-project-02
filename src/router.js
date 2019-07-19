import Vue from 'vue'
import Router from 'vue-router'
import VueMeta from 'vue-meta'
import isMobile from '@/js/utils/checkUserAgent.js'

Vue.use(Router)

Vue.use(VueMeta, {
  keyName: 'metaInfo',
  attribute: 'data-vue-meta',
  ssrAttribute: 'data-vue-meta-server-rendered',
  tagIDKeyName: 'vmid'
})

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/event01',
      name: 'event01',
      component: () =>
        isMobile()
          ? import('./event01/mobile/App.vue')
          : import('./event01/pc/App.vue')
    }
  ]
})
