<template>

  <section class="team_section layout_padding">
    <div class="container-fluid">
      <div class="heading_container heading_center">
        <h2 class="">Our <span> Courses</span></h2>
      </div>

      <div class="team_container">
        <div class="row">

          <CourseCard v-for="(course, index) in courses" :key="index" :title="course.title" :price="course.price"
            :short-description="course.shortDescription" :url="course.titleURL">



          </CourseCard>
        </div>
      </div>
    </div>
    </section>

</template>
<script>
import useReposStore from "@/store/repos.js"
import { mapState, mapActions } from 'pinia'
import CourseCard from "./cards/CourseCard.vue";

export default {
  components: {
    CourseCard,
  },
  async created() {
    await this.getAllRepos();
    console.log(this.courses);
  },
  computed: {
    ...mapState(useReposStore, ['courses']),
  },
  methods: {
    ...mapActions(useReposStore, ['getAllRepos']),
  }
}
</script>
