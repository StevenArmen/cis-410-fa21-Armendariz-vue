import{createRouter, createWebHistory} from 'vue-router';

import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Books from "./components/Books.vue";
import BookDetails from "./components/BookDetails.vue";
import NotFound from "./components/NotFound.vue";
import BookCheckout from "./components/BookCheckout.vue";
import Signup from "./components/Signup.vue";
import Account from "./components/Account.vue";
import myStore from "./store.js";

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: "/", component: Home },
      {
        path: "/account",
        component: Account,
        beforeEnter(to, from, next) {
          if (myStore.state.token) {
            next();
          } else {
            next("/login");
          }
        },
      },
      { path: "/login", component: Login },
      { path: "/books", component: Books },
      {
        path: "/books/:pk",
        component: BookDetails,
        children: [{ path: "Checkout", component: BookCheckout }],
      },
      { path: "/signup", component: Signup },
      { path: "/:invalidroute(.*)", component: NotFound },
    ],
  });
  
  export default router;