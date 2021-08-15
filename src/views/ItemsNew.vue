<template>
  <div class="pets-new">
    <form v-on:submit.prevent="submit()">
      <h1>Create a new item</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Name:</label>
        <input type="text" v-model="newItemParams.name" />
      </div>
      <div>
        <label>Picture:</label>
        <input type="text" v-model="newItemParams.picture" />
      </div>
       <div>
        <label>upc:</label>
        <input type="integer" v-model="newItemParams.upc" />
      </div>
       <div>
        <label>price:</label>
        <input type="integer" v-model="newItemParams.price" />
      </div>
       <div>
        <label>brand:</label>
        <input type="text" v-model="newItemParams.brand" />
      </div>
      <div>
        <label>merchant:</label>
        <input type="text" v-model="newItemParams.merchant" />
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
      newItemParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/items", this.newItemParams)
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