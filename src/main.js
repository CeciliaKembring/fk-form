import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueMatomo from 'vue-matomo'

const app = createApp(App)

app.use(router)

app.use(VueMatomo, {
    host: 'https://studenter.miun.se/~ceke2200/writeable/matomo/',
    siteId: 1
})

app.mount('#app')
