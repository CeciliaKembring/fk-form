import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueMatomo from 'vue-matomo'

const app = createApp(App)

app.use(router)

app.use(VueMatomo, {
    host: '{YOUR_MATOMO_INSTANCE_URL}',
    siteId: {YOUR_SITE_ID},
})

app.mount('#app')
