import { createStore } from "vuex";
import axios from "axios";
import myRoutes from "./Routes.js";

export default createStore({
  state: {
    token: null,
    user: null,
    books: [],
  },
  mutations: {
    storeTokenInApp(state, myToken) {
      state.token = myToken;
    },

    storeUserInApp(state, theUser) {
      state.user = theUser;
    },
    storeBooks(state, books) {
      state.books = books;
    },
    clearAuthData(state) {
      state.token = null;
      state.user = null;
    },
  },
  actions: {
    getBooks({ commit }) {
      axios.get("/books").then((aResponse) => {
        console.log("response in /books", aResponse);
        commit("storeBooks", aResponse.data);
      });
    },
    logout({ commit, state }) {
      axios
        .post("/customers/logout", null, {
          headers: { Authorization: `Bearer ${state.token}` },
        })
        .then(() => {
          commit("clearAuthData");
          localStorage.clear("token");
          localStorage.clear("expiration");
          myRoutes.replace("/");
        })
        .catch(() => {
          console.log("error in loggins out");
        });
    },
    tryAutoLogin({ commit }) {
      let token = localStorage.getItem("token");
      if (!token) {
        return;
      }

      let expirationDate = new Date(localStorage.getItem("expiration"));
      let now = new Date();
      if (now >= expirationDate) {
        return;
      }

      axios
        .get("/customers/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((theResponse) => {
          commit("storeUserInApp", theResponse.data);
          commit("storeTokenInApp", token);
          this.dispatch("setLogoutTimer");
        })
        .catch(() => {
          myRoutes.replace("/");
        });
    },
    setLogoutTimer({ dispatch }) {
      let expirationDate = new Date(localStorage.getItem("expiration"));
      let now = new Date();
      let timeLeft = expirationDate - now;
      setTimeout(() => {
        dispatch("logout");
      }, timeLeft);
    },
  },
});