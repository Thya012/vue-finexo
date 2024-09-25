import { defineStore } from "pinia";

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

export default useServiceStore