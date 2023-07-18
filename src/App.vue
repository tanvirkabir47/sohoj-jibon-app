<script setup>
  import { RouterView } from "vue-router";
  import Header from './views/Header.vue';
  import Footer from './views/Footer.vue';
</script>

<template>
  
  <Header />
  <RouterView />
  <Footer />
</template>