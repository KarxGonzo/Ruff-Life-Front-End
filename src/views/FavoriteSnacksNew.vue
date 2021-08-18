<template>
  <div class="pets-new">
    <form v-on:submit.prevent="submit()">
      <h1>Create a new Favorite Snack</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
      <p>Pet ID: {{ pet_id }}</p>
      <select v-model="newFavoriteSnackParams.pet_id">
        <option v-for="pet in pets" v-bind:value="pet.id">{{ pet.name }}</option>
      </select>
      <br>

      <p>Item ID: {{ item_id }}</p>
      <select v-model="newFavoriteSnackParams.item_id">
        <option v-for="item in items" v-bind:value="item.id">{{ item.name }}</option>
      </select>
      <br>

      </div>
      <div>
        <label>Item_ID:</label>
        <input type="text" v-model="newFavoriteSnackParams.picture" />
      </div>
       <div>
        <label>Rating:</label>
        <input type="integer" v-model="newFavoriteSnackParams.rating" />
      </div>
      <input type="submit" value="Submit" />
    </form>
    </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newFavoriteSnackParams: {},
      errors: [],
      pets: [],
      pet_id: 0,
      items: [],
      item_id: 0,
    };
  },
  created: function () {
    axios.get("/pets").then((response) => {
      console.log(response.data);
      this.pets = response.data;
    });
    axios.get("/items").then((response) => {
      console.log(response.data);
      this.items = response.data;
    });
  },
  methods: {
    submit: function () {
      axios
        .post("/favorite_snacks", this.newFavoriteSnackParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/about");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>