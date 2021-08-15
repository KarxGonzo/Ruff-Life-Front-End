<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div id="nav">
      <router-link to="/pets">Pets Index</router-link> |
      <router-link to="/pets/new">Pets New</router-link> |
    </div>
    <router-view/>
  </div>
</template>
