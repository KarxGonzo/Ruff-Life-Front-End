<template>
  <div class="signup">
    <div class="div-center">
    <div class="content">
    <form v-on:submit.prevent="submit()">
      <h1>Signup</h1>
         <hr />
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div class="form-group">
          <label for="exampleInputName">Name</label>
          <input type="text" v-model="newUserParams.name" class="form-control" placeholder="Name">
      </div>

      <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" v-model="newUserParams.email" class="form-control" placeholder="Email">
      </div>
  
      <div class="form-group">
          <label for="exampleInputPassword">Password</label>
          <input type="password" v-model="newUserParams.password" class="form-control" placeholder="Email">
      </div>

      <div class="form-group">
          <label for="exampleInputPasswordConfirmation">Password Confirmation</label>
          <input type="password" v-model="newUserParams.password_confirmation" class="form-control" placeholder="Email">
      </div>
  
      <button type="submit" class="btn btn-primary">Login</button>
        <hr />
    </form>
      </div>  
    </div>  
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newUserParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

