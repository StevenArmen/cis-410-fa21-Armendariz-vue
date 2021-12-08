import { createApp } from 'vue'
import App from './App'
import axios from "axios"

import myRouter from "./Routes"
import theStore from "./store"
axios.defaults.baseURL = "https://cis410-fa21-arevalo-api.azurewebsites.net"

const myApp = createApp(App);
myApp.use(myRouter);
myApp.use(theStore);
myApp.mount('#app');

