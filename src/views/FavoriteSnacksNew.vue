<template>
  <section class="py-5">
    <form v-on:submit.prevent="submit()">
      <ul> <li v-for="error in errors" v-bind:key="error">{{ error }}</li></ul>
                <div class="container px-5">
                    <!-- Contact form-->
                    <div class="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                        <div class="text-center mb-5">
                            <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-envelope"></i></div>
                            <p class="lead fw-normal text-muted mb-0">Add a New Snack</p>
                        </div>
                        <div class="row gx-5 justify-content-center">
                            <div class="col-lg-8 col-xl-6">
                                    <!-- Pet input-->
                                    <label for="pet-select">Choose a Pet:</label>
                                    <div class="form-floating mb-3">
                                        <select 
                                        class="form-control" 
                                        id="name" 
                                        type="text" 
                                        v-model="newFavoriteSnackParams.pet_id"
                                        >
                                        <option disabled value=" ">Please Select a Pet</option>
                                        <option v-for="pet in pets" v-bind:value="pet.id">{{ pet.name }}</option>
                                        </select>
                                    </div>
                                    <!-- Item Input-->
                                    <label for="item-select">Choose an Item:</label>
                                    <div class="form-floating mb-3">
                                        <select 
                                        class="form-control" 
                                        id="item" 
                                        type="string" 
                                        placeholder="Item"
                                        v-model="newFavoriteSnackParams.item_id"
                                        >
                                        <option disabled value=" ">Please Select an Item</option>
                                        <option v-for="item in items" v-bind:value="item.id">{{ item.name }}</option>
                                        </select>
                                    </div>
                                    <!-- Rating Input-->
                                    <label for="rating-input">Enter a Rating:</label>
                                    <div class="form-floating mb-3">
                                        <input 
                                        class="form-control" 
                                        id="rating" 
                                        type="integer" 
                                        placeholder="Rating" 
                                        v-model="newFavoriteSnackParams.rating" />
                                    </div>
                                    <div class="d-grid"><button class="btn btn-primary btn-lg" id="submitButton" type="submit">Submit</button></div>
                            </div>
                        </div>
                    </div>
                </div>
        </form>
    </section>
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
    axios.get(`/pets/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
    });
  },
  methods: {
    submit: function () {
      axios
        .post("/favorite_snacks", this.newFavoriteSnackParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push(`/pets/`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>