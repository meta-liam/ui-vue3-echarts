import { createApp } from 'vue'
import App from './App.vue'
import createRouter from './routes/route'
import './index.css'

createApp(App)
.use(createRouter())
.mount('#app')
