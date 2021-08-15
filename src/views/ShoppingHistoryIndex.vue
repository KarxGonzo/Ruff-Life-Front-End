<template>
  <div class="ShoppingHistoryIndex">
    <h1>All Shopping History Events</h1>
    <div v-for="shoppinghistory in shoppinghistory" v-bind:key="shoppinghistory.id">
      <h2>{{ shoppinghistory.date }}</h2>
      <h2>{{ shoppinghistory.item_id }}</h2>
      <h2>{{ shoppinghistory.quantity}}</h2>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      shoppinghistory: [],
    };
  },
  created: function () {
    this.indexShoppingHistory();
  },
  methods: {
    indexShoppingHistory: function () {
      axios.get("http://localhost:3000/shopping_histories").then((response) => {
        console.log("Shopping History Index", response);
        this.shoppinghistory = response.data;
      });
    },
  },
};
</script>