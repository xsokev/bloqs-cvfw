import Vue from 'vue';
import Framework7 from 'framework7';
import Framework7Vue from 'framework7-vue';

import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css';
import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css';
// import Framework7Theme from 'framework7/dist/css/framework7.material.min.css';
// import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css';

// Import App Custom Styles
import AppStyles from './assets/sass/main.scss';

import Routes from './routes.js';
import App from './main.vue';

Vue.use(Framework7Vue);

new Vue({
  el: '#app',
  template: '<app/>',
  framework7: {
    root: '#app',
    /* Uncomment to enable Material theme: */
    // material: true,
    routes: Routes,
    scrollTopOnStatusbarClick: true
  },
  components: {
    app: App
  }
})
