import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCompositionApi from '@vue/composition-api'
Vue.use(VueCompositionApi)

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)

import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

// Require in a base component context
const requireComponent = require.context('./components/plugins/', true, /.vue$/)

requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName)

  // Get PascalCase name of component
  const componentName = upperFirst(camelCase(fileName.split('/').pop()))
  // Register component globally
  Vue.component(
    componentName.replace('Vue', ''),
    componentConfig.default || componentConfig
  )
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
