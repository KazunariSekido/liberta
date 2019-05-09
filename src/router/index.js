import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Contact from '@/components/transition/contact'
import Company from '@/components/transition/company'
import Recruit from '@/components/transition/recruit'
import Client from '@/components/transition/client'
import Feature from '@/components/transition/feature'
import Begginer from '@/components/transition/begginer.vue'
import Voice from '@/components/transition/voice'
import Register from '@/components/transition/register'
import Search from '@/components/transition/search'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/company',
      name: 'Company',
      component: Company
    },
    {
      path: '/recruit',
      name: 'Recruit',
      component: Recruit
    },
    {
      path: '/client',
      name: 'Client',
      component: Client
    },
    {
      path: '/feature',
      name: 'Feature',
      component: Feature
    },
    {
      path: '/begginer',
      name: 'Begginer',
      component: Begginer
    },
    {
      path: '/voice',
      name: 'Voice',
      component: Voice
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
