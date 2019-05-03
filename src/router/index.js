import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Contact from '@/components/contact'
import Company from '@/components/company'
import Recruit from '@/components/recruit'
import Client from '@/components/client'
import Feature from '@/components/feature'
import Begginer from '@/components/begginer.vue'
import Voice from '@/components/voice'
import Register from '@/components/register'
import Search from '@/components/search'

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
