import { createApp } from "vue";
import { createPinia } from 'pinia'
import App from "./App.vue";
import router from "./router";
import i18n from './plugins/i18n'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
	components,
	directives,
})

const pinia = createPinia()

createApp(App).use(router).use(pinia).use(i18n).use(vuetify).mount("#app");
