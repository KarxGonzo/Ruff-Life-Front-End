<template>
  <section class="py-5">
    <div class="container px-5">
       <div class="row gx-5 justify-content-center">
          <div class="col-lg-8 col-xl-6">
              <div class="text-center">
                <h2 class="fw-bolder">List of All Items Purchased!</h2>
                  <div class="card h-100 shadow border-0" v-for= "item in items">
                  <img v-bind:src="item.picture" class="card-img-top"  alt="..." />
                      <div class="card-body p-4">
                        <a class="text-decoration-none link-dark -link" href="#!"><div class="h5 card-title mb-3">{{`${item.name}`}}</div></a>
                        <p class="card-text mb-0">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
      items: [],
    };
  },
  created: function () {
    this.indexItems();
  },
  methods: {
    indexItems: function () {
      axios.get("http://localhost:3000/items").then((response) => {
        console.log("See Items Index", response);
        this.items = response.data;
      });
    },
  },
};
</script>