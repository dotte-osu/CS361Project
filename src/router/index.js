import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Compare from '../views/Compare.vue'
import Location from '../views/Locations/Location.vue'
import LocationDetails from '../views/Locations/LocationDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/compare',
    name: 'Compare',
    component: Compare
  },
  {
    path: '/location',
    name: 'Location',
    component: Location
  },
  {
    path: '/location/:locname',
    name: 'LocationDetails',
    component: LocationDetails
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
