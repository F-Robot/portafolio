import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import { loadFonts } from './plugins/webfontloader'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
  faInstagram,
  faLinkedin,
  faTwitter,
  faGithub,
  faVuejs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'

import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(
  faInstagram,
  faLinkedin,
  faTwitter,
  faGithub,
  faXmark,
  faVuejs,
  faReact,
  faBars
)

const app = createApp(App)

app
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(createPinia())
  .use(router)
  .mount('#app')

loadFonts()
