import { defineStore } from "pinia";


const useWhyStore = defineStore('why',{
    state: ()=>({
          whies:[ {
            image:"images/w1.png",
            title:"Expert Management",
            description:"fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using "
          },
          {
            image:"images/w2.png",
            title:"Secure Investment",
            description:"fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using "
          },
          {
            image:"images/w3.png",
            title:"Instant Trading",
            description:"fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using "
          },
          {
            image:"images/w4.png",
            title:"Happy Customers",
            description:"fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using "
          },
        
        ]
    }),
})
export default useWhyStore