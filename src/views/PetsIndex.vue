<template>
  <div class="PetsIndex">
    <h1>All Pets</h1>
    <div v-for="pet in pets" v-bind:key="pet.id">
      <h2>{{ pet.name }}</h2>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      pets: [],
    };
  },
  created: function () {
    this.indexPets();
  },
  methods: {
    indexPets: function () {
      axios.get("http://localhost:3000/pets").then((response) => {
        console.log("Pets Index", response);
        this.pets = response.data;
      });
    },
  },
};
</script>