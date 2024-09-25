<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+Khmer:wght@100..900&display=swap" rel="stylesheet">
  <div class="sub_page">
    <div class="hero_area">
      <Header></Header>
    </div>
    <router-view></router-view>
  </div>
  <Footer />
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      appName: process.env.VUE_APP_TITLE,
    };
  },
};
</script>
<style>

body {
  font-family: "Noto Serif Khmer", serif;
  font-optical-sizing: auto;
  
  font-style: normal;
  font-variation-settings: "wdth" 100;
}
</style>