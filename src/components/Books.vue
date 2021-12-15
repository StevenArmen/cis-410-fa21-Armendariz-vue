<template>
  <div>
    <h1>Books</h1>
    <hr />
    <table class="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Genre</th>
          <th>Condition</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="aBook in theBooks" :key="aBook.BookID">
          <th>{{ aBook.Title }}</th>
          <th>{{ aBook.FirstName +" "+ aBook.LastName }}</th>
          <th>{{ aBook.Genre }}</th>
          <th>{{ aBook.Condition }}</th>
          <th>
            <router-link :to="`/books/${aBook.BookID}`"
              ><button class="btn btn-primary">Details</button></router-link
            >
          </th>
        </tr>
      </tbody>

      <tbody></tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    theBooks() {
      return this.$store.state.books;
    },
  },
};
</script>

<style></style>