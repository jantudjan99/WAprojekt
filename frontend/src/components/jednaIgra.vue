<template>
  <div id="jednaIgra">
    <h1>Datum: {{jednaIgra.datum}}</h1>
    
    <div class="card" style="width: 33rem;">
      <img :src="jednaIgra.slika" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{jednaIgra.imeIgre}}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Grad: {{jednaIgra.grad}}</li>
        <li class="list-group-item">Vrijeme turnira: {{jednaIgra.vrijeme}}</li>
        <li class="list-group-item">Adresa: {{jednaIgra.adresa}}</li>
        <li class="list-group-item">Ponijeti opremu: {{jednaIgra.oprema}}</li>
      </ul>
      
  </div>
  </div>
</template>


<script>
import {Dogadaji} from '@/services'
export default {
  name: "jednaIgra",
  props: ['jednaIgra'],
  data(){
    return{
      turnir:[],
    }
  },
  methods:{
    
  },

};

</script>
<style scoped>
.card{
  margin:auto;
}
</style>