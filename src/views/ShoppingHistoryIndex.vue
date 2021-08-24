<template>
   <section class="py-5">
    <div class="container px-5">
       <div class="row gx-5 justify-content-center">
          <div class="col-lg-8 col-xl-6">
              <div class="text-center">
                <h2 class="fw-bolder">See Past Shopping Trips!</h2>
                  <div class="card h-100 shadow border-0" v-for="shoppinghistory in shoppinghistory" v-bind:key="shoppinghistory.id">
                      <div class="card-body p-4">
                        <a class="text-decoration-none link-dark -link" href="#!"><div class="h5 card-title mb-3">{{ shoppinghistory.date }}</div></a>
                        <p class="card-text mb-0"> 
                        You bought {{ shoppinghistory.quantity}} of {{ shoppinghistory.item.name }} </p>
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
      shoppinghistory: [],
      items: [],
    };
  },
  created: function () {
    axios.get("/items").then((response) => {
      console.log(response.data);
      this.items = response.data;
    });
    this.indexShoppingHistory();
  },
  methods: {
    indexShoppingHistory: function () {
      axios.get("http://localhost:3000/shopping_histories").then((response) => {
        console.log("Shopping History Index", response);
        this.shoppinghistory = response.data;
      });
    },
  },
};
</script>