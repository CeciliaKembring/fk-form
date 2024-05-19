import Vue from 'vue';
import App from './App.vue';
import VueMatomo from 'vue-matomo';

Vue.config.productionTip = false;

Vue.use(VueMatomo, {
  // Configure your Matomo server and site
  host: 'https://studenter.miun.se/~ceke2200/writeable/matomo/',
  siteId: 1,


  router: router,


  requireConsent: false,


  enableLinkTracking: true,


  requireCookieConsent: false,


  trackInitialView: true,


  ignoreRoutes: [],


  debug: false,
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
