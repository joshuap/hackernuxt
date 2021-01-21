import Vue from 'vue'
import HoneybadgerVue from '@honeybadger-io/vue'

const config = {
  apiKey: process.env.HONEYBADGER_API_KEY,
  environment: process.env.NODE_ENV,
  reportData: true
}

Vue.use(HoneybadgerVue, config)

// This is handy for testing; remove it in production.
window.Honeybadger = Vue.$honeybadger;
