<template>
  <Hero></Hero>
  <Services></Services>
  <About></About>
  <Why></Why>
  <Team></Team>
  <!-- <Client></Client> -->
</template>
  
  <script>
import Hero from "@/components/Hero.vue";
import Services from "@/components/Services.vue";
import About from "@/components/About.vue";
import Why from "@/components/Why.vue";
//import Team from "@/pages/Team/Team.vue";
import Team from "@/components/Team.vue";

export default {
  components: {
    Hero,
    Services,
    About,
    Team,
    Why,
    
    
  },
};
</script>
  
  