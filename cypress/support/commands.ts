import { mount } from 'cypress/vue'
import PrimeVue from "primevue/config";

Cypress.Commands.add('mount', (component, options = {}) => {
  options.global = options.global || {}
  options.global.stubs = options.global.stubs || {}
  options.global.stubs['transition'] = false
  options.global.components = options.global.components || {}
  options.global.plugins = options.global.plugins || []

  options.global.plugins.push({
     install(app) {
       app.use(PrimeVue);
     },
   });

  return mount(component, options)
});