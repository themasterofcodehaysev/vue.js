<template>
  <div >
    <navbarComponent/>
  </div>
  <div class="rout-views">
    <router-view></router-view>
  </div>
  <div>
    <footerComponent/>
  </div>
</template>

<script>
import footerComponent from './components/footer.vue';
import navbarComponent from './components/navbar.vue';


export default {

  name: "App",
  components:{
    navbarComponent,
    footerComponent,
}
};
</script>

<style>
nav {
  padding: 15px;
}
nav a {
  margin: 0 10px;
  text-decoration: none;
}
</style>
