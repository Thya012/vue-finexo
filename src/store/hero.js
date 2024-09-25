import { defineStore } from "pinia";

const useHeroStore = defineStore('hero',{
    state: ()=>({
        heroes: [
          {
            image:"images/food/img-5.png",
            title_hero:"fried_food",
            description:"dec_fried"
          },
          {
            image:"images/food/img-8.png",
            title_hero:"soup",
            description:"dec_soup"
          },{
            image:"images/food/img-2.png",
            title_hero:"roasting",
            description:"dec_roasting"
          }],
         
    }),
});

export default useHeroStore