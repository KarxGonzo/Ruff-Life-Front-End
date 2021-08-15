<template>
  <div class="pets-show">
    <h1>{{ message }}</h1>
    <h1>id: {{ pet.id }}</h1>
    <h1>name: {{ pet.name }}</h1>
    <h1>Picture: {{ pet.picture }}</h1>
    <p>user_id: {{ $parent.getUserId() }}</p>
    <p>user_id: {{ pet.user_id }}</p>
    <router-link v-if="pet.user_id == $parent.getUserId()" v-bind:to="`/pets/${pet.id}/edit`">Edit</router-link>
    <p><img v-bind:src="pet.image_url"></p>

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
      message: "Showing you your pets!",
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