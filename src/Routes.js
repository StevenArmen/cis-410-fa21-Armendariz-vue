import{createRouter, createWebHistory} from 'vue-router';

import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Books from "./components/Books.vue";
import BookDetails from "./components/BookDetails.vue";
import NotFound from "./components/NotFound.vue";
import BookCheckout from "./components/BookCheckout.vue";
import Signup from "./components/Signup.vue";
import Account from "./components/Account.vue";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: "/", component: Home},
        {path: "/account", component: Account},
        {path: "/login", component: Login},
        {path: "/books", component: Books},
        {path: "/books/:pk", component: BookDetails},
        {path: "/account", component: Account, 
        children:[
            {path: "Checkout", component: BookCheckout},
        ]},
        {path: "/signup", component: Signup},
        {path: "/:invalidroute(.*)", component: NotFound},
        
    ]
});

export default router;