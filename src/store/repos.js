import { defineStore } from 'pinia';
import axios from 'axios';


const useReposStore = defineStore('store', {
  state: () => ({
    courses: [],
  }),
  actions: {
    async getAllRepos() {
      try {
        const url = "/v1/courses/";
        const { data } = await axios.get(url);
        this.courses = data;
      } catch (error) {
        console.log(error.message)
      }

    },
  }

})
export default useReposStore