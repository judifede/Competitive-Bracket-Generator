import { createApp } from 'vue'
import './style.css'
import { Toaster } from 'vue-sonner'
import { createVfm, VueFinalModal, ModalsContainer } from 'vue-final-modal'
import App from './App.vue'

const app = createApp(App)
const vfm = createVfm()

app.use(vfm)
app.component('VueFinalModal', VueFinalModal)
app.component('ModalsContainer', ModalsContainer)
app.component('Toaster', Toaster)

app.mount('#app')