<template>
  <div class="row justify-content-center"><div class="col-md-10 col-lg-7">
    <div><h1>Home</h1><br><div class="my-container" >
      <img src="https://images-na.ssl-images-amazon.com/images/I/21164+rhPSL._SX331_BO1,204,203,200_.jpg">
      <img src="https://images-na.ssl-images-amazon.com/images/I/41+L9Q+rCLL._SX277_BO1,204,203,200_.jpg" >
      <img src="https://m.media-amazon.com/images/I/41nngxCNKxL.jpg"></div>

  </div>
 <img src="https://images-na.ssl-images-amazon.com/images/I/91pUKCpAzUL.jpg">
      <img src="https://images-na.ssl-images-amazon.com/images/I/51Pb-OAREFL.jpg" >
  </div>
 <div id="app" style ="padding-top: 5px">
            <table class="darkTable">
                 <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Genre</th>
         
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="aBook in theBooks" :key="aBook.BookID">
          <th>{{ aBook.Title }}</th>
          <th>{{ aBook.FirstName +" "+ aBook.LastName }}</th>
          <th>{{ aBook.Genre }}</th>
        
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

<style>
img {
    float: left;
    width:  150px;
    height: 250px;
    padding-top: 5px;
    padding-right: 5px
}
   
      table.darkTable {
        padding-top: 5px;
  font-family: "Arial Black", Gadget, sans-serif;
  border: 2px solid #000000;
  background-color: #4A4A4A;
  width: 100%;
  height: 200px;
  text-align: center;
  border-collapse: collapse;
}
table.darkTable td, table.darkTable th {
  border: 1px solid #4A4A4A;
  padding: 3px 2px;
}
table.darkTable tbody td {
  padding-top: 5px;
  font-size: 13px;
  color: #E6E6E6;
}
table.darkTable tr:nth-child(even) {
  background: #888888;
}
table.darkTable thead {
  background: #000000;
  border-bottom: 3px solid #000000;
}
table.darkTable thead th {
  font-size: 15px;
  font-weight: bold;
  color: #E6E6E6;
  text-align: center;
  border-left: 2px solid #4A4A4A;
}
table.darkTable thead th:first-child {
  border-left: none;
}

table.darkTable tfoot {
  font-size: 12px;
  font-weight: bold;
  color: #E6E6E6;
  background: #000000;
  background: -moz-linear-gradient(top, #404040 0%, #191919 66%, #000000 100%);
  background: -webkit-linear-gradient(top, #404040 0%, #191919 66%, #000000 100%);
  background: linear-gradient(to bottom, #404040 0%, #191919 66%, #000000 100%);
  border-top: 1px solid #4A4A4A;
}
table.darkTable tfoot td {
  font-size: 12px;
}</style>
