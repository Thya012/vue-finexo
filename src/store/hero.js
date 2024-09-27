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
const useServiceStore = defineStore('service',{
  state: ()=>({
    services: [ {
      image:"images/s1.png",
      title:"Currency ",
      description:"fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using"
    },{
      image:"images/s2.png",
      title:"Security Storage",
      description:"fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using "
    },{
      image:"images/s3.png",
      title:"Expert Support",
      description:"fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using "
    }],
       
  }),
});

export {useHeroStore, useServiceStore}