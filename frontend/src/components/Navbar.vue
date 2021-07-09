<template>
    <div id="nav">
    <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">FiguriX</a>
      </div>
      <ul class="nav navbar-nav">
        <li><router-link to="/">Početna</router-link></li>
        <li><router-link to="/dogadaji">Događaji</router-link></li>
      </ul>
    </div>
</nav>
</div>
</template>
<script>
export default{
    
    props:{
        msg: String,
    }

};
</script>
<style scoped>
.navbar-nav{
  display:inline;
}
</style>