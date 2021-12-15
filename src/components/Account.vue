<template>
  <div>
    <h1>Account</h1>
    <hr />
    <h3>{{ firstName }}'s Book Checkouts</h3>

    <p v-if="accountError" class="text-danger">
      Cannot get your account information, please try again later.
    </p>

    <table v-if="checkoutsByUser" class="table">
      <thead>
        <th>Book</th>
        <th>Date Checked out</th>
        <th>Date Due</th>
      </thead>
      <tbody>
        <tr v-for="thisCheckout in checkoutsByUser" :key="thisCheckout.CheckoutPK">
          <th>
            <router-link :to="`/books/${thisCheckout.CheckoutPK}`">{{
              thisCheckout.Title
            }}</router-link>
          </th>
          <th>{{ thisCheckout.CheckoutDate }}</th>
          <th>{{ thisCheckout.ReturnDate }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      checkoutsByUser: null,
      accountError: false,
    };
  },
  computed: {
    firstName() {
      console.log("here is the store so far", this.$store.state);
      return this.$store.state.user.FirstName;
    },
  },
  created() {
    axios
      .get("/checkouts/me", {
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`,
        },
      })
      .then((theResponse) => {
        console.log("here is the response", theResponse);
        this.checkoutsByUser = theResponse.data;
      })
      .catch(() => {
        this.accountError = true;
      });
  },
};
</script>

<style></style>