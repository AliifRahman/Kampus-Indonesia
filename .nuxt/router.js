import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _aa4eb26e = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _287aa28b = () => interopDefault(import('..\\pages\\blog-details.vue' /* webpackChunkName: "pages/blog-details" */))
const _04e2271d = () => interopDefault(import('..\\pages\\blog-left-sidebar.vue' /* webpackChunkName: "pages/blog-left-sidebar" */))
const _261d9fb4 = () => interopDefault(import('..\\pages\\blog-right-sidebar.vue' /* webpackChunkName: "pages/blog-right-sidebar" */))
const _4fdfedce = () => interopDefault(import('..\\pages\\case-details.vue' /* webpackChunkName: "pages/case-details" */))
const _59c6ecdc = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _75f2e6e6 = () => interopDefault(import('..\\pages\\service-details.vue' /* webpackChunkName: "pages/service-details" */))
const _6adefce4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _aa4eb26e,
    name: "about"
  }, {
    path: "/blog-details",
    component: _287aa28b,
    name: "blog-details"
  }, {
    path: "/blog-left-sidebar",
    component: _04e2271d,
    name: "blog-left-sidebar"
  }, {
    path: "/blog-right-sidebar",
    component: _261d9fb4,
    name: "blog-right-sidebar"
  }, {
    path: "/case-details",
    component: _4fdfedce,
    name: "case-details"
  }, {
    path: "/contact",
    component: _59c6ecdc,
    name: "contact"
  }, {
    path: "/service-details",
    component: _75f2e6e6,
    name: "service-details"
  }, {
    path: "/",
    component: _6adefce4,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
