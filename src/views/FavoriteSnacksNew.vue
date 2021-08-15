<template>
  <div class="pets-new">
    <form v-on:submit.prevent="submit()">
      <h1>Create a new Favorite Snack</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Pet_ID:</label>
        <input type="text" v-model="newFavoriteSnackParams.pet_id" />
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
    };
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