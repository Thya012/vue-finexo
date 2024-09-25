<template>
  <!-- service section -->
  <section class="service_section layout_padding">
    <div class="service_container">
      <div class="container">
        <div class="heading_container heading_center">
          <h2>Our <span>Services</span></h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration
          </p>
        </div>
        <div class="row">

          <div class="col-md-4" v-for="(service, index) in services" :key="index">
            <div class="box">
              <div class="img-box">
                <img :src="service.image" alt="" />
              </div>
              <div class="detail-box">
                <h5>{{ service.title }}</h5>
               
                <p>
                  {{ service.description }}
                </p>
                <a href=""> Read More </a>
              </div>
            </div>
          </div>
          

        </div>
        <div class="btn-box">
          <a href=""> View All </a>
        </div>
      </div>
    </div>
  </section>
  <!-- end service section -->
</template>

<script>
import { mapState } from 'pinia';
import useServiceStore from '@/store/service';
  export default {
  components: {
    
  },
  
  computed: {
    ...mapState(useServiceStore, ['services']),
  },

  
}
</script>