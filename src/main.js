import { createApp } from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css";
// Note: We'll need to update this to use bootstrap-vue-3 when we install it
// For now, we're using regular bootstrap CSS

const app = createApp(App);
app.mount('#app');
