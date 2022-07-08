<template>
  <v-app>
   <div class="header">
    <nuxt-link to="/">Homepage</nuxt-link>
    <nuxt-link to="/about">About</nuxt-link>
   </div>
    <nuxt />
  </v-app>
</template>

<script>
</script>

<style>
.header {
 display: flex; 
 flex-direction: row;
 justify-content: space-between;
}
</style>
