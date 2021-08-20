<template>
   <section class="py-5">
    <div class="container px-5">
      <h2 class="fw-bolder fs-5 mb-4">See your Pets! </h2>
          <div class="row gx-5">
            <div class="col-lg-4 mb-5">
              <div class="card h-100 shadow border-0" v-for= "pet in pets">
                  <img v-bind:src="pet.picture" class="card-img-top"  alt="..." />
                      <div class="card-body p-4">
                        <a class="text-decoration-none link-dark -link" href="#!"><div class="h5 card-title mb-3">{{`${pet.name}`}}</div></a>
                        <p class="card-text mb-0">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                        <div class="card-footer p-4 pt-0 bg-transparent border-top-0">
                        <div class="d-flex align-items-end justify-content-between">
                        <a class="btn btn-primary btn-lg px-4 me-sm-3" href="/pets/:id">See {{`${pet.name}` +`'s`}} Favorite Snacks </a>
                        </div></a>
                        <br>
                        <a class="btn btn-primary btn-lg px-4 me-sm-3" href="/favorite_snacks/new">Add a New Snack for {{`${pet.name}`}}  </a>
                        </div></a>
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