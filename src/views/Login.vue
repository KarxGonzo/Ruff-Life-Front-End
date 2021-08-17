<template>
<div class="login">
  <div class="div-center">
    <div class="content">
      <h3>Login</h3>
      <hr />
      <form v-on:submit.prevent="submit()">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" v-model="newSessionParams.email" class="form-control" placeholder="Email">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" v-model="newSessionParams.password"   class="form-control"placeholder="Password">
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
        <hr />
      </form>
    </div>
    </span>
  </div>
  </div>
</template>

<style scoped>
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newSessionParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/sessions", this.newSessionParams)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/about");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>

