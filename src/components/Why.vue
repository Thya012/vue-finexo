<template>
  <!-- why section -->
  <section class="why_section layout_padding">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>Why Choose <span>Us</span></h2>
      </div>
      <div class="why_container">
       
        <div class="box" v-for="(item, index) in whies" :key="index">
          <div class="img-box">
            <img :src="item.image" alt="" />
          </div>
          <div class="detail-box">
            <h5>{{ item.title }}</h5>
            <p>
              {{ item.description }}
            </p>
          </div>
        </div>
      
      </div>
      <div class="btn-box">
        <a href=""> Read More </a>
      </div>
    </div>
  </section>
  <!-- end why section -->
</template>
<script>
import { mapState } from 'pinia';
import useWhyStore from '@/store/why';
export default {
  components: {
    
  },

  computed: {
    ...mapState(useWhyStore, ['whies']),
  },


}
</script>