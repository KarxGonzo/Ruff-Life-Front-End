<template>
   <section class="py-5">
    <div class="container px-5">
       <div class="row gx-5 justify-content-center">
          <div class="col-lg-8 col-xl-6">
              <div class="text-center">
                <h2 class="fw-bolder">See your Pet's Favorite Snack!</h2>
                  <div class="card h-100 shadow border-0">
                  <img v-bind:src="pet.picture" class="card-img-top"  alt="..." />
                      <div class="card-body p-4">
                        <a class="text-decoration-none link-dark -link" href="#!"><div class="h5 card-title mb-3">{{`${pet.name}`}}</div></a>
                        <p class="card-text mb-0" v-for= "snack in pet.favorite_snacks">{{ (snack.item.name) }} {{JSON.parse(snack.item.picture)}}</p>
                        <!-- <p class="card-text mb-0">{{ pet.favorite_snacks[0].item.picture }}</p> -->
                        </div>
                        <div class="card-footer p-4 pt-0 bg-transparent border-top-0">
                        </div>
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