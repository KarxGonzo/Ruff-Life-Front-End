<template>
  <section class="Shopping-History-New">
    <form v-on:submit.prevent="submit()">
      <ul> <li v-for="error in errors" v-bind:key="error">{{ error }}</li></ul>
                <div class="container px-5">
                    <div class="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                        <div class="text-center mb-5">
                            <p class="lead fw-normal text-muted mb-0">Create a new Shopping History Event</p>
                        </div>
                        <div class="row gx-5 justify-content-center">
                            <div class="col-lg-8 col-xl-6">

                                    <!-- Name input-->
                                    <div class="form-floating mb-3">
                                        <input class="form-control" id="date" type="date" v-model="newshoppinghistoryParams.date" placeholder="Enter the date of the receipt..." data-sb-validations="required" />
                                        <label for="date">Full Date</label>
                                        <div class="invalid-feedback" data-sb-feedback="date:required">A date is required.</div>
                                    </div>
                                    <!-- Email address input-->
                                    <div class="form-floating mb-3">
                                        <select 
                                        class="form-control" 
                                        id="email" 
                                        type="integer"  
                                        placeholder="Item_ID"
                                        v-model="newshoppinghistoryParams.item_id">
                                         <option v-for="item in items" v-bind:value="item.id">{{ item.name }}</option>
                                         </select>
                                    </div>
                                    <!-- Phone number input-->
                                    <div class="form-floating mb-3">
                                        <input class="form-control" id="quantity" type="integer" v-model="newshoppinghistoryParams.quantity" />
                                        <label for="Quantity">Enter Quantity</label>
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
      newshoppinghistoryParams: {},
      errors: [],
      items: [],
      item_id: 0,
    };
  },
  created: function () {
    axios.get("/items").then((response) => {
      console.log(response.data);
      this.items = response.data;
    });
  },
  methods: {
    submit: function () {
      axios
        .post("/shopping_histories", this.newShoppingHistoryParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/about");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>