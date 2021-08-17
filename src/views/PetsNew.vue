<template>
  <div class="pets-new">
    <form v-on:submit.prevent="submit()">
      <h1>Create a new Pet</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Name:</label>
        <input type="text" v-model="newPetParams.name" />
      </div>
      <div>
        <label>Picture:</label>
        <input type="text" v-model="newPetParams.picture" />
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
      newPetParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/pets", this.newPetParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/pets");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>