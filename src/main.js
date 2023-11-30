import { createApp } from 'vue'
import App from './App.vue'

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { createRouter, createWebHistory } from 'vue-router';
import ProjectList from './components/pages/ProjectList';
import ProjectCreate from './components/pages/ProjectCreate';
import ProjectEdit from './components/pages/ProjectEdit';
import ProjectShow from './components/pages/ProjectShow';
  
axios.defaults.baseURL = "https://mock-api.binaryboxtuts.com"; // process.env.VUE_APP_API_URL
axios.interceptors.request.use(function (config) {
  config.headers['X-Binarybox-Api-Key'] = "binarybox_api_key_VzO8M31mfzUAW58MBuDkyVX68IWufWJWW7m5BqqSi3FSXHHwKeHjuXQzOC7QdACzffplQ93npFb6Q3sMQLeImXxkz3IHQDkWy1yt"; //process.env.VUE_APP_API_KEY;
  return config;
});
  
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: ProjectList },
    { path: '/create', component: ProjectCreate },
    { path: '/edit/:id', component: ProjectEdit },
    { path: '/show/:id', component: ProjectShow },
  ],
});
  
createApp(App).use(router).mount('#app');
