<template>
<div>
  <div v-if="turnir">
    <jednaIgra :jednaIgra="turnir"/>
  </div>
  </div>

</template>


<script>
import {Dogadaji} from '@/services'
import jednaIgra from '@/components/jednaIgra.vue'
export default {
  components: { jednaIgra },
  name: "Detalji-Turnira",
  props: ['id'],
  data(){
    return{
      turnir:[],
    }
  },
  methods:{
    
  },
  async created(){
    console.log("EVO ID-a",this.id)
    this.turnir = await Dogadaji.jedanDogadaj(this.id); 
    console.log(this.turnir);
  }
};
</script>
