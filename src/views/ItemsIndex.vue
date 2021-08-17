<template>
  <div class="ItemsIndex">
    <h1>See All Items</h1>
    <div v-for="item in items">
      <h2>{{ item.id }}</h2>
      <h2> {{ item.name }} </h2>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      items: [],
    };
  },
  created: function () {
    this.indexItems();
  },
  methods: {
    indexItems: function () {
      axios.get("http://localhost:3000/items").then((response) => {
        console.log("See Items Index", response);
        this.items = response.data;
      });
    },
  },
};
</script>