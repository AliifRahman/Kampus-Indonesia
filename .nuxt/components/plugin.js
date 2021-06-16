import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  AboutBanner: () => import('../..\\components\\AboutBanner.vue' /* webpackChunkName: "components/about-banner" */).then(c => wrapFunctional(c.default || c)),
  AboutOne: () => import('../..\\components\\AboutOne.vue' /* webpackChunkName: "components/about-one" */).then(c => wrapFunctional(c.default || c)),
  AboutTwo: () => import('../..\\components\\AboutTwo.vue' /* webpackChunkName: "components/about-two" */).then(c => wrapFunctional(c.default || c)),
  Accordion: () => import('../..\\components\\Accordion.vue' /* webpackChunkName: "components/accordion" */).then(c => wrapFunctional(c.default || c)),
  BlogDetailsWrapper: () => import('../..\\components\\BlogDetailsWrapper.vue' /* webpackChunkName: "components/blog-details-wrapper" */).then(c => wrapFunctional(c.default || c)),
  BlogOne: () => import('../..\\components\\BlogOne.vue' /* webpackChunkName: "components/blog-one" */).then(c => wrapFunctional(c.default || c)),
  BlogWrapper: () => import('../..\\components\\BlogWrapper.vue' /* webpackChunkName: "components/blog-wrapper" */).then(c => wrapFunctional(c.default || c)),
  BrandLogoCarousel: () => import('../..\\components\\BrandLogoCarousel.vue' /* webpackChunkName: "components/brand-logo-carousel" */).then(c => wrapFunctional(c.default || c)),
  Breadcrumb: () => import('../..\\components\\Breadcrumb.vue' /* webpackChunkName: "components/breadcrumb" */).then(c => wrapFunctional(c.default || c)),
  CaseDetailsCarousel: () => import('../..\\components\\CaseDetailsCarousel.vue' /* webpackChunkName: "components/case-details-carousel" */).then(c => wrapFunctional(c.default || c)),
  CaseDetailsContent: () => import('../..\\components\\CaseDetailsContent.vue' /* webpackChunkName: "components/case-details-content" */).then(c => wrapFunctional(c.default || c)),
  CaseDetailsNavigation: () => import('../..\\components\\CaseDetailsNavigation.vue' /* webpackChunkName: "components/case-details-navigation" */).then(c => wrapFunctional(c.default || c)),
  CaseStudies: () => import('../..\\components\\CaseStudies.vue' /* webpackChunkName: "components/case-studies" */).then(c => wrapFunctional(c.default || c)),
  CommentForm: () => import('../..\\components\\CommentForm.vue' /* webpackChunkName: "components/comment-form" */).then(c => wrapFunctional(c.default || c)),
  CommentFormWrapper: () => import('../..\\components\\CommentFormWrapper.vue' /* webpackChunkName: "components/comment-form-wrapper" */).then(c => wrapFunctional(c.default || c)),
  ContactWrapper: () => import('../..\\components\\ContactWrapper.vue' /* webpackChunkName: "components/contact-wrapper" */).then(c => wrapFunctional(c.default || c)),
  FaqSection: () => import('../..\\components\\FaqSection.vue' /* webpackChunkName: "components/faq-section" */).then(c => wrapFunctional(c.default || c)),
  Footer: () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  Header: () => import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c)),
  Hero: () => import('../..\\components\\Hero.vue' /* webpackChunkName: "components/hero" */).then(c => wrapFunctional(c.default || c)),
  MobileNavigation: () => import('../..\\components\\MobileNavigation.vue' /* webpackChunkName: "components/mobile-navigation" */).then(c => wrapFunctional(c.default || c)),
  Navigation: () => import('../..\\components\\Navigation.vue' /* webpackChunkName: "components/navigation" */).then(c => wrapFunctional(c.default || c)),
  OffCanvasMobileMenu: () => import('../..\\components\\OffCanvasMobileMenu.vue' /* webpackChunkName: "components/off-canvas-mobile-menu" */).then(c => wrapFunctional(c.default || c)),
  ScrollTop: () => import('../..\\components\\ScrollTop.vue' /* webpackChunkName: "components/scroll-top" */).then(c => wrapFunctional(c.default || c)),
  ServiceCarousel: () => import('../..\\components\\ServiceCarousel.vue' /* webpackChunkName: "components/service-carousel" */).then(c => wrapFunctional(c.default || c)),
  ServiceDetailsContent: () => import('../..\\components\\ServiceDetailsContent.vue' /* webpackChunkName: "components/service-details-content" */).then(c => wrapFunctional(c.default || c)),
  ServiceOne: () => import('../..\\components\\ServiceOne.vue' /* webpackChunkName: "components/service-one" */).then(c => wrapFunctional(c.default || c)),
  TeamSection: () => import('../..\\components\\TeamSection.vue' /* webpackChunkName: "components/team-section" */).then(c => wrapFunctional(c.default || c)),
  TestimonialOne: () => import('../..\\components\\TestimonialOne.vue' /* webpackChunkName: "components/testimonial-one" */).then(c => wrapFunctional(c.default || c)),
  WidgetPostCategoryCard: () => import('../..\\components\\WidgetPostCategoryCard.vue' /* webpackChunkName: "components/widget-post-category-card" */).then(c => wrapFunctional(c.default || c)),
  WidgetProfileCard: () => import('../..\\components\\WidgetProfileCard.vue' /* webpackChunkName: "components/widget-profile-card" */).then(c => wrapFunctional(c.default || c)),
  WidgetSearchCard: () => import('../..\\components\\WidgetSearchCard.vue' /* webpackChunkName: "components/widget-search-card" */).then(c => wrapFunctional(c.default || c)),
  WidgetTagCard: () => import('../..\\components\\WidgetTagCard.vue' /* webpackChunkName: "components/widget-tag-card" */).then(c => wrapFunctional(c.default || c)),
  WorkingProcess: () => import('../..\\components\\WorkingProcess.vue' /* webpackChunkName: "components/working-process" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
