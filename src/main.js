import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios"

import myRouter from "./Routes.js"
import theStore from "./store.js"
axios.defaults.baseURL = "https://cis410-fa21-arevalo-api.azurewebsites.net"

const myApp = createApp(App);
myApp.use(myRouter);
myApp.use(theStore);
myApp.mount('#app');

//