<template>
  <div class="home bg-dark">
    <br>
    <div class="card mb-3" style="max-width: 800px;" v-for="pet in pets">
      <div class="row g-0">
        <div class="col-sm-4">
          <img v-bind:src="pet.picture" class="img-fluid rounded-start" alt="">
        </div>
        <div class="col-sm-8">
          <div class="card-body">
            <h5 class="card-title">{{`${pet.name}`}}</h5>
              <a
              type="button" 
              class="btn btn-primary btn-sm" 
              style="background-color: #333333;" 
              v-bind:href="`/pets/${pet.id}`" 
              role="button"> See Favorite Snacks</a>
            <div>
            </div>
          </div>
        </div>
      </div>
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