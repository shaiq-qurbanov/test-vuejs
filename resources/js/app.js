require('./bootstrap');
import { createApp } from 'vue'
import Welcome from './components/Welcome'
import router from './router/router'
import 'bootstrap' // ←


const app = createApp({})
app.component('welcome', Welcome)
app.use(router)
app.mount('#app')
