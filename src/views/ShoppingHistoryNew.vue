<template>
  <div class="Shopping-History-New">
    <form v-on:submit.prevent="submit()">
      <h1>Create a new Shopping History Event</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Date:</label>
        <input type="text" v-model="newshoppinghistoryParams.date" />
      </div>
      <div>
        <label>item_id:</label>
        <input type="integer" v-model="newshoppinghistoryParams.item_id" />
      </div>
       <div>
        <label>quantity:</label>
        <input type="integer" v-model="newshoppinghistoryParams.quantity" />
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
      newshoppinghistoryParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/shopping_histories", this.newItemParams)
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