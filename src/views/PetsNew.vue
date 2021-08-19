<template>
  <div class="pets-new">
    <form v-on:submit.prevent="submit()">
      <section class="py-5">
        <div class="container px-5">
          <h1 class="fw-bolder fs-5 mb-4">Create a New Pet</h1>
              <div class="card border-0 shadow rounded-3 overflow-hidden">
                <div class="card-body p-0">
                  <div class="row gx-0">
                    <div class="col-sm-0 col-sm-0 py-sm-0">
                      <div class="p-4 p-md-5">
                         <div>
                            <label>Name:</label>
                            <input type="text" v-model="newPetParams.name" />
                          </div>
                          <div>
                            <label>Picture:</label>
                            <input type="text" v-model="newPetParams.picture" />
                          </div>
                          <input type="submit" value="Submit" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
          <br>
      </section>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newPetParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/pets", this.newPetParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/pets");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>