import Vue from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.min.css";

/* global registration of components */

import AppStartScreen from "./components/StartScreen";
import AppProgressBar from "./components/ProgressBar";
import AppQuestion from "./components/Question";
import AppMessage from "./components/Message";
import AppResultScreen from "./components/ResultScreen";

Vue.component('AppStartScreen', AppStartScreen)
Vue.component('AppProgressBar', AppProgressBar)
Vue.component('AppQuestion', AppQuestion)
Vue.component('AppMessage', AppMessage)
Vue.component('AppResultScreen', AppResultScreen)

new Vue({
  el: '#app',
  render: h => h(App)
})
