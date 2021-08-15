<template>
  <div class="PetsEdit">
    Name: <input type="text" v-model="editPetParams.name">
    <p><button v-on:click="updatePet()">Update Pet</button></p>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Update your Pet!",
      editPetParams: {},
    };
  },
  created: function () {
    this.petsShow();
  },
  methods: {
    petsShow: function () {
      console.log("showing a pet");
      axios.get(`http://localhost:3000/pets/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.editPetParams = response.data;
      });
    },
    updatePet: function () {
      console.log("updating pet");
      axios.patch(`/pets/${this.$route.params.id}`, this.editPetParams).then((response) => {
        console.log(response.data);
        this.$router.push("/pets");
      });
    },
  },
};
</script>