<template>
  <div class="Items-show">
    <h1>{{ message }}</h1>
    <h1>id: {{ item.id }}</h1>
    <h1>name: {{ item.name }}</h1>
    <h1>Picture: {{ item.picture }}</h1>
    <p><img v-bind:src="item.picture"></p>

  </div>
</template>

<style>
img {
  width: 200px;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Showing you an Item!",
      item: {},
    };
  },
  created: function () {
    this.itemShow();
  },
  methods: {
    itemShow: function () {
      console.log("getting a single item");
      console.log(this.$route);
      axios.get(`/items/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.item = response.data;
      });
    },
  },
};
</script>