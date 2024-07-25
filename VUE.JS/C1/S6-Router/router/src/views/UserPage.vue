<template>
  <div class="container">
    <profile-component :user="user" @see-more="showMore"></profile-component>
    <table-component-vue :data="data"></table-component-vue>
  </div>

</template>

<script>

import ProfileComponent from '@/components/ProfileComponent.vue'
import TableComponentVue from '@/components/TableComponent.vue'


export default {
  components: { 
        ProfileComponent,
        TableComponentVue
    },
    data(){
        return {
            user:{"id":1,
             "name":"Jacky",
             "age":18,
             "gender":"male",
             "profile":"https://play-lh.googleusercontent.com/UG2SKubtKRheGFyjA-xABUXCmb2laXJ5Nm25PWsk4gOjp_Wf6Wl9EIDE4p7NcI6aMDA"
             },
            data:""
            
        }
    },
    methods:{
        showMore(data){
            this.data = data;
           
        }
    }
   
}
</script>

<style>

</style>