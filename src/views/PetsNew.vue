<template>
  <section class="Pet-New">
    <form v-on:submit.prevent="submit()">
      <ul> <li v-for="error in errors" v-bind:key="error">{{ error }}</li></ul>
                <div class="container px-5">
                    <div class="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                        <div class="text-center mb-5">
                            <p class="lead fw-normal text-muted mb-0">Create a New Pet</p>
                        </div>
                        <div class="row gx-5 justify-content-center">
                            <div class="col-lg-8 col-xl-6">

                                    <!-- Name input-->
                                    <div class="form-floating mb-3">
                                        <input 
                                        class="form-control" 
                                        id="name" 
                                        type="text" 
                                        v-model="newPetParams.name" 
                                        placeholder="Enter the name of your pet..." data-sb-validations="required" />
                                        <label for="name">Name</label>
                                        <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                    </div>
                                    <!-- Picture Input-->
                                    <div class="form-floating mb-3">
                                        <input 
                                        class="form-control" 
                                        id="picture" 
                                        type="text"  
                                        placeholder="Picture URL"
                                        v-model="newPetParams.picture" />
                                        <label for="Picture">Picture URL</label>
                                    </div>
                                    <!-- Submit success message-->
                                    <!---->
                                    <!-- This is what your users will see when the form-->
                                    <!-- has successfully submitted-->
                                    <div class="d-none" id="submitSuccessMessage">
                                        <div class="text-center mb-3">
                                            <div class="fw-bolder">Form submission successful!</div>
                                            To activate this form, sign up at
                                            <br />
                                            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                        </div>
                                    </div>
                                    <!-- Submit Button-->
                                    <div class="d-grid"><button class="btn btn-primary btn-lg" id="submitButton" type="submit">Submit</button></div>
                            </div>
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