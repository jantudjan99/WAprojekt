<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'

export default{
components:{
  Navbar
}

}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
 

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #198ed1;
    }
  }
}
.navbar-brand{
  padding-top:15px;
}
.navbar .container, 
.navbar .container-fluid, 
.navbar .container-lg, 
.navbar .container-md, 
.navbar .container-sm, 
.navbar .container-xl{
  justify-content: unset;
}
</style>
