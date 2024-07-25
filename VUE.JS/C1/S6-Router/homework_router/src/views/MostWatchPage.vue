<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-4" v-for="product in products" :key="product.id">
        <most-watch-component-vue
          product_details="Product Deatils"
          :product="product"
        />
      </div>
    </div>
    
  </div>
</template>
  
  <script>

import MostWatchComponentVue from '@/components/MostWatchComponent.vue';



export default {
  components: {
    
    MostWatchComponentVue,
   
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Coco",
          price: 20,
          description: "This is a description",
        },
        {
          id: 2,
          name: "Pepsi",
          price: 20,
          description: "This is a description",
        },
        {
          id: 3,
          name: "Red bur",
          price: 20,
          description: "This is a description",
        },
      ],
     
    };
  },
};
</script>
  
  <style>
</style>