<template>
  <div class="about">
    <h2>{{  message }}</h2> 
    <div id="nav">
      <router-link to="/pets">Pets Index</router-link> |
      <router-link to="/pets/new">Pets New</router-link> |
      <router-link to="/pets/:id/edit">Pets Edit</router-link> |
      <router-link to="/pets/:id">Show a Pet</router-link> |
      <router-link to="/items/new">Create a New Item</router-link> |
      <router-link to="/shopping_histories/new">Create a New Shopping History Event</router-link> |
       <router-link to="/shopping_histories">See Index of Shopping Histories</router-link> |
      <router-link to="/favorite_snacks/new">Create a New Favorite Snack </router-link> |
      <router-link to="/items/:id">Get an Item </router-link> |
      <router-link to="/items">See All Items </router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style></style>

<script>
export default {
  data: function () {
    return {
      message: "Welcome to Petsource!",
    };
  },
  created: function () {},
  methods: {},
};
</script>