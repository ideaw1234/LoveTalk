import { createApp } from 'vue'
import App from './App.vue'
import '/index.css'
import router from './router'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

