<template>
  <div class="pets-show">
    <h1>{{ message }}</h1>
    <h1>id: {{ pet.id }}</h1>
    <h1>name: {{ pet.name }}</h1>
    <p><img v-bind:src="pet.picture"></p>

  </div>
</template>

<style>
img {
  width: 200px;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Showing you your pet!",
      pet: {},
    };
  },
  created: function () {
    this.petShow();
  },
  methods: {
    petShow: function () {
      console.log("getting a single pet");
      console.log(this.$route);
      axios.get(`/pets/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.pet = response.data;
      });
    },
  },
};
</script>