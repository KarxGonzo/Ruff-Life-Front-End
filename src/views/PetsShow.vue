<template>
            <!-- Blog preview section-->
            <section class="py-5">
                <div class="container px-5 my-5">
                    <div class="row gx-5 justify-content-center">
                        <div class="col-lg-8 col-xl-6">
                            <div class="text-center">
                               <img class="card-img-top" img v-bind:src="pet.picture" />
                                <p class="lead fw-normal text-muted mb-5">Name: {{ pet.name }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="row gx-5">
                        <div class="col-lg-4 mb-5">
                            <div class="card h-100 shadow border-0">
                                <img class="card-img-top" img v-bind:src="pet.picture" />
                                <div class="card-body p-4">
                                    <a class="text-decoration-none link-dark stretched-link" href="#!"><h5 class="card-title mb-3">Favorite Snack: {{ pet.favorite_snacks[0][1]}}</h5></a>
                                    <p class="card-text mb-0">Favorite Snacks: {{ pet.favorite_snacks }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Showing you your pet!",
      pet: [],
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