import './assets/main.css'

import { createApp } from 'vue'
import VueMatomo from 'vue-matomo'
import App from './App.vue'
import router from './router'

createApp(App)
.use(VueMatomo, {
    // Configure your matomo server and site by providing
    host: '{YOUR_MATOMO_INSTANCE_URL}',
    siteId: {YOUR_SITE_ID},
})
.mount('#app')


window._paq.push(['trackPageView']); //To track pageview


